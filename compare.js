import { isEqual } from "lodash";
import { join } from "path";
import fs from "fs";

const outputPath = "./output.txt";
const originalOutputPath = "./original-output.txt";

const extractJsonFromFile = path => {
  const normalizedPath = join(__dirname, path);

  const exists = fs.existsSync(normalizedPath);

  if (!exists) {
    throw new Error(`file at path ${path} doesn't exist`);
  }

  const buffer = fs.readFileSync(normalizedPath, {
    encoding: "utf8",
    flag: "r"
  });

  // nice trick below to be able to convert into json
  return JSON.parse(`[${buffer}]`);
};

try {
  const outputData = extractJsonFromFile(outputPath)[0];
  const originalData = extractJsonFromFile(originalOutputPath)[0];

  let equal = outputData.length === originalData.length;
  let count = 0;

  while (equal && count < outputData.length) {
    equal = isEqual(outputData[count], originalData[count]);
    count++;
  }

  if (equal) {
    console.info("outputs are equals, well done!");
  } else {
    console.info("outputs are not equals, try again.");
  }
} catch (error) {
  console.error(error.message);
}
