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
                <h1>About Us</h1>
                
                <p>Welcome to our application development journey. We're passionate about creating innovative solutions that make everyday tasks simpler and more efficient.</p>

                <h2>Our Story</h2>
                
                <p>Our journey began with a simple vision: to develop applications that truly serve users' needs. Every project we undertake is driven by the goal of improving user experience and solving real-world problems through technology.</p>

                <h2>What We Do</h2>
                
                <p>We specialize in developing mobile applications with a focus on:</p>
                
                <ul>
                  <li><strong>User Experience</strong>: Creating intuitive and engaging interfaces</li>
                  <li><strong>Innovation</strong>: Implementing cutting-edge features and technologies</li>
                  <li><strong>Quality</strong>: Ensuring robust and reliable application performance</li>
                  <li><strong>Accessibility</strong>: Making our apps available to users worldwide</li>
                </ul>

                <h2>Our Applications</h2>
                
                <p>Our portfolio includes various applications designed to enhance productivity and provide valuable services to our users. Each application is carefully crafted with attention to detail and user feedback.</p>

                <div className="admonition admonition-tip alert alert--success">
                  <div className="admonition-heading">
                    <h5>
                      <span className="admonition-icon">
                        <svg viewBox="0 0 12 16" width="12" height="16">
                          <path fillRule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.52-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.05-.28.35-.46.69-.46 1.47v.5H2.5v-.5c0-.78-.18-1.12-.46-1.47-.2-.25-.42-.61-.67-1.05C.78 6.65 0 5.51 0 5 0 2.24 2.69 0 6 0s6 2.24 6 5c0 .51-.78 1.65-1.36 2.48zM2.5 12h7v4h-7v-4z"></path>
                        </svg>
                      </span>
                      tip
                    </h5>
                  </div>
                  <div className="admonition-content">
                    <p>Explore our applications on the App Store and experience the difference quality development makes.</p>
                    <div className="language-js codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block" style={{margin: "16px 0"}}>
                      <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                        <pre className="prism-code language-js codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-styles-module thin-scrollbar" style={{backgroundColor: "rgb(40, 44, 52)", color: "rgb(171, 178, 191)"}}>
                          <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                            {"<button onClick={() => alert('Thank you for your interest!')}>Learn More</button>"}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <button 
                      className="button button--primary" 
                      onClick={() => alert('Thank you for your interest!')}
                      style={{marginTop: '16px'}}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <h2>Get in Touch</h2>
                
                <p>We're always excited to hear from our users and fellow developers. Whether you have feedback, suggestions, or just want to say hello, we'd love to connect with you.</p>
                
                <p>Thank you for being part of our journey!</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}