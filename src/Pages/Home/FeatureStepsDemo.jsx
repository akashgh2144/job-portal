import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "..//../assets/pictures/laravel.png";
import img2 from "../../assets/pictures/frontend.jpeg";

const features = [
  {
    step: "Step 1",
    title: "Laravel Developer",
    content: "Start your Web3 journey by learning the basics of blockchain.",
    image: img1,
  },
  {
    step: "Step 2",
    title: "Frontend Developer",
    content: "Dive deep into blockchain fundamentals and smart contract development.",
    image: img2,
  },
  {
    step: "Step 3",
    title: "Software Engineering",
    content: "Graduate with hands-on Web3 experience through building decentralized applications.",
    image: "https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop",
  },
];

const FeatureSteps = ({
  features,
  title = "How to Get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className="p-8 md:p-12 bg-gradient-to-l from-[#0d47a1] to-black">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 ${
                    index === currentFeature
                      ? "bg-blue-500 border-blue-500 text-white scale-110"
                      : "bg-gray-300 border-gray-500"
                  }`}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">{feature.title || feature.step}</h3>
                  <p className="text-sm md:text-lg text-gray-600">{feature.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={`order-1 md:order-2 relative overflow-hidden rounded-lg ${imageHeight}`}>
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform transform"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FeatureStepsDemo() {
  return <FeatureSteps features={features} title="Your Journey Starts Here" autoPlayInterval={4000} imageHeight="h-[500px]" />;
}
