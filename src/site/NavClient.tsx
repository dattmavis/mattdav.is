'use client';

import { clsx } from 'clsx/lite';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SiteGrid from '../components/SiteGrid';
import { SITE_DOMAIN_OR_TITLE } from '@/site/config';
import { PATH_HOME } from '@/site/paths';
import ViewSwitcher, { SwitcherSelection } from '@/site/ViewSwitcher';
import {
  PATH_ROOT,
  isPathAdmin,
  isPathGrid,
  isPathProtected,
  isPathSets,
  isPathSignIn,
  isPathPhotoApp,
} from '@/site/paths';
import AnimateItems from '../components/AnimateItems';

export default function NavClient({
  showAdmin,
}: {
  showAdmin?: boolean,
}) {
  const pathname = usePathname();

  const showNav = !isPathSignIn(pathname);

  const shouldAnimate = !isPathAdmin(pathname);
  const showViewSwitcher = isPathPhotoApp(pathname);

  const renderLink = (
    text: string,
    linkOrAction: string | (() => void),
  ) =>
    typeof linkOrAction === 'string'
      ? <Link href={linkOrAction}>{text}</Link>
      : <button onClick={linkOrAction}>{text}</button>;

  const switcherSelectionForPath = (): SwitcherSelection | undefined => {
    if (pathname === PATH_ROOT) {
      return 'full-frame';
    } else if (isPathGrid(pathname)) {
      return 'grid';
    } else if (isPathSets(pathname)) {
      return 'sets';
    } else if (isPathProtected(pathname)) {
      return 'admin';
    }
  };

  return (
    <SiteGrid
      contentMain={
        <AnimateItems
          animateOnFirstLoadOnly
          type={!shouldAnimate ? 'none' : 'bottom'}
          distanceOffset={10}
          items={showNav
            ? [<div
              key="nav"
              className={clsx(
                'flex items-center',
                'w-full min-h-[4rem]',
                'leading-none',
              )}>
              {showViewSwitcher && <div className="flex flex-grow items-center gap-4">
                <ViewSwitcher
                  currentSelection={switcherSelectionForPath()}
                  showAdmin={showAdmin}
                />
              </div>}
              <div className="hidden xs:flex gap-4 items-center">
                {renderLink(SITE_DOMAIN_OR_TITLE, PATH_HOME)}
                {renderLink('Photos', '/photos')}
                {renderLink('Projects', '/projects')}
                {renderLink('Blog', '/blog')}
                {renderLink('Contact', '/contact')}
              </div>
            </div>]
            : []}
        />
      }
    />
  );
};
