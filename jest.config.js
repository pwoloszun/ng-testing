module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/src/setup-tests.ts'
  ],
  testPathIgnorePatterns: [
    'cypress'
  ],
  moduleNameMapper: {
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@api/(.*)$': '<rootDir>/src/app/core/api/$1',
    '@app/(.*)$': '<rootDir>/src/app/$1'
  }
};
