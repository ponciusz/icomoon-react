import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!src/index.ts"],
  verbose: true,
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
export default config;
