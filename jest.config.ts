// jest.config.ts
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  rootDir: '.',
  verbose: true,
  roots: [
    '<rootDir>/src'
  ],
  moduleDirectories: ['node_modules', 'src']
};
export default config;