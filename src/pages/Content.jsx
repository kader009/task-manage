const Content = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Welcome to TaskHub</h1>
        <p className="text-gray-700 mb-4">
          TaskHub is your go-to platform for efficient task management, designed
          to help you stay organized and productive. Whether you are managing
          personal tasks or collaborating on team projects, TaskHub provides the
          tools you need to succeed.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to simplify your workflow by offering a seamless
          experience that adapts to your unique needs. With intuitive features
          and a user-friendly interface, TaskHub allows you to focus on what
          matters most: getting things done.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Why Choose TaskHub?</h2>
          <ul className="list-disc list-inside pl-5">
            <li className="mb-2">
              Efficient task tracking with customizable labels, deadlines, and
              reminders.
            </li>
            <li className="mb-2">
              Collaborative tools that make teamwork easier and more effective.
            </li>
            <li className="mb-2">
              Secure cloud storage to ensure your data is safe and accessible.
            </li>
          </ul>
        </div>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Get Started with TaskHub
          </h2>
          <p className="text-gray-700 mb-4">
            Ready to take control of your tasks? Sign up today and start
            organizing your workflow like never before. If you have any
            questions, our support team is here to assist you every step of the
            way.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Learn more about TaskHub
          </a>
        </section>
      </div>
    </div>
  );
};

export default Content;
