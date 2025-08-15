import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import clsx from 'clsx';

export default function AboutPage({ content, locale = 'en' }) {
  const author = {
    name: 'YingDong Liu',
    title: 'Developer',
    imageURL: 'https://avatars.githubusercontent.com/u/143983494?v=4',
    url: 'https://wwww.thanhnamnguyen.dev/'
  };

  return (
    <Layout
      title={content.title}
      description="Learn more about our application and the developer behind it. Discover the story, vision, and technology that drives our innovative solutions.">
      <Head>
        <meta property="og:image" content="https://developer.apple.com/design/images/sol/hero-glass-s_2x.jpg" />
      </Head>
      
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="row">
              <div className="col col--8">
                <article>
                  {/* Header */}
                  <header>
                    <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
                    
                    <div className="mb-4 text-muted-foreground">
                      <time dateTime="2024-01-15">
                        {content.date}
                      </time>
                      <span> · {content.readTime}</span>
                    </div>

                    {/* Author info */}
                    <div className="flex items-center gap-3 mt-4 mb-6">
                      <a href={author.url} className="block">
                        <img
                          className="w-12 h-12 rounded-full object-cover"
                          src={author.imageURL}
                          alt={author.name}
                        />
                      </a>
                      <div className="flex flex-col">
                        <a href={author.url} className="text-lg font-bold hover:no-underline">
                          {author.name}
                        </a>
                        <span className="text-sm text-muted-foreground">
                          {author.title}
                        </span>
                      </div>
                    </div>
                  </header>

                  {/* Content */}
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-base leading-7">
                      {content.intro}<br />
                      {content.introDesc}
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{content.sections.aboutMe.title}</h2>
                    <ul className="space-y-2">
                      {content.sections.aboutMe.items.map((item, index) => (
                        <li key={index} className="text-base">{item}</li>
                      ))}
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{content.sections.techStack.title}</h2>
                    <p className="text-base mb-4">{content.sections.techStack.desc}</p>
                    <ul className="space-y-2">
                      {content.sections.techStack.items.map((item, index) => (
                        <li key={index} className="text-base">
                          <strong className="font-semibold">{item.label}</strong>: {item.value}
                        </li>
                      ))}
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{content.sections.values.title}</h2>
                    <ul className="space-y-2">
                      {content.sections.values.items.map((item, index) => (
                        <li key={index} className="text-base">{item}</li>
                      ))}
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{content.sections.hobbies.title}</h2>
                    <ul className="space-y-2">
                      {content.sections.hobbies.items.map((item, index) => (
                        <li key={index} className="text-base">{item}</li>
                      ))}
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">{content.sections.message.title}</h2>
                    <p className="text-base leading-7">
                      {content.sections.message.text}<br />
                      {content.sections.message.cta}
                    </p>
                    
                    <p className="text-base mt-4">
                      📩 <strong className="font-semibold">{locale === 'en' ? 'Email' : locale === 'zh' ? '邮箱' : 'メール'}:</strong> {content.sections.message.email}
                    </p>
                  </div>
                </article>
              </div>
              
              {/* Right side images */}
              <div className="col col--4">
                <div className="margin-top--xl">
                  <div className="flex flex-col gap-8">
                    {content.images.map((image, index) => (
                      <div key={index} className="w-full">
                        <img 
                          src={`https://picsum.photos/300/200?random=${index + 1}`}
                          alt={image.alt}
                          className="w-full h-[200px] object-cover rounded-lg"
                        />
                        <p className={clsx(
                          'mt-2 text-sm text-center',
                          'text-muted-foreground'
                        )}>
                          {image.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}