import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface BlogMatterData {
  title: string,
  date: string
}

export interface BlogData {
  id: string
  title: string
  date: string
  year: number
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsDataByYear(): Record<number, Array<BlogData>> {
  // Get file names under /posts
  const fileNames: Array<string> = fs.readdirSync(postsDirectory);
  const allPostsData: Array<BlogData> = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult: GrayMatterFile<string> = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data as BlogMatterData,
      year: new Date(matterResult.data.date).getFullYear()
    };
  });

  allPostsData.sort(({ date: a }, { date: b }) => a < b ? 1 : a > b ? -1 : 0);

  const postsByYear = allPostsData.reduce(
      (acc, curr) => {
        (acc[curr.year] = acc[curr.year] || []).push(curr);
        return acc;
      }, 
      {} as Record<number, Array<BlogData>>
    );

  return postsByYear;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
