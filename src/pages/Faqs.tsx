import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('/data/Faqs.json');
        const data = await response.json();
        setFaqs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading FAQs:', error);
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading FAQs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-6 shadow-lg">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-blue-900 mb-5 tracking-tight">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about NSS GEC Patan, activities, participation, and more
          </p>
        </div>

        {/* FAQ Items Grid */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group transform transition-all duration-300 hover:scale-[1.01]"
              style={{
                animation: `slideIn 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-start justify-between text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50"
                >
                  <div className="flex items-start gap-5 flex-1">
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg scale-110' 
                        : 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 group-hover:from-orange-100 group-hover:to-orange-200 group-hover:text-orange-700'
                    }`}>
                      {faq.id}
                    </div>
                    
                    {/* Question Text */}
                    <span className={`text-lg sm:text-xl font-semibold leading-relaxed pt-2 transition-colors duration-300 ${
                      openIndex === index ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Chevron Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-orange-500 rotate-180' 
                      : 'bg-gray-100 group-hover:bg-orange-100'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-gray-600 group-hover:text-orange-600'
                    }`} />
                  </div>
                </button>

                {/* Answer with Smooth Animation */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-[500px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <div className="pl-[68px] pr-4">
                      {/* Gradient Divider */}
                      <div className="h-0.5 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 mb-5 rounded-full"></div>
                      
                      {/* Answer Text */}
                      <div className={`transform transition-all duration-500 ${
                        openIndex === index 
                          ? 'translate-y-0 opacity-100' 
                          : '-translate-y-4 opacity-0'
                      }`}>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-block bg-white rounded-3xl px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <p className="text-gray-700 text-lg">
              <span className="font-bold text-blue-700">Still have questions?</span>
              <br />
              <span className="text-gray-600">Contact NSS GEC Patan Unit</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FAQs;