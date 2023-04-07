import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./src",
});

const config = {
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
