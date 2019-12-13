module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/demo"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!src/index.ts"],
  verbose: true
};
