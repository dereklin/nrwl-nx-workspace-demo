module.exports = {
  preset: 'jest-preset-angular',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupJest.ts',
  setupFiles: ['jest-canvas-mock'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: ['jest-preset-angular/InlineHtmlStripStylesTransformer']
    }
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
