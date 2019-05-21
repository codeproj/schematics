"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
const stringUtils = { classify: strings_1.classify, dasherize: strings_1.dasherize, camelize: strings_1.camelize, underscore: strings_1.underscore };
function filterTemplates(options) {
    if (!options.service) {
        return schematics_1.filter(path => !path.match(/\.service\ts$/) && !path.match(/-item\.ts$/) &&
            !path.match(/\.bak$/));
    }
    return schematics_1.filter(path => !path.match(/\.bak$/));
}
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function feature(options) {
    options.path = options.path ? core_1.normalize(options.path) : options.path;
    const templateSource = schematics_1.apply(schematics_1.url('./files'), [
        filterTemplates(options),
        schematics_1.template(Object.assign({}, stringUtils, options)),
    ]);
    return schematics_1.chain([
        schematics_1.branchAndMerge(schematics_1.chain([
            schematics_1.mergeWith(templateSource),
        ])),
    ]);
}
exports.feature = feature;
//# sourceMappingURL=index.js.map