import * as migration_20261016_143055_initial from './20261016_143055_initial';

export const migrations = [
  {
    up: migration_20261016_143055_initial.up,
    down: migration_20261016_143055_initial.down,
    name: '20261016_143055_initial'
  },
];
