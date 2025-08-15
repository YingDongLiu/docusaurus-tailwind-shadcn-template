import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {useColorMode} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import type {Props} from '@theme/BlogPostItem/Header/Title';

import styles from './styles.module.css';

export default function BlogPostItemHeaderTitle({className}: Props): ReactNode {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {permalink, title, frontMatter} = metadata;
  const {colorMode} = useColorMode();
  const location = useLocation();
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  
  // Get app icon from frontmatter
  const appIcon = (frontMatter as any)?.app_icon;
  const appStoreUrl = (frontMatter as any)?.app?.appStoreUrl;
  
  // Get current language for download button
  const getCurrentLanguage = () => {
    if (location.pathname.startsWith('/zh/')) return 'cn';
    if (location.pathname.startsWith('/ja/')) return 'jp';
    return 'en';
  };
  
  // Get download button image
  const getDownloadButton = () => {
    const lang = getCurrentLanguage();
    const theme = colorMode === 'dark' ? 'white' : 'black';
    return `/img/download_button/ios/${lang}-${theme}.svg`;
  };
  
  return (
    <TitleHeading className={clsx(styles.title, className)}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          {appIcon && isBlogPostPage && (
            <img 
              src={useBaseUrl(appIcon)} 
              alt={`${title} Icon`}
              className="w-12 h-12 rounded-xl"
            />
          )}
          {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </div>
        
        {appStoreUrl && isBlogPostPage && (
          <a 
            href={appStoreUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <img
              src={useBaseUrl(getDownloadButton())}
              alt='Download on the App Store'
              className='h-10 w-auto transition-opacity hover:opacity-80 cursor-pointer'
            />
          </a>
        )}
      </div>
    </TitleHeading>
  );
}
