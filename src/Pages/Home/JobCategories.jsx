import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Hiring from "../../assets/Lottie/Hiring.json";
import Finance from "../../assets/Lottie/Finance.json";
import Software from "../../assets/Lottie/Software.json";
import Human_Resource from "../../assets/Lottie/Human_Resource.json";
import Management from "../../assets/Lottie/Management.json";
import Retail from "../../assets/Lottie/Retail & Products.json"
import Lottie from 'lottie-react';

const JobCategories = () => {
  const categories = [
    { title: 'Finance', jobs: 168, icon: <Lottie animationData={Finance}></Lottie> },
    { title: 'Software', jobs: 1856, icon: <Lottie animationData={Software} ></Lottie> },
    { title: 'Human Resource', jobs: 165, icon: <Lottie animationData={Human_Resource}></Lottie> },
    { title: 'Management', jobs: 965, icon: <Lottie animationData={Management}></Lottie> },
    { title: 'Retail & Products', jobs: 563, icon: <Lottie animationData={Retail}></Lottie> },
  ];

  return (
    <div className="p-8 space-y-8 bg-gradient-to-l from-[#0d47a1] to-black">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Browse by Category</h1>
        <p className="text-white mt-2">Find the job that's perfect for you. About 800+ new jobs every day</p>
      </div>

      {/* Categories Section */}
      <div className="flex items-center space-x-4 justify-center">
        <ArrowLeft className="w-6 h-6 text-gray-500 cursor-pointer" />
        {categories.map((category) => (
          <div key={category.title} className="w-48 text-center bg-white rounded-lg shadow hover:shadow-lg p-4 space-y-2">
            <div className="text-4xl">{category.icon}</div>
            <h2 className="font-semibold text-lg text-blue-700">{category.title}</h2>
            <p className="text-gray-500">{category.jobs} Jobs Available</p>
          </div>
        ))}
        <ArrowRight className="w-6 h-6 text-gray-500 cursor-pointer" />
      </div>

      {/* Hiring Banner */}
      <div className="bg-gray-400 shadow-lg rounded-2xl flex items-center justify-between p-6 space-x-6">
        <div className="flex-1">
          <h3 className="text-gray-500 font-medium">WE ARE</h3>
          <h1 className="text-2xl font-bold text-blue-700">HIRING</h1>
          <p className="text-gray-600">Let's Work Together & Explore Opportunities</p>
          <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-700">Apply Now</button>
        </div>
        <div className="w-1/3">
          <Lottie animationData={Hiring} />
        </div>
      </div>
    </div>
  );
};

export default JobCategories;