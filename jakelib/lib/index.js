require('sugar');
var fs = require('fs');
var jsonfile = require('jsonfile');
var path = require('path');
var Promise = require('bluebird');
var spawn = require('child_process').spawn;

var cwd = process.cwd();
var slice = Array.prototype.slice;

/**
 * List of available generators from Scaffolt. Each element has the following
 * properties:
 *   name         Generator name that is to be passed to Scaffolt
 *   task         Same as name, but its name is formatted to be friendly with
 *                Jake task names
 *   description  Description of generator. If one is not defined in Scaffolt,
 *                then make an educated guess with the name.
 *   isModule     If true, then when generating the scaffold the name parameter
 *                is ignored. Otherwise, the name parameter is used for
 *                scaffolding.
 * @type {Array}
 */
exports.generators = fs.readdirSync('generators').filter(function(generator) {
  var generatorFile = path.resolve('generators', generator, 'generator.json');
  return fs.existsSync(generatorFile);
})
.map(function(generator) {
  var generatorFile = path.resolve('generators', generator, 'generator.json');
  var json = jsonfile.readFileSync(generatorFile);
  return {
    task: generator.dasherize().replace(/-/g, ''),
    name: generator,
    description: json.description || generator.spacify(),
    isModule: !!json.isModule
  }
});

/**
 * Return a function that will execute the a node module command
 * @param  {String} moduleName Name of node module installed locally
 * @return {Function}          Function that runs the node module command.
 *                             Arguments passed to the function will be added
 *                             to the module command. It returns a promise.
 */
exports.npmBin = function(moduleName) {
  var command = path.resolve('node_modules', '.bin', moduleName);
  return function() {
    return execute.apply(null, [command].concat(slice.call(arguments, 0)));
  };
}

/**
 * Wraps spawn command in a promise.
 * @param  {String}    command Path to command to execute in the shell
 * @param  {Array}     args    If given argument is an array, it is assumed
 *                             that it is a list of arguments to be passed.
 * @param  {...String}         Params for command that would be space separated
 * @return {Promise}           Bluebird promise that resolves when command is
 *                             completed. Errors or aborts will cause
 *                             rejection.
 */
function execute(command, args) {
  var child;

  // Ensure that stdio io is inherited (allows color preservation)
  var options = {
    stdio: 'inherit'
  };

  // Check if arguments have been given as an array
  if(!Object.isArray(args)) {
    args = slice.call(arguments, 1);
  }

  // Run spawn and leverage promises
  return new Promise(function(resolve, reject) {
    // Catch for Ctrl-C
    process.on('SIGINT', reject);

    // Execute and check for errors when process finishes
    child = spawn(command, args, options);
    child.on('exit', function(code) {
      if(!code) {
        resolve();
      }
      else {
        reject();
      }
    });
    child.on('error', reject);
  })
  .cancellable()
  .finally(function() {
    if(child) {
      child.kill();
    }
  });
};
