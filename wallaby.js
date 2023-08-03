module.exports = function (wallaby) {
    return {
      files: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],
  
      tests: ['src/**/*.test.js', 'src/**/*.test.jsx'],
  
      env: {
        type: 'node',
        runner: 'node',
      },
  
      compilers: {
        '**/*.js': wallaby.compilers.babel(),
      },
  
      testFramework: 'jest',
  
      setup: (wallaby) => {
        const jestConfig = require('react-scripts/scripts/utils/createJestConfig')(p => require.resolve('react-scripts/' + p));
        Object.keys(jestConfig.transform || {}).forEach(k => ~k.indexOf('^.+\\.(js|jsx') && void delete jestConfig.transform[k]);
        delete jestConfig.testEnvironment;
        wallaby.testFramework.configure(jestConfig);
      },
    };
  };
  