# Aang Brunch 0.5.2
[![Dependency Status](https://gemnasium.com/jupl/aang-brunch.png)](https://gemnasium.com/jupl/aang-brunch)


## Introduction
Aang Brunch is a skeleton to for building [AngularJS](http://angularjs.org/) applications. This skeleton leverages [node](http://nodejs.org), [Brunch](http://brunch.io), [Scaffolt](https://github.com/paulmillr/scaffolt), [Bower](http://bower.io/), and [Jake](https://github.com/mde/jake) to provide cross-platform tasks in a simple package.

For a mobile/Cordova friendly variant, check out [this skeleton](https://github.com/jupl/aang-brunch/tree/cordova).


## File Structure
    ├── app                     # Assets/code/styles for the client application
    │   └── assets              # Static files copied without modification
    │   ├── controllers         # Angular controllers
    │   ├── directives          # Angular directives
    │   ├── filters             # Angular filters
    │   ├── services            # Angular services (factories/providers/services)
    │   ├── styles              # Stylus stylesheets
    │   ├── templates           # HTML templates for Angular
    │   ├── app.js              # Configure main application module
    │   ├── app.styl            # Application/page styling definition
    │   ├── base.styl           # Stylus variables and mixins for the application
    │   └── initialize.js       # Declare and setup Angular modules
    ├── generators              # Generators used by Scaffolt
    ├── jakelib                 # Unified set of tasks for development
    ├── public                  # Compiled client-side assets
    ├── server                  # Server configuration
    │   ├── models              # Persistent server-side model configuration
    │   ├── passport            # Passport integration
    │   ├── routes              # Custom routes/proxies/etc. (server-side)
    │   ├── config.js           # Configuration options
    │   ├── prerender.js        # Prerender middleware integration
    │   └── session.js          # Session configuration
    ├── test                    # Test-related files
    │   ├── code                # Code tests that run with Karma
    │   ├── site                # Site tests that run with WebDriverJS
    │   ├── mocha.opts          # Default options for site testing
    │   └── setup.js            # Initialization for site testing
    ├── vendor                  # Additional 3rd party JS/CSS libraries
    ├── .editorconfig           # EditorConfig definitions for coding styles
    ├── bower.json              # Listing for Bower dependencies to download
    ├── brunch-config.js        # Brunch app build configuration
    ├── karma.conf.js           # Karma runner setup
    └── package.json            # Node project dependencies and configuration


## Requirements
- [node.js](http://nodejs.org)
- [Jake](https://github.com/mde/jake#installing-with-npm) (required for development)
- [MongoDB](http://www.mongodb.org/) (if using server extras)


## Setup
1. Install node.js.
2. If using Windows and leveraging Bower, install [Git](http://git-scm.com/download/win).
3. If working on development, install Jake.
4. Open a terminal window and navigate to the project directory.
5. Execute the command `npm install` to install all package dependencies.
6. If server is not going to just serve static assets, run the `add:serverextras` task.


## Notes

### `npm start` / `npm test`
One-line commands are provided for convenience as well for those that want to start running things as quickly as possible by installing depedencies automatically. Use `npm start` to download non-development packages and run the `server:prod` task. Use `npm test` to download all packages and run the `test:all` task.

### Server
Out of the box the server provided simply serves static assets with support for HTML5 push state. Extensible server extras can be added to support models and sessions with [Mongoose](http://mongoosejs.com/), authentication with [Passport](http://passportjs.org/), and caching with [Prerender](https://prerender.io/). To add extras, see the `add:serverextras` task.

When declaring Angular components, you can use the condensed syntax for dependency injection without worry, as this skeleton uses [ngmin](https://github.com/btford/ngmin) during minification to translate injections such as `.controller(function($http) { ... })` to `.controller(['$http', function(a) { ... }])`.


## Task List
While Brunch/Scaffolt/etc. can be used, Jake commands are provided for a simple and consistent interface. These tasks can be executed using `jake`. (`jake [task]`) These are the following available tasks provided out of the box:


### NPM

#### `npm:clean`
Remove downloaded Node modules. This is useful if you want to reinstall dependencies. (ex. updated/corrupted package(s)) Remember that you need to call `npm install` to install dependencies.


### Bower

#### `bower:install`
Download and preinstall any Bower dependencies in advance. You can run this if you want to download Bower dependencies in advance.

#### `bower:clean`
Remove downloaded Bower dependencies. This is useful if you want to reinstall dependencies. (ex. updated/corrupted package(s))


### Extras
These commands add additional features/items to the project that are not included by default.

#### `add:testing` / `rem:testing`
Add/remove packages require to run code and site testing.

#### `add:serverextras` / `rem:serverextras`
Add/remove extra packages to the server so that it does more than just serve static assets. For more information see notes above.

#### `add:jquery` / `rem:jquery`
Add/remove the ubiquitous library [jQuery](http://jquery.com/) to/from the project.

#### `add:normalize` / `rem:normalize`
Add/remove [normalize.css](http://necolas.github.io/normalize.css/) to ensure a consistent starting point in styling between different browsers.


### Scaffolding
Scaffolding commands are available in the form of `generate` and `destroy`. (syntax ex: `jake generate codetest=user`) Multiple scaffolds can be specified in a single command, as well as separating names with commas. (ex: `jake generate codetest=test1,test2 sitetest=test3`) The following aliases are also available: `g`, `gen`, `d`, `del`. (ex: `jake g codetest=user`) Unit test files are automatically generated for Angular components.

#### `generate` / `destroy`
List available scaffolds.

#### `generate controller=[name]` / `destroy controller=[name]`
Generate/destroy an [Angular controller](http://docs.angularjs.org/guide/controller).

#### `generate directive=[name]` / `destroy directive=[name]`
Generate/destroy an [Angular directive](http://docs.angularjs.org/guide/directive).

#### `generate factory=[name]` / `destroy factory=[name]`
Generate/destroy an [Angular service](http://docs.angularjs.org/guide/dev_guide.services.creating_services) using the factory declaration.

#### `generate filter=[name]` / `destroy filter=[name]`
Generate/destroy an [Angular filter](http://docs.angularjs.org/guide/filter).

#### `generate provider=[name]` / `destroy provider=[name]`
Generate/destroy an Angular service using the provider declaration.

#### `generate service=[name]` / `destroy service=[name]`
Generate/destroy an Angular service using the service declaration.

#### `generate style=[name]` / `destroy style=[name]`
Generate/destroy a Stylus stylesheet file.

#### `generate template=[name]` / `destroy template=[name]`
Generate/destroy an HTML file that will be added to Angular's template cache in advance. For an example, see `app/app.js` and `app/templates/index.html`.

#### `generate codetest=[name]` / `destroy codetest=[name]`
Generate/destroy a test file with the given test name for testing client-side code with Karma.

#### `generate sitetest=[name]` / `destroy sitetest=[name]`
Generate/destroy a test file with the given test name for testing the site with WebDriverJS.


### Testing
Tests leverage [Mocha](http://visionmedia.github.io/mocha/), [Mocha as Promised](https://github.com/domenic/mocha-as-promised), and [Chai](http://chaijs.com/). Code and site testing is provided. Code testing adds [Sinon](http://sinonjs.org/) and [Sinon-Chai](https://github.com/domenic/sinon-chai). Testing packages will automatically be installed if not available.

#### `test:all [codereporter=[codereporter]] [sitereporter=[sitereporter]]`
Run all tests listed below once. For more information on reporters see below.

#### `test:code [reporter=[reporter]] [watch=false]`
Run code-based tests (ex. unit tests) using Karma. Karma is preconfigured to run with all available browsers on the system. ([PhantomJS](http://phantomjs.org/) is included). Karma reporter can be specified with the `reporter` option. If you run this task with `watch=true` Karma will auto-run on file changes. Otherwise by default Karma runs once. You can also run the server while watching files with `watch=server`.

#### `test:site [reporter=[reporter]] [watch=false]`
Run site-based tests (ex. system tests) using PhantomJS and WebDriverJS. A server is started up temporarily to interact with the site. A Mocha reporter can be specified with the `reporter` option. If you run this task with `watch=true` Mocha will auto-run on file changes with [nodemon](http://remy.github.io/nodemon/). Otherwise by default Mocha runs once. The global method `getDriver` is provided to get a setup and built driver. WebDriverJS' use of Promises can be combined with Mocha as Promised to handle asynchronous behavior easily. ex:

```js
'use strict';

describe('Sample', function() {
  var driver;

  before(function() {
    driver = getDriver();
  });

  beforeEach(function() {
    return driver.get(baseUrl);
  });

  it('Has a proper title', function() {
    return driver.getTitle().then(function(title) {
      title.should.equal('Aang Brunch');
    });
  });

  after(function() {
    driver.quit();
  });
});
```


### Building
These commands are used to assemble the application, generating the necessary JS/CSS and adding assets. Use `dev` mode to keep readable JS/CSS, plus include source maps. Use `prod` mode to minify/uglify JS/CSS as well as omit source maps and tests. If any Bower dependencies have not been downloaded yet, Bower will first download them.

#### `build:[mode]`
Assemble the application once.

#### `watch:[mode]`
Assemble the application and continue to watch for changes. Rebuild every time a change is detected.

#### `server:[mode]`
Assemble the application and continue to watch for changes. Rebuild every time a change is detected. Also, the application is served locally to open with a browser.


## Libraries

### Core
- [Brunch Toolchain](https://github.com/jupl/brunch-toolchain) 0.9.2

### Languages
- [Stylus](https://github.com/learnboost/stylus)

### Framework
- [AngularJS](http://angularjs.org/)

### Utilities
- [ngRoute](http://docs.angularjs.org/api/ngRoute)
- [Nib](http://visionmedia.github.io/nib/)
- [Angular Mocks](http://docs.angularjs.org/api/ngMock) (for testing)
- [ngmin](https://github.com/btford/ngmin) (for minification)
