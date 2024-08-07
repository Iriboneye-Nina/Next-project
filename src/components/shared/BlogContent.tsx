import React from 'react';
import BlogPost from './Blog';

const Blog = () => {
  const posts = [
    {
      title: "My First Blog Post",
      description: "This is the description of my first blog post.",
      date: "2024-08-07",
      link: "https://dev.to/iriboneye_nina_47b95feedc"
    },
    
  ];

  return (
    <div className="container mx-auto  px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">Blog post</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            description={post.description}
            date={post.date}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
