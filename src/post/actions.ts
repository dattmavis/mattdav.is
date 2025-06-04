'use server';

import { sqlInsertPost, getPosts } from '@/services/vercel-postgres';
import { revalidatePath } from 'next/cache';
import { PATH_ADMIN_POSTS } from '@/site/paths';
import { nanoid } from 'nanoid';

export async function createPostAction(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const project = formData.get('project') === 'on';
  await sqlInsertPost({ id: nanoid(8), title, content, project });
  revalidatePath(PATH_ADMIN_POSTS);
}

export const getAllPosts = async () => getPosts();
