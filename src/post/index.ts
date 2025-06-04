export type Post = {
  id: string;
  title: string;
  content: string;
  project?: boolean;
  createdAt: string;
};

export type PostDb = {
  id: string;
  title: string;
  content: string;
  project: boolean | null;
  created_at: string;
};

export type PostDbInsert = {
  id: string;
  title: string;
  content: string;
  project?: boolean;
};

export const parsePostFromDb = (row: PostDb): Post => ({
  id: row.id,
  title: row.title,
  content: row.content,
  project: row.project ?? undefined,
  createdAt: row.created_at,
});
