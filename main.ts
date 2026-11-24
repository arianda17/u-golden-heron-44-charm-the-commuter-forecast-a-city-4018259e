import { writeFileSync, mkdirSync } from 'node:fs';

const entry = "Puddleton: rain and drizzle, 11°C; the 8:04 bus runs on puddle time, the mayor is a duck. Splash on, darling.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry + '\n', 'utf8');