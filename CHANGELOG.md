# Changelog

### WIP
- Enforce strict mode
- Go back to ngRoute for now (too many issues with ui-router)
- Minor refactor in skeleton
- Update BTC
  - Remove Prerender server
  - Add support for Mongoose/Passport/sessions
  - Simplify Brunch config
  - Remove dashes in generators
  - Detect browsers in Karma
  - Server refactoring
  - Unify `add:codetesting` and `add:sitetesting` tasks
  - Add scaffold to generate server model
  - Add aliases to generator tasks

### 0.4.0 (February 5, 2014)
- Add angular-mocks to code testing package set
- Update BTC
  - Do not install Prerender packages by default
    - Autodetect if packages are available
  - Add tasks to install/uninstall Prerender packages
  - Add PhantomJS as a dependency (could be used for Prerender)
  - Do not install code/site testing-related packages by default
  - Add tasks to install/uninstall code/site testing-related packages
  - Update Sinon Chai
  - Fix bug in `npm:clean`

### 0.3.0 (February 4, 2014)
- Update BTC
  - Clean npm cache for `npm:clean`
  - Add structure to `server` directory
  - Add Prerender support (server and middleware)
  - Update karma-chai-plugins

#### 0.2.1 (January 31, 2014)
- Update BTC
  - Add `npm:clean` task
  - Clean up package.json

### 0.2.0 (January 30, 2014)
- Switch to UI Router
- Update BTC
  - Update jQuery
  - Update normalize.css
  - Update Chai

#### 0.1.5 (January 15, 2014)
- Update BTC
  - Fix watch in `test:code`
  - Update Mocha
  - Update Bluebird
  - Update Nodemon

#### 0.1.4 (December 21, 2013)
- Update BTC
  - Update Mocha
  - Update WebDriverJS

#### 0.1.3 (December 14, 2013)
- Update BTC
  - Allow multiple names to be specified per scaffold
  - Move default Jake task to Jakefile
  - Include server to customize and add services
  - Update packages

#### 0.1.2 (December 12, 2013)
- Update BTC
  - Fix Windows support
  - Internal fix to bring back spawn options
  - Add specific WebStorm and IntelliJ files to gitignore
  - Stop worrying about absolute paths
  - Mark execute promises as cancellable
  - Move auto-reload-brunch to devDependencies
  - Allow project's bower to be run if root (or root-like)
  - Update selenium-webdriver

#### 0.1.1 (December 4, 2013)
- Update BTC

### 0.1.0 (November 15, 2013)
- Initial release.
