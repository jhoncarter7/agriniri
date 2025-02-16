/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const USPItem = ({ title, content, icon, direction = "left" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 }, 
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, type: "spring" }}
      className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="p-4 bg-blue-100 rounded-xl text-blue-600 shrink-0">
          {icon}
        </div>
        <div className="w-full min-w-0">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
          <div className="space-y-3 text-gray-600">
            {content.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
                transition={{ delay: index * 0.2 + 0.4 }}
                className="text-lg break-words"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function USP() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 md:mb-20 text-gray-800 px-4"
        >
          USP and Advantages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <USPItem
            title="Farm-to-Market Connectivity"
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            content={[
              "Directly purchasing vegetables from farmers' fields",
              "Ensuring fair pricing and immediate payments",
              "Alleviating farmers' financial stress",
            ]}
          />

          <USPItem
            title="AI/ML Integration"
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            }
            direction="right"
            content={[
              <div key="ai-content" className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Demand Forecasting</p>
                  <p className="text-sm">AI-powered inventory optimization</p>
                </div>
                <div>
                  <p className="font-medium">Smart Cleaning</p>
                  <p className="text-sm">
                    Advanced pesticide reduction processes
                  </p>
                </div>
                <div>
                  <p className="font-medium">Route Planning</p>
                  <p className="text-sm">Efficient logistics optimization</p>
                </div>
                <div>
                  <p className="font-medium">Quality Control</p>
                  <p className="text-sm">
                    Delivering safer, higher-quality produce
                  </p>
                </div>
              </div>,
            ]}
          />

          <USPItem
            title="Return Logistics with Zero-Waste Approach"
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            }
            content={[
              "Streamlined return logistics for unsold vegetables",
              "Minimizing wastage through efficient redistribution",
              "Increasing retailer efficiency and profitability",
              "Sustainable circular economy model",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
