module.exports = {
  roots: ["<rootDir>/tests"],
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/"],
  verbose: true,
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputName: "junit-TEST.xml"
      }
    ]
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
