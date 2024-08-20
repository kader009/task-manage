const Content = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Welcome to Our Content Page</h1>
        <p className="text-gray-700 mb-4">
          At our company, we are committed to delivering exceptional products and services that meet your needs and exceed your expectations. Our dedicated team works tirelessly to ensure that every aspect of our offerings is carefully crafted to provide you with the best possible experience.
        </p>
        <p className="text-gray-700 mb-4">
          We believe in the power of innovation and strive to stay ahead of industry trends. By continuously improving our processes and embracing new technologies, we aim to offer solutions that are not only effective but also future-proof.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Points</h2>
          <ul className="list-disc list-inside pl-5">
            <li className="mb-2">Our products are designed with the latest technology to ensure high performance and reliability.</li>
            <li className="mb-2">We offer comprehensive customer support to assist you with any inquiries or issues.</li>
            <li className="mb-2">Our commitment to sustainability means we continually seek ways to reduce our environmental impact.</li>
          </ul>
        </div>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
          <p className="text-gray-700 mb-4">
            For more details about our products and services, please visit our website or contact our support team. We are here to help you make the most of our offerings and ensure your satisfaction.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Learn more</a>
        </section>
      </div>
    </div>
  );
};

export default Content;
