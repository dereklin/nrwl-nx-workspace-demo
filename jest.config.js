module.exports = {
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupJest.ts',
  setupFiles: ['jest-canvas-mock'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.spec.json'
    },
    __TRANSFORM_HTML__: true
  },
  testResultsProcessor: './node_modules/jest-html-reporter',
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
  },
  moduleNameMapper: {
    '@nrwl-nx-workspace-demo/app-interfaces': '<rootDir>/libs/app-interfaces/src',
    '@nrwl-nx-workspace-demo/app-tokens': '<rootDir>/libs/app-tokens/index.ts',
    '@nrwl-nx-workspace-demo/(.*)': '<rootDir>/libs/$1/src/index.ts',
    '@nrwl-nx-workspace-demo': '<rootDir>/libs'
  }
};
