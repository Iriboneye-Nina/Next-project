import React from 'react';

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, description, date, link }) => {
  return (
    <div className="max-w-64 rounded-lg overflow-hidden shadow-lg  bg-slate-100">
      <div className="px-6 py-4">
        <h2 role="heading"  className="font-bold text-2xl mb-2 text-gray-800">{title}</h2>
        <p  role='description' className="text-gray-600 text-base mb-4">{description}</p>
        <p  role='date' className="text-gray-400 text-sm mb-4">{date}</p>
        <a
          href={link}
          role='link' className="text-indigo-500 hover:text-indigo-600 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
