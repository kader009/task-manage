const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Boost Your Productivity with TaskHub',
      excerpt:
        'Discover how TaskHub can help you stay organized and efficient with our top tips for productivity...',
      imageUrl: 'https://images.unsplash.com/photo-1590402494756-10c265b9d736?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Effective Task Management Strategies',
      excerpt:
        'Learn the best strategies for managing your tasks effectively and getting more done...',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1683749810514-860f96ad0735?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Top 5 Features of TaskHub',
      excerpt:
        'Explore the top features of TaskHub that make it the ultimate task management tool...',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Stay updated with the latest news, tips, and insights from TaskHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <img
                className="w-full h-40 object-cover rounded mb-4"
                src={post.imageUrl}
                alt={post.title}
              />
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <a
                href={post.link}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read more &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
