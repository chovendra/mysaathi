import React, { useState } from "react";

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Absolutely! You can upgrade or downgrade your plan anytime from your account settings.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and net banking for your convenience.",
    },
    {
      question: "Is my data safe and secure?",
      answer: "Yes, we take data security very seriously. Your information is encrypted and securely stored.",
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team 24/7 through chat, email, or our support hotline.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

    <div className="p-6 max-w-3xl mx-auto">
      <div className="h-[90px]"></div>
      <h1 className="text-4xl font-bold text-center mb-4">Frequently asked questions</h1>
      <p className="text-center text-gray-600 mb-10">
        Everything you need to know about the product and billing.
      </p>

      {/* FAQs */}
      
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 mt-16 p-10 rounded-lg text-center">
        <div className="flex justify-center items-center relative mb-6">
          {/* Left image */}
          <img
            src="https://via.placeholder.com/80"
            alt="left"
            className="rounded-full w-20 h-20 absolute left-1/2 transform -translate-x-[160%] opacity-50"
          />
          {/* Center image */}
          <img
            src="https://via.placeholder.com/100"
            alt="center"
            className="rounded-full w-24 h-24 z-10"
          />
          {/* Right image */}
          <img
            src="https://via.placeholder.com/80"
            alt="right"
            className="rounded-full w-20 h-20 absolute right-1/2 transform translate-x-[160%] opacity-50"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
        <p className="text-gray-600 mb-6">
          Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
        <button className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition">
          Get in touch
        </button>
      </div>
    </div>
    </>
  );
};

export default FaqPage;
