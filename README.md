# [BTC Angular](http://jupl.github.io/btc/angular/) 0.6.1
[![Dependency Status](https://gemnasium.com/jupl/btc-angular.png)](https://gemnasium.com/jupl/btc-angular)

This is a project template for [AngularJS](http://angularjs.org/) applications with Cordova. Visit [the site](http://jupl.github.io/btc/angular) for more information.


## File Structure
    ├── app                     # Assets/code/styles for the client application
    │   ├── assets              # Static files copied without modification
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
    ├── cordova                 # Cordova project
    ├── generators              # Generators used by Scaffolt
    ├── jakelib                 # Unified set of tasks for development
    ├── public                  # Compiled client-side assets
    ├── server                  # Server configuration
    │   ├── browser-sync.js     # BrowserSync proxy setup
    │   └── index.js            # Starting point of server setup
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


## Setup
1. Download and install the following if you have not already:
  - [Node.js](http://nodejs.org/download/)
  - [Git](http://git-scm.com/downloads)
  - [Jake](https://github.com/mde/jake#installing-with-npm) (if developing)
  - [Platform SDKs](https://github.com/apache/cordova-cli#requirements)
2. Download one of the starter projects from GitHub.
3. Navigate to the project directory and run the command `npm install`.


## Notes

### `npm test`
One-line commands are provided for convenience as well for those that want to start running things as quickly as possible by installing depedencies automatically. Use `npm test` to download all packages and run both the `test:install` and `test:all` tasks.

### ngmin
When declaring Angular components, you can use the condensed syntax for dependency injection without worry, as this skeleton uses [ngmin](https://github.com/btford/ngmin) during minification to translate injections such as `.controller(function($http) { ... })` to `.controller(['$http', function(a) { ... }])`.


## Libraries

### Core
- [BTC Angular](https://github.com/jupl/btc-angular) 0.6.1
- [BTC Cordova](https://github.com/jupl/btc-cordova) 0.10.3

### Utilities
- [Angular Touch](http://docs.angularjs.org/api/ngTouch)
