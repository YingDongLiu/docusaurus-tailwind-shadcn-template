import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogAuthor from '@theme/Blog/Components/Author';
import type {Props} from '@theme/BlogPostItem/Header/Authors';
import styles from './styles.module.css';

// Component responsible for the authors layout
export default function BlogPostItemHeaderAuthors({
  className,
}: Props): ReactNode {
  const {
    metadata: {authors, frontMatter},
    assets,
  } = useBlogPost();
  
  // Check if authors should be hidden
  if ((frontMatter as any)?.hide_author) {
    return null;
  }
  
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }
  const imageOnly = authors.every(({name}) => !name);
  const singleAuthor = authors.length === 1;
  return (
    <div
      className={clsx(
        'margin-top--md margin-bottom--sm',
        imageOnly ? styles.imageOnlyAuthorRow : 'row',
        className,
      )}>
      {authors.map((author, idx) => (
        <div
          className={clsx(
            !imageOnly && (singleAuthor ? 'col col--12' : 'col col--6'),
            imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol,
          )}
          key={idx}>
          <BlogAuthor
            author={{
              ...author,
              // Handle author images using relative paths
              imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
            }}
          />
        </div>
      ))}
    </div>
  );
}
