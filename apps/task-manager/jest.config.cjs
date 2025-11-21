// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ["node_modules", "src", 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  "moduleNameMapper": {
    "^src/(.*)$": "<rootDir>/src/$1",
  },  
  collectCoverageFrom: ['src/components/**/*.{ts,tsx}', '!**/__tests__/**'],
};
