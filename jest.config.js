module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!src/index.ts"],
  verbose: false
};
