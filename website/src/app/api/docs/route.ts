import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET(req: any, res: any) {
  try {
    const suffixPath = "/src/contents/docs";
    const docsDir = path.join(process.cwd(), suffixPath);
    const fileNames = fs.readdirSync(docsDir);
    
    // Filter to only get .mdx files
    const mdxFiles = fileNames.filter(file => file.endsWith('.mdx'));

    // Object to hold file path as key and content as value
    const docsContent: any = {};

    // Iterate over the .mdx files
    for (const file of mdxFiles) {
      const filePath = path.join(docsDir, file);

      // Read file content
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      // Parse front matter and content from MDX
      const { content } = matter(fileContent);

      // Remove the .mdx extension from the file name
      const fileNameWithoutExtension = file.replace('.mdx', '');

      // Add the file name (without .mdx) and its content to the result object
      docsContent[fileNameWithoutExtension] = content;
    }

    // Return the docs content as JSON response
    return NextResponse.json(docsContent,{status: 200});
  } catch (error) {
    console.error('Error reading files:', error);
    res.status(500).json({ error: 'Failed to read .mdx files' });
  }
}
