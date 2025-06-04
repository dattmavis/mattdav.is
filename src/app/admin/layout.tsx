import AdminNav from '@/admin/AdminNav';
import {
  getBlobUploadUrlsNoStore,
  getPhotosCountIncludingHiddenCached,
  getUniqueTagsCached,
  getPostsCached,
} from '@/cache';
import {
  PATH_ADMIN_PHOTOS,
  PATH_ADMIN_TAGS,
  PATH_ADMIN_UPLOADS,
  PATH_ADMIN_POSTS,
} from '@/site/paths';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [
    countPhotos,
    countUploads,
    countTags,
    countPosts,
  ] = await Promise.all([
    getPhotosCountIncludingHiddenCached(),
    getBlobUploadUrlsNoStore().then(urls => urls.length),
    getUniqueTagsCached().then(tags => tags.length),
    getPostsCached().then(posts => posts.length),
  ]);

  const navItemPhotos = {
    label: 'Photos',
    href: PATH_ADMIN_PHOTOS,
    count: countPhotos,
  };

  const navItemUploads = {
    label: 'Uploads',
    href: PATH_ADMIN_UPLOADS,
    count: countUploads,
  };

  const navItemTags = {
    label: 'Tags',
    href: PATH_ADMIN_TAGS,
    count: countTags,
  };

  const navItemPosts = {
    label: 'Posts',
    href: PATH_ADMIN_POSTS,
    count: countPosts,
  };

  const navItems = [navItemPhotos];

  if (countUploads > 0) { navItems.push(navItemUploads); }
  if (countTags > 0) { navItems.push(navItemTags); }
  navItems.push(navItemPosts);

  return (
    <div className="mt-4 space-y-5">
      <AdminNav items={navItems} />
      {children}
    </div>
  );
}
