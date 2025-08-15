import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function About() {
  const author = {
    name: 'YingDong Liu',
    title: 'Developer',
    imageURL: 'https://avatars.githubusercontent.com/u/143983494?v=4',
    url: 'https://wwww.thanhnamnguyen.dev/'
  };

  return (
    <Layout
      title="About"
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
              {/* 博客文章样式的头部 */}
              <header>
                {/* 标题 */}
                <h1 className="margin-bottom--md">About</h1>
                
                {/* 日期和阅读时间 */}
                <div className="margin-bottom--md">
                  <time dateTime="2024-01-15" className="text--secondary">
                    January 15, 2024
                  </time>
                  <span className="text--secondary"> · 3 min read</span>
                </div>

                {/* 作者信息 - 完全复制DestiNotify的样式 */}
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

              {/* 页面内容 */}
              <div className="markdown">
                <p>Hello, I'm Liu Yingdong.<br />
                I'm an independent app developer who loves turning small everyday ideas—"It would be more convenient if…"—into reality.</p>

                <h2>About Me</h2>
                <ul>
                  <li>Origin: China</li>
                  <li>Currently based in: Japan</li>
                  <li>Languages: Japanese / Chinese / English (basic)</li>
                  <li>Profession: Software Engineer, Mobile App Developer</li>
                  <li>Expertise: iOS (Swift, SwiftUI), Web Frontend, Backend Development</li>
                </ul>

                <h2>Tech Stack</h2>
                <p>Technologies I often work with:</p>
                <ul>
                  <li><strong>Languages</strong>: Java, JavaScript, TypeScript, Python, Swift, Shell, Dart</li>
                  <li><strong>Frameworks/Libraries</strong>: SpringBoot, Vue, React, Angular, Flutter, SwiftUI</li>
                  <li><strong>Tools</strong>: Docker, Git, Jenkins, AWS, MySQL, Redis</li>
                </ul>

                <h2>What I Value</h2>
                <ul>
                  <li>Simple, easy-to-understand design</li>
                  <li>Minimizing waste and building efficient systems</li>
                  <li>Continuous improvement beyond just "done"</li>
                </ul>

                <h2>Hobbies</h2>
                <ul>
                  <li>Trying new technologies and gadgets</li>
                  <li>Spending time in nature</li>
                  <li>Writing code and learning new programming languages</li>
                  <li>Running and light exercise</li>
                </ul>

                <h2>Message</h2>
                <p>I believe that even as an individual—not part of a large company—one can deliver value to the world.<br />
                If you're interested, feel free to reach out.</p>
                
                <p>📩 <strong>Email:</strong> dn.apps.contact@gmail.com</p>
              </div>
                </article>
              </div>
              
              {/* 右侧图片展示区域 */}
              <div className="col col--4">
            <div className="margin-top--xl">
              <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                <div>
                  <img 
                    src="https://picsum.photos/300/200?random=1" 
                    alt="Workspace" 
                    style={{
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--ifm-color-secondary)', textAlign: 'center'}}>
                    🚀 Building innovative solutions
                  </p>
                </div>
                <div>
                  <img 
                    src="https://picsum.photos/300/200?random=2" 
                    alt="Coding" 
                    style={{
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--ifm-color-secondary)', textAlign: 'center'}}>
                    💻 Passionate about clean code
                  </p>
                </div>
                <div>
                  <img 
                    src="https://picsum.photos/300/200?random=3" 
                    alt="Nature" 
                    style={{
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--ifm-color-secondary)', textAlign: 'center'}}>
                    🌿 Finding balance in nature
                  </p>
                </div>
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