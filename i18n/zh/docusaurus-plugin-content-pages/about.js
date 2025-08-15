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
                <h1 className="margin-bottom--md">关于我</h1>
                
                {/* 日期和阅读时间 */}
                <div className="margin-bottom--md">
                  <time dateTime="2024-01-15" className="text--secondary">
                    2024年1月15日
                  </time>
                  <span className="text--secondary"> · 3 分钟阅读</span>
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
                <p>大家好，我是刘英东（Liu Yingdong）。<br />
                我是一名独立开发者，喜欢把日常生活中"如果能这样就更方便了"的小想法变成现实。</p>

                <h2>自我介绍</h2>
                <ul>
                  <li>出生地：中国</li>
                  <li>现居地：日本</li>
                  <li>语言：日语 / 中文 / 英语（基础）</li>
                  <li>职业：软件工程师、移动应用开发者</li>
                  <li>擅长领域：iOS (Swift, SwiftUI)、Web 前端、后端开发</li>
                </ul>

                <h2>技术栈</h2>
                <p>我常用的技术包括：</p>
                <ul>
                  <li><strong>语言</strong>: Java, JavaScript, TypeScript, Python, Swift, Shell, Dart 等</li>
                  <li><strong>框架/库</strong>: SpringBoot, Vue, React, Angular, Flutter, SwiftUI 等</li>
                  <li><strong>工具</strong>: Docker, Git, Jenkins, AWS, MySQL, Redis 等</li>
                </ul>

                <h2>重视的原则</h2>
                <ul>
                  <li>设计简洁且易于理解</li>
                  <li>减少浪费，追求高效运作</li>
                  <li>不只是"做完就结束"，而是不断改进</li>
                </ul>

                <h2>兴趣爱好</h2>
                <ul>
                  <li>尝试新技术和新电子产品</li>
                  <li>享受大自然的时光</li>
                  <li>写代码和学习新的编程语言</li>
                  <li>跑步和轻度运动</li>
                </ul>

                <h2>寄语</h2>
                <p>我相信，即使不是大公司，个人也能为世界带来价值。<br />
                如果你对我感兴趣，欢迎随时联系我。</p>
                
                <p>📩 <strong>邮箱:</strong> dn.apps.contact@gmail.com</p>
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
                    alt="工作空间" 
                    style={{
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--ifm-color-secondary)', textAlign: 'center'}}>
                    🚀 构建创新解决方案
                  </p>
                </div>
                <div>
                  <img 
                    src="https://picsum.photos/300/200?random=2" 
                    alt="编程" 
                    style={{
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--ifm-color-secondary)', textAlign: 'center'}}>
                    💻 热衷于优雅代码
                  </p>
                </div>
                <div>
                  <img 
                    src="https://picsum.photos/300/200?random=3" 
                    alt="自然" 
                    style={{
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--ifm-color-secondary)', textAlign: 'center'}}>
                    🌿 在自然中寻找平衡
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