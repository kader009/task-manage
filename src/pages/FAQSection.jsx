const FAQSection = () => {
  const faqs = [
    {
      question: 'What is the free plan?',
      answer:
        'The free plan includes basic task management features and up to 5 projects.',
    },
    {
      question: 'How do I upgrade my plan?',
      answer:
        'You can upgrade your plan from the settings page in your account dashboard.',
    },
    {
      question: 'Can I collaborate with my team?',
      answer:
        'Yes, our platform supports team collaboration. You can invite team members and assign tasks to them.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'We take data security seriously. Your data is encrypted and stored securely in compliance with industry standards.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Yes, we offer 24/7 customer support through email, chat, and phone.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        'Yes, you can cancel your subscription at any time from your account settings. No long-term contracts are required.',
    },
    {
      question: 'Do you offer a mobile app?',
      answer:
        'Yes, we offer a mobile app for both iOS and Android devices. You can manage your tasks on the go.',
    },
    {
      question: 'How do I reset my password?',
      answer:
        'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions.',
    },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
