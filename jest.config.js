module.exports = {
  preset: 'jest-preset-angular',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js'
  },
  resolver: '@nrwl/builders/plugins/jest/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupJest.ts',
  setupFiles: ['jest-canvas-mock'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.spec.json'
    },
    __TRANSFORM_HTML__: true
  },
  collectCoverageFrom: [
    'apps/**/src/**/*.ts',
    'libs/**/src/**/*.ts',
    '!apps/**/*-e2e/**/*.ts',
    '!apps/**/src/**/*module.ts',
    '!libs/**/src/**/*module.ts',
    '!apps/**/src/environments/*.ts',
    '!apps/**/src/main.ts',
    '!apps/**/src/polyfills.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: -20
    }
  }
};
