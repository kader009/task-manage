const ContactUsPage = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We did love to hear from you! Send us a message using the form
            below, or email us.
          </p>
        </div>
        <form onSubmit={handleForm} className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full mt-8 p-3 rounded-lg border border-gray-300 dark:border-gray-700"
            rows="5"
          />
          <button
            type="submit"
            className="mt-8 w-full p-3 btn btn-primary text-white rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
