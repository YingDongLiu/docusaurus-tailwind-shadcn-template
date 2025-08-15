import React from 'react';

export default function AboutLayout({ 
  children, 
  title = 'About',
  author = {
    name: 'YingDong Liu',
    title: 'Developer', 
    imageURL: 'https://avatars.githubusercontent.com/u/143983494?v=4',
    url: '/about'
  },
  date,
  readTime,
  images = [
    { src: 'https://picsum.photos/300/200?random=1', alt: 'Image 1', caption: '🚀' },
    { src: 'https://picsum.photos/300/200?random=2', alt: 'Image 2', caption: '💻' },
    { src: 'https://picsum.photos/300/200?random=3', alt: 'Image 3', caption: '🌿' }
  ]
}) {
  return (
    <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="row">
              <div className="col col--8">
                <article>
                  {/* Header */}
                  <header>
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    
                    {date && readTime && (
                      <div className="mb-4 text-muted-foreground">
                        <time dateTime="2024-01-15">{date}</time>
                        <span> · {readTime}</span>
                      </div>
                    )}

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

                  {/* MDX Content */}
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    {children}
                  </div>
                </article>
              </div>
              
              {/* Right side images */}
              <div className="col col--4">
                <div className="margin-top--xl">
                  <div className="flex flex-col gap-8">
                    {images.map((image, index) => (
                      <div key={index} className="w-full">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full aspect-square object-cover"
                        />
                        {image.caption && (
                          <p className="mt-2 text-sm text-center text-muted-foreground">
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}