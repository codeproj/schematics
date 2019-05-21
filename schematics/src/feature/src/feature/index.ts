import {
  chain, Rule, apply, url, filter, template,
  branchAndMerge, mergeWith,
} from '@angular-devkit/schematics';
import { schemaOptions } from './schema';
import { normalize } from '@angular-devkit/core';
import { classify, dasherize, camelize, underscore } from '@angular-devkit/core/src/utils/strings';

const stringUtils = {classify, dasherize, camelize, underscore };

function filterTemplates(options: schemaOptions) {
  if (!options.service) {
    return filter(path => !path.match(/\.service\ts$/) && !path.match(/-item\.ts$/) &&
    !path.match(/\.bak$/));
  }
  return filter(path => !path.match(/\.bak$/));
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function feature(options: schemaOptions): Rule {
  options.path = options.path ? normalize(options.path) : options.path;

  const templateSource = apply(url('./files'), [
    filterTemplates(options),
      template({
        ...stringUtils,
        ...options,
      }),
  ]);
  return chain([
    branchAndMerge(chain([
      mergeWith(templateSource),
    ])),
  ]);
}
