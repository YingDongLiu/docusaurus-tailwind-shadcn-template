import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common'
import { translate } from '@docusaurus/Translate'
import BlogLayout from '@theme/BlogLayout'
import SearchMetadata from '@theme/SearchMetadata'
import BlogPostItems from '@theme/BlogPostItems'
import Image from '@theme/IdealImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

import { BlogPagination } from '../BlogPagination'
import CustomTagsList from '../../components/CustomTagsList'

function BlogListPageMetadata(props) {
  const { metadata } = props
  const {
    siteConfig: { title: siteTitle }
  } = useDocusaurusContext()
  const { blogDescription, blogTitle, permalink } = metadata
  const isBlogOnlyMode = permalink === '/'
  const homeTitle = translate({
    id: 'theme.blog.home.title',
    message: 'Home',
    description: 'Browser title for the blog home page'
  })
  const title = isBlogOnlyMode ? homeTitle : blogTitle

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag='blog_posts_list' />
    </>
  )
}

function BlogHomepageBanner(props) {
  const blogMetadata = props.metadata
  const items = props.items || []
  const imageDefault = {
    urlBannerBg:
      'https://res.cloudinary.com/thanhnam/image/upload/v1696174608/thanhnamnguyen.dev/blog/blog-banner_othakp.png',
    urlAvatar:
      'https://avatars.githubusercontent.com/u/143983494?v=4'
  }

  // 定义技术标签 - 按类型分组排序
  const techTags = [
    // 编程语言
    'Java', 'JavaScript', 'TypeScript', 'Python', 'Swift', 'Shell',
    // 移动/跨平台开发
    'SwiftUI', 'Flutter',
    // 前端框架/库
    'React', 'Vue', 'Angular', 'AngularJS', 'jQuery',
    // CSS框架
    'Bootstrap',
    // 模板引擎
    'Thymeleaf', 'JSP',
    // Spring生态系统
    'SpringMVC', 'SpringBoot', 'SpringSecurity', 'SpringBatch',
    // 数据库/ORM
    'MySQL', 'Oracle', 'Redis', 'MyBatis', 'MyBatisPlus',
    // 版本控制
    'Git', 'SVN',
    // DevOps/工具
    'Docker', 'Jenkins', 'JMeter',
    // 云平台/服务
    'AWS', 'EC2', 'RDS', 'S3', 'Route53', 'SES',
    // 企业平台
    'Salesforce'
  ]

  // 将技术标签转换为标签对象格式
  const allTags = techTags.map(tech => ({ label: tech }))

  return (
    <div className='blog'>
      <div className='relative'>
        <Image
          img={useBaseUrl(imageDefault.urlBannerBg)}
          alt='Blog banner'
          className='rounded-lg'
          loading='lazy'
        />
        <Image
          img={useBaseUrl(imageDefault.urlAvatar)}
          alt='avatar blog'
          className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-white p-2'
          width={100}
          height={100}
          loading='lazy'
        />
      </div>
      <div className='my-20 text-center'>
        <h2 className='mb-2 text-xl font-bold md:text-2xl lg:text-3xl'>{blogMetadata.blogTitle}</h2>
        <p className='mb-4'>{blogMetadata.blogDescription}</p>
        {allTags.length > 0 && (
          <div className='flex justify-center'>
            <div className='max-w-4xl'>
              <CustomTagsList tags={allTags} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function BlogListPageContent(props) {
  const { metadata, items, sidebar } = props

  return (
    <BlogLayout sidebar={sidebar}>
      <BlogHomepageBanner {...props} />
      <BlogPostItems items={items} />
      <BlogPagination metadata={metadata} />
    </BlogLayout>
  )
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  )
}
