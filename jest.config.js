/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@redux/(.*)": "<rootDir>/src/redux/$1",
    "@slices/(.*)": ["<rootDir>/src/redux/features/$1"],
  },
};
