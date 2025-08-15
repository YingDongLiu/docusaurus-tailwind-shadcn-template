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
                <h1 className="margin-bottom--md">私について</h1>
                
                {/* 日期和阅读时间 */}
                <div className="margin-bottom--md">
                  <time dateTime="2024-01-15" className="text--secondary">
                    2024年1月15日
                  </time>
                  <span className="text--secondary"> · 3分で読めます</span>
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
                <p>こんにちは、劉 英東（Liu Yingdong）です。<br />
                日常の中で感じた「もっとこうだったら便利なのに」という小さな気づきを形にすることを大切にしている、独立系のアプリ開発者です。</p>

                <h2>自己紹介</h2>
                <ul>
                  <li>出身：中国</li>
                  <li>現在：日本在住</li>
                  <li>言語：日本語 / 中国語 / 英語（少し）</li>
                  <li>職業：ソフトウェアエンジニア、モバイルアプリ開発者</li>
                  <li>得意分野：iOS (Swift, SwiftUI)、Web フロントエンド、バックエンド開発</li>
                </ul>

                <h2>技術スタック</h2>
                <p>普段は以下のような技術を使っています：</p>
                <ul>
                  <li><strong>言語</strong>: Java, JavaScript, TypeScript, Python, Swift, Shell, Dart など</li>
                  <li><strong>フレームワーク/ライブラリ</strong>: SpringBoot, Vue, React, Angular, Flutter, SwiftUI など</li>
                  <li><strong>ツール</strong>: Docker, Git, Jenkins, AWS, MySQL, Redis など</li>
                </ul>

                <h2>大事にしていること</h2>
                <ul>
                  <li>シンプルで分かりやすい設計</li>
                  <li>無駄を減らし、効率的に動く仕組み</li>
                  <li>「作って終わり」ではなく、改善し続ける姿勢</li>
                </ul>

                <h2>趣味</h2>
                <ul>
                  <li>新しい技術やガジェットを試すこと</li>
                  <li>自然の中で過ごす時間</li>
                  <li>コードを書くことや新しいプログラミング言語を学ぶこと</li>
                  <li>ランニングや軽い運動</li>
                </ul>

                <h2>メッセージ</h2>
                <p>大きな企業ではなく、小さな個人でも世界に価値を届けられると信じています。<br />
                もし興味を持っていただけたら、気軽にご連絡ください。</p>
                
                <p>📩 <strong>メール:</strong> dn.apps.contact@gmail.com</p>
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
                    alt="ワークスペース" 
                    style={{
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--ifm-color-secondary)', textAlign: 'center'}}>
                    🚀 革新的なソリューションを構築
                  </p>
                </div>
                <div>
                  <img 
                    src="https://picsum.photos/300/200?random=2" 
                    alt="コーディング" 
                    style={{
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--ifm-color-secondary)', textAlign: 'center'}}>
                    💻 美しいコードへの情熱
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
                    🌿 自然の中でバランスを見つける
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