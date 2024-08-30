const AboutUs = () => {
  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`}
    >
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold mb-4">About TaskHub</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Learn more about our company, mission, and the team <br /> behind
            TaskHub.
          </p>
        </div>
        {/* this is just a simple add */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Company</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            TaskHub is a leading task management tool designed to help teams and
            individuals organize their tasks, collaborate seamlessly, and
            increase productivity. Founded in 2024, TaskHub aims to simplify
            task management through intuitive design and powerful features.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            With a user-friendly interface and robust capabilities, TaskHub has
            quickly become a favorite among professionals and teams of all
            sizes. Our mission is to provide an efficient and enjoyable task
            management experience.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400">
            At TaskHub, our mission is to empower individuals and teams to
            achieve their goals through effective task management. We believe
            that with the right tools, anyone can be more productive and achieve
            greater success.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="https://randomuser.me/api/portraits/men/50.jpg"
                alt="Alex Brown"
              />
              <h3 className="text-xl font-semibold text-center">Alex Brown</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Chief Technology Officer
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Alex leads our tech team, focusing on innovation and
                performance.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt="Sara White"
              />
              <h3 className="text-xl font-semibold text-center">Sara White</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Head of Design
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Sara crafts beautiful and user-friendly designs at TaskHub.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="https://randomuser.me/api/portraits/men/52.jpg"
                alt="Chris Martin"
              />
              <h3 className="text-xl font-semibold text-center">
                Chris Martin
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Marketing Director
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Chris drives our marketing efforts to reach more users.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            At TaskHub, we uphold the following values to guide our work and
            interactions:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li className="mb-2">
              Innovation: Continuously improving and adopting new technologies
              to serve our users better.
            </li>
            <li className="mb-2">
              Collaboration: Working together to achieve common goals and
              support one another.
            </li>
            <li className="mb-2">
              Integrity: Maintaining transparency and honesty in all our
              actions.
            </li>
            <li className="mb-2">
              Customer Focus: Putting our users at the heart of everything we
              do.
            </li>
            <li className="mb-2">
              Excellence: Striving for the highest standards in every aspect of
              our work.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
