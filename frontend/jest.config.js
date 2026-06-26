module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: ["**/__tests__/**/*.test.ts", "**/__tests__/**/*.test.tsx"],
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: {
        target: "ES2020",
        types: ["jest", "@testing-library/jest-dom"],
      },
    },
  },
};
