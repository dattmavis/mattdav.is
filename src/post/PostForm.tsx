'use client';

import { useState } from 'react';
import SubmitButtonWithStatus from '@/components/SubmitButtonWithStatus';
import { createPostAction } from './actions';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [project, setProject] = useState(false);
  return (
    <form action={createPostAction} className="space-y-4">
      <input
        type="text"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full"
        required
      />
      <textarea
        name="content"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        className="w-full h-40"
        required
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="project"
          checked={project}
          onChange={e => setProject(e.target.checked)}
        />
        Project post
      </label>
      <SubmitButtonWithStatus>Create</SubmitButtonWithStatus>
    </form>
  );
}
