import { promises as fs } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testDataPath = path.resolve(__dirname, '../tests/api/testData.json');

export async function getTestData() {
  try {
    const data = await fs.readFile(testDataPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading test data:", error);
    throw error;
  }
}
