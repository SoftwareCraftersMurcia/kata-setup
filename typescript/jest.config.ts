import { JestConfigWithTsJest } from "ts-jest"

const JestOptions: JestConfigWithTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};

export default JestOptions
