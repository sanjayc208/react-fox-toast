import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

const getAllMdxFiles = (dir: string): string[] => {
  const files: string[] = [];
  
  // Get all files and directories in the current directory
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // If it's a directory, recursively explore it
      files.push(...getAllMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      // If it's a .mdx file, add it to the list
      files.push(fullPath);
    }
  });

  return files;
};

export async function GET() {
  try {
    const suffixPath = "/src/contents/docs/";
    const docsDir = path.join(process.cwd(), suffixPath);

    // Get all .mdx files recursively
    const mdxFiles = getAllMdxFiles(docsDir);

    const docsContent: any = {};

    // Iterate over the .mdx files
    for (const filePath of mdxFiles) {
      // Read file content
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      // Parse front matter and content from MDX
      const { content } = matter(fileContent);

      // Remove the path to the file to make it easier to use as the key
      const relativeFilePath = path.relative(docsDir, filePath);
      const fileNameWithoutExtension = relativeFilePath.replace('.mdx', '');

      // Add the file name (without .mdx) and its content to the result object
      docsContent[fileNameWithoutExtension] = content;
    }

    // Return the docs content as JSON response
    return NextResponse.json(docsContent, { status: 200 });
  } catch (error) {
    console.error('Error reading files:', error);
    return NextResponse.json({ error: 'Failed to read .mdx files' }, { status: 500 });
  }
}
