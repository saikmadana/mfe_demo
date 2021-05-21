Steps to create Shell(Container App):
- Add following property in the `package.json` file as root property. This tells the opt-in for use of webpack 5
    `"resolutions": {
        "webpack": "^5.0.0"
    }`
- Run `ng config cli.packageManager yarn`. This tells the usage of `yarn` package manager as webpack 5 not there in npm
- Add module federation plugin
  `ng add @angular-architects/module-federation --project shell --port 5000`
- 