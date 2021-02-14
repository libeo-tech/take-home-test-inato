module.exports = {
  "moduleNameMapper": {
    "^src/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "roots": [
    "<rootDir>/tests"
  ],
  "testRegex": "(.*|(\\.|/)(test|spec))\\.tsx?$"
};