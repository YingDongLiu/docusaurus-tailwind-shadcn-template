import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import styles from './styles.module.css';

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
                    <h1 className="margin-bottom--md">{content.title}</h1>
                    
                    <div className="margin-bottom--md">
                      <time dateTime="2024-01-15" className="text--secondary">
                        {content.date}
                      </time>
                      <span className="text--secondary"> · {content.readTime}</span>
                    </div>

                    {/* Author info */}
                    <div className="margin-top--md margin-bottom--sm">
                      <div className="row">
                        <div className="col col--12">
                          <div className="avatar margin-bottom--sm">
                            <a href={author.url} className="avatar__photo-link">
                              <img
                                className="avatar__photo"
                                src={author.imageURL}
                                alt={author.name}
                              />
                            </a>
                            <div className="avatar__intro">
                              <div className="avatar__name">
                                <a href={author.url}>
                                  <span>{author.name}</span>
                                </a>
                              </div>
                              <small className="text--secondary" title={author.title}>
                                {author.title}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* Content */}
                  <div className="markdown">
                    <p>
                      {content.intro}<br />
                      {content.introDesc}
                    </p>

                    <h2>{content.sections.aboutMe.title}</h2>
                    <ul>
                      {content.sections.aboutMe.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h2>{content.sections.techStack.title}</h2>
                    <p>{content.sections.techStack.desc}</p>
                    <ul>
                      {content.sections.techStack.items.map((item, index) => (
                        <li key={index}>
                          <strong>{item.label}</strong>: {item.value}
                        </li>
                      ))}
                    </ul>

                    <h2>{content.sections.values.title}</h2>
                    <ul>
                      {content.sections.values.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h2>{content.sections.hobbies.title}</h2>
                    <ul>
                      {content.sections.hobbies.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h2>{content.sections.message.title}</h2>
                    <p>
                      {content.sections.message.text}<br />
                      {content.sections.message.cta}
                    </p>
                    
                    <p>
                      📩 <strong>{locale === 'en' ? 'Email' : locale === 'zh' ? '邮箱' : 'メール'}:</strong> {content.sections.message.email}
                    </p>
                  </div>
                </article>
              </div>
              
              {/* Right side images */}
              <div className="col col--4">
                <div className="margin-top--xl">
                  <div className={styles.imageContainer}>
                    {content.images.map((image, index) => (
                      <div key={index} className={styles.imageItem}>
                        <img 
                          src={`https://picsum.photos/300/200?random=${index + 1}`}
                          alt={image.alt}
                          className={clsx('shadow--md', styles.image)}
                        />
                        <p className={clsx('text--secondary text--center', styles.imageCaption)}>
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