# Cordova Brunch 0.2.0

[<img src="https://david-dm.org/jupl/cordova-brunch.png"/>](https://david-dm.org/jupl/cordova-brunch)
[<img src="https://david-dm.org/jupl/cordova-brunch/dev-status.png"/>](https://david-dm.org/jupl/cordova-brunch#info=devDependencies)


## Introduction

Cordova Brunch is a base skeleton for building web applications. In additional to assembling standard web-based application, this skeleton can also assemble native applications using Cordova. (Currently supports iOS and Android applications) This is a toolchain that leverages [node](http://nodejs.org), [Brunch](http://brunch.io), [Scaffolt](https://github.com/paulmillr/scaffolt), [Bower](http://bower.io/), [Jake](https://github.com/mde/jake), and [PhantomJS](http://phantomjs.org/) to provide cross-platform tasks in a simple package. It can be used for skeletons. [EditorConfig](http://editorconfig.org/) is also provided to help with consistency. For complete skeletons that include Cordova Brunch see:
- [Chapless Brunch](https://github.com/jupl/chapless-brunch/tree/cordova)
- [Cinder Brunch](https://github.com/jupl/cinder-brunch/tree/cordova)


## File Structure

    ├── app                 # App is built here. Look at Brunch for more info.
    │   └── assets          # Static files that are just copied
    ├── bower_components    # Packages installed by Bower
    ├── cordova             # Generated Cordova project
    ├── generators          # Generators used by Scaffolt
    ├── jakelib             # Unified set of tasks for development
    ├── public              # Generated final product
    ├── setup               # Add configuration options to brunch-config
    ├── test                # Test-related files
    │   ├── assets          # Static assets required for code tests
    │   ├── code            # Code-based tests for Mocha PhantomJS
    │   ├── mocha.opts      # Default options for site tests
    │   ├── setup.js        # Configuration for site tests
    │   ├── site            # Site-based tests for Mocha
    │   └── vendor          # Test libraries for code-based tests
    ├── vendor              # 3rd party JS/CSS libraries
    ├── .editorconfig       # EditorConfig definition file for coding styles
    ├── bower.json          # Listing for Bower dependencies to download
    ├── brunch-config.js    # Brunch app build configuration
    └── package.json        # Project dependencies and configuration


## Requirements
- [node.js](http://nodejs.org)
- [Jake](https://github.com/mde/jake#installing-with-npm) (required for development)
- SDKs for devices to be developed on ([more information](https://github.com/apache/cordova-cli#requirements))

## Setup

1. Install node.js.
2. If doing development, install Jake.
4. Open a terminal window and navigate to the project directory.
5. Execute the command `npm install` to install all package dependencies.


## Notes
If you want to just run Brunch without using Jake tasks, just use either `web:dev` or `web:prod` for the environment. ex: `brunch watch --server --environment web:prod`

One-line commands are provided for convenience as well for those that want to start running things as quickly as possible by installing depedencies automatically. Use `npm start` to download non-development packages and run the `server:prod` task. Use `npm test` to download all packages and run the `test:all` task.


## Task List
While Brunch/Scaffolt/etc. can be used, Jake commands are provided for a simple and consistent interface. These tasks can be executed using `jake`. (`jake [task]`) These are the following available tasks provided out of the box:


### Bower

#### `bower:install`
Download and preinstall any Bower dependencies in advance. You can run this if you want to download Bower dependencies in advance.


### Extras
These commands add additional features/items to the project that are not included by default.

#### `add:jquery` / `rem:jquery`
Add/remove [jQuery](http://jquery.com/) to/from the project.

#### `add:fastclick` / `rem:fastclick`
Add/remove FastClick to/from the project for optimized click events in touch devices. Visit their [page](https://github.com/ftlabs/fastclick) for more information and instructions.

#### `add:hammer` / `add:hammerjquery` / `rem:hammer`
Add/remove Hammer.js (standalone or jQuery plugin) to/from the project for touch event handling. Visit their [page](http://eightmedia.github.io/hammer.js/) for more information.


### Cordova
These commands are to set up and initialize native projects that use Cordova to wrap your web application in a native app. `[device]` denotes the application device to build under. (Currently supporting `ios` and `android`) If you need access to the Cordova JavaScript from your page use the script tag: `<script src="cordova.js"></script>`

#### `cordova:init [package=[package] [name=[name]]]`
Create a new Cordova project using [cordova-cli](https://github.com/apache/cordova-cli).
- Package and name options are optional, which uses the default Cordova options. If you specify a `name`, you must also specify `package`.
- Project will reside in `cordova/`.
- Cordova-specific files are added to `app/assets`. (These files will be ignored if a non-Cordova web build is made.) Do not remove these files.
- It is recommended for your web app to not depend on any files in `app/assets/res`.

#### `cordova:add device=[device]`, `cordova:rem device=[device]`
Add/remove specified device support to the Cordova project.


### Scaffolding

#### `gen:codetest name=[name]` / `del:codetest name=[name]`
Generate/destroy a test file with the given test name for testing code. (ex: unit testing)

#### `gen:sitetest name=[name]` / `del:sitetest name=[name]`
Generate/destroy a test file with the given test name for testing the site. (ex: functional testing)


### Testing
Temporarily spin up a local server with Brunch and run tests, leveraging [PhantomJS](http://phantomjs.org/), [Mocha](http://visionmedia.github.io/mocha/), and [Chai](http://chaijs.com/). Code and site testing is provided. Code testing adds [Sinon](http://sinonjs.org/) and [Sinon-Chai](https://github.com/domenic/sinon-chai), and runs through [mocha-phantomjs](http://metaskills.net/mocha-phantomjs/). Site testing uses [WebDriverJS](https://github.com/camme/webdriverjs).

#### `test:all [reporter=[reporter]]`
Run all tests listed below. Since Mocha is used, the reporter can be specified. (ex: `jake test:all reporter=min`) By default `spec` reporter is used.

#### `test:code [reporter=[reporter]]`
Run code-based tests (ex. unit tests) using mocha-phantomjs. In addition, if you run a build (see below) using `dev` the tests are included with a reporter under `test/` to run in browsers. (ex. visit `http://locahost:[port]/test`)

#### `test:site [reporter=[reporter]]`
Run site-based tests (ex. system tests) using PhantomJS and WebDriverJS. The global method `getDriver` is provided to get a setup and built driver. [Mocha as Promised](https://github.com/domenic/mocha-as-promised) is included to leverage WebDriverJS' use of Promises and handle asynchronous behavior easily. ex:

```js
describe('Sample', function() {
  var driver;

  before(function() {
    driver = getDriver();
  });

  it('Has a proper title', function() {
    return driver.get('http://localhost:3333').then(function() {
      return driver.getTitle();
    })
    .then(function(title) {
      expect(title).to.equal('Brunch Toolchain');
    });
  });

  after(function() {
    driver.quit();
  });
});
```


### Building
These commands are used to assemble the application, generating the necessary JS/CSS and adding assets. Use `dev` mode to keep readable JS/CSS, plus include source maps as well as tests under the `test/` folder. Use `prod` mode to minify/uglify JS/CSS as well as omit source maps and tests. Specify `device` where applicable to build a native app using Cordova for a specific device. If any Bower dependencies have not been downloaded yet, Bower will first download them.

#### `build:[mode] [device=[device]]`
Assemble the application once. If `device` is specified, then build a native app for a device using Cordova. Otherwise it uses the default web environment.

#### `watch:[mode]`.
Assemble the application and continue to watch for changes. Rebuild every time a change is detected.

#### `server:[mode]`
Assemble the application and continue to watch for changes. Rebuild every time a change is detected. Also, the application is served locally to open with a browser. This build uses the web environment.

#### `emulate:[mode] device=[device]`
Assemble the application, compile, and deploy to an emulator for the specified device.

**NOTE**: [ios-sim](https://github.com/phonegap/ios-sim) is required to emulate on the iOS Simulator.


## Libraries

### Core
- [Brunch Toolchain](https://github.com/jupl/brunch-toolchain)
- [Cordova](http://cordova.apache.org)

### Utilities
- [jQuery](http://jquery.com/)
- [FastClick](https://github.com/ftlabs/fastclick)
- [Hammer.js](http://eightmedia.github.io/hammer.js/)
