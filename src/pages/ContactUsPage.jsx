const ContactUsPage = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 ">
            We did love to hear from you! Send us a message using the form{' '}
            <br /> below or email us.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleForm} className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white text-gray-900"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white text-gray-900"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full mt-8 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white text-gray-900"
              rows="5"
              required
            />
            <button
              type="submit"
              className="mt-8 w-full p-3 btn bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
              </span>
            </button>
          </form>
          <div className="bg-gray-300 h-80 rounded-lg">
            <iframe
              title="Google Map"
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848643763094!2d90.40058731543292!3d23.75096759458964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894c951d69d%3A0xd00f2a7d903a3f82!2sDhaka!5e0!3m2!1sen!2sbd!4v1620922944676!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
