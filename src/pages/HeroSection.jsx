const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold dark:text-white ">TaskHub</h1>
            <p className="mb-5 dark:text-gray-300">
              Achieve more with less effort. Our task management tool helps you prioritize and complete your tasks efficiently.
            </p>
            <button className="bg-blue-600 p-3 rounded-md dark:text-gray-300">Create Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
