module.exports = function (grunt) {

	grunt.initConfig({
		intern: {
			client: {
				options: {
					// for other available options, see:
					// https://github.com/theintern/intern/wiki/Using-Intern-with-Grunt#task-options
					config: 'tests/intern'
				}
			},
			clientSuiteGet: {
				// an example of specifying a suite name
				options: {
					config: 'tests/intern',
					suites: ['tests/lib/get']
				}
			},
			runner: {
				options: {
					config: 'tests/intern',
					runType: 'runner'
				}
			}
		}
	});

	// We are loading the intern task from the intern/grunt dir because
	// at this time, intern is not distribued via npm. This should change
	// in the future.
	grunt.loadTasks('intern/grunt');

	// Register a test task
	grunt.registerTask('test', ['intern:client']);

	// By default we just test
	grunt.registerTask('default', ['test']);
};
