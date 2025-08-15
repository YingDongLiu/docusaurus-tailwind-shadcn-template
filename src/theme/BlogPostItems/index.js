import React from 'react'
import Link from '@docusaurus/Link'
import Image from '@theme/IdealImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

import BlogPostItem from '@theme/BlogPostItem'

import TimeStamp from '../../components/TimeStamp'
import { Avatar } from '../../components/ui/avatar'
import { Card, CardContent } from '../../components/ui/card'

export default function BlogPostItems({ items, component: BlogPostItemComponent = BlogPostItem }) {
  return (
    <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
      {items.map((blog) => (
        <div key={blog.content.metadata.permalink} className='flex'>
          <Card className='flex w-full flex-col border-0 bg-transparent shadow-none'>
            <Link
              to={blog.content.metadata.permalink}
              className='relative overflow-hidden transition-opacity hover:opacity-90'
            >
              {/* 背景图片 */}
              <Image
                className='block h-auto w-full rounded-lg object-cover'
                img={useBaseUrl(blog.content.metadata.frontMatter.image)}
                alt={blog.content.metadata.title}
                loading='lazy'
              />
              {/* 前景图片 - 截图展示 */}
              {blog.content.metadata.frontMatter.app?.screenshots && (
                <div className='absolute inset-0 flex items-center justify-center gap-2 p-3'>
                  {blog.content.metadata.frontMatter.app.screenshots.map((screenshot, index) => (
                    <Image
                      key={screenshot}
                      className='h-auto max-h-[85%] w-auto max-w-[28%] drop-shadow-2xl'
                      img={useBaseUrl(screenshot)}
                      alt={`${blog.content.metadata.title} Screenshot ${index + 1}`}
                      loading='lazy'
                    />
                  ))}
                </div>
              )}
              {/* App Store 标识 - 右下角 */}
              {blog.content.metadata.frontMatter.app?.appStoreIcon && (
                <div className='absolute bottom-1 right-3'>
                  <Image
                    className='h-10 w-auto opacity-90 drop-shadow-lg'
                    img={useBaseUrl(blog.content.metadata.frontMatter.app.appStoreIcon)}
                    alt='Available on App Store'
                    loading='lazy'
                  />
                </div>
              )}
            </Link>

            <CardContent className='mt-2 p-4'>
              <Link to={blog.content.metadata.permalink} className='mt-4'>
                <p className='mb-1 p-0 text-xl font-semibold'>{blog.content.metadata.title}</p>
              </Link>

              <p className='mb-4 mt-2 line-clamp-2 dark:text-gray-400'>
                {blog.content.metadata.description}
              </p>
              <div className='my-2 flex items-center gap-3'>
                <div className='flex items-center gap-2'>
                  {blog.content.metadata.authors.map((author, index) => (
                    <Link
                      href={author.url || author.page?.permalink || '/about'}
                      title={author.name}
                      key={index}
                      className='transition-opacity hover:opacity-80'
                    >
                      <Avatar>
                        <Image
                          alt={author.name}
                          img={useBaseUrl(author.imageURL)}
                          className='aspect-square h-full w-full'
                        />
                      </Avatar>
                    </Link>
                  ))}
                </div>

                <div className='flex flex-col'>
                  <div className='text-sm font-medium dark:text-gray-200'>
                    {blog.content.metadata.authors.map((author, index) => (
                      <span key={index}>
                        <Link
                          href={author.url || author.page?.permalink || '/about'}
                          className='hover:no-underline'
                        >
                          {author.name}
                        </Link>
                        {index < blog.content.metadata.authors.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                  <div className='text-sm dark:text-gray-400'>
                    <span>2025-06-03</span>
                  </div>
                </div>
              </div>
            </CardContent>

          </Card>
        </div>
      ))}
    </div>
  )
}
