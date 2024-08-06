const BlogContentSection = ({ blogs }: any) => {
  
    const BlogItem = ({ imageSrc, title }: any) => {
      return (
        <div className="blog-item rounded-md overflow-hidden ">
          <img src={imageSrc} alt={title} className="w-full rounded-t-[30px] object-cover h-[300px]" />
          <div className="py-4 px-1">
            <h3 className="text-2xl font-bold font-bebas mb-2">{title}</h3>
            <p className="text-gray-700 text-base"></p>
          </div>
        </div>
      );
    };
  
    return (
      <div className="blog-content-section px-4 py-8 mb-10 bg-bg3">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-bg1">Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* {blogs.length > 0 && blogs.map((blog, index) => (
              blog.node && (
                <BlogItem
                  key={index}
                  imageSrc={blog.node.image?.url || 'https://via.placeholder.com/380x280'}
                  title={blog.node.title}
                  
                />
              )
            ))} */}
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogContentSection;