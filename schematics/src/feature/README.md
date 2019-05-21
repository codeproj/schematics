# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 
### How to use:
1.Navigate to feature directory:
cd src/feature

2.Run cmd:
npm install (schematics try to call jasmine from npm)

3.Run cmd:
npm run build

4.Link schematics feature to your project:
sudo npm link navigate/to/schematics/feature`

5.Use schematics in your project:
ng generate feature:feature --name=module-name --path=src/app/pages


