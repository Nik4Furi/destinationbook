import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog data from your API
    axios.get('YOUR_API_ENDPOINT')
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Blog List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-2">{blog.date}</p>
            <p className="text-gray-700">{blog.excerpt}</p>
            <a href={`/blog/${blog.id}`} className="text-blue-500 hover:underline mt-2 block">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsList;
