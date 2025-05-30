import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Job1 from "../../assets/Lottie/Job1.json";
import Job2 from "../../assets/Lottie/Job2.json";
import Job3 from "../../assets/Lottie/Job3.json";
import pic1 from "../../assets/Lottie/pic1.json";
import pic2 from "../../assets/Lottie/pic2.json";
import Management from "../../assets/Lottie/Management.json";
import team1 from "../../assets/pictures/team4.jpg"
import team2 from "../../assets/pictures/team5.jpg"
import team3 from "../../assets/pictures/team1.jpg"
import Lottie from "lottie-react";

const posts = [
  {
    title: "21 Job Interview Tips: How To Make a Great Impression",
    category: "News",
    author: "Azumi Rose",
    date: "25 April 2022",
    readTime: "8 mins to read",
    image: Job1,
  },
  {
    title: "Email Examples: How To Respond to Employer Interview Requests",
    category: "Events",
    author: "Azumi Rose",
    date: "25 April 2022",
    readTime: "8 mins to read",
    image: Job2,
  },
  {
    title: "How To Write an Application Letter (With Examples)",
    category: "Events",
    author: "Azumi Rose",
    date: "25 April 2022",
    readTime: "8 mins to read",
    image: Job3,
  },
  {
    title: "17 jobs hired at 15 (and even 14) you should know",
    category: "Events",
    author: "Azumi Rose",
    date: "25 April 2022",
    readTime: "8 mins to read",
    image: Job2,
  },
];

const trendingPosts = [
  {
    title: "How to get better agents in New York, USA",
    author: "Sugar Rosie",
    date: "",
    image: pic1,
  },
  {
    title: "How To Create a Resume for a Job in Social",
    author: "Harding",
    date: "17 Sep",
    image: pic2,
  },
  {
    title: "10 Ways to Avoid a Referee Disaster Zone",
    author: "Steven",
    date: "23 Sep",
    image: pic2,
  },
  {
    title: "How To Set Work-Life Boundaries From Any Location",
    author: "Merias",
    date: "14 Sep",
    image: pic1,
  },
  {
    title: "How To Land Your Dream Marketing Job",
    author: "Rosie",
    date: "12 Sep",
    image: pic2,
  },
];


const images = [team1, team2, team3, team1, team3];

const Blog = () => {
    return (
      <>
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-l from-[#0d47a1] to-black">
          {/* Latest Posts */}
          <div className="md:col-span-2">
            <h2 className="text-white text-2xl font-bold">Latest Posts</h2>
            <p className="text-white mb-4">Don't miss the trending news</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <div key={index} className="bg-white p-4 shadow rounded-lg">
                  <div className="w-72 flex justify-center items-center">
                    <Lottie animationData={post.image} className="w-32 h-32" />
                  </div>
                  <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded mt-2 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 text-black">{post.title}</h3>
                  <p className="text-black text-sm">
                    {post.author} - {post.date} - {post.readTime}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Sidebar */}
          <div>
            {/* Search */}
            <div className="relative mb-6 bg-white">
              <input type="text" placeholder="Search" className="w-full p-2 border rounded-lg bg-slate-50" />
            </div>
  
            {/* Trending Posts */}
            <div className="bg-white list-row">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Trending Now</h3>
              <div className="space-y-4">
                {trendingPosts.map((post, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Lottie animationData={post.image} className="w-16 h-16 rounded-lg" />
                    <div>
                      <h4 className="text-sm font-medium text-black">{post.title}</h4>
                      <p className="text-xs text-black">{post.author} - {post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Hiring Banner */}
            <div className="mt-6 p-4 bg-white p-6 rounded-lg shadow-lg w-80 mx-auto text-center border border-gray-200">
              <h4 className="text-blue-600 font-semibold text-lg">WE ARE</h4>
              <h2 className="text-2xl font-bold text-blue-800">HIRING</h2>
              <p className="text-black text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Recusandae architecto.
              </p>
              <div className="w-48 mx-auto mt-4">
                <Lottie animationData={Management} loop />
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                Know More
              </button>
            </div>
          </div>
        </div>
  
        {/* ✅ Subscribe Section - Moved Below the Blog */}
        <div className="bg-blue-600 text-white p-10 rounded-2xl relative flex flex-col items-center text-center mt-10">
          {/* Floating Images */}
          <div className="absolute left-4 top-6 w-32 h-16 rounded-lg overflow-hidden">
            <img src={images[0]} alt="People" />
          </div>
          <div className="absolute left-8 top-1/2 w-32 h-16 rounded-lg overflow-hidden">
            <img src={images[1]} alt="Meeting" />
          </div>
          {/* <div className="absolute left-6 bottom-6 w-20 h-16 rounded-lg overflow-hidden">
            <img src={images[2]} alt="Office" />
          </div> */}
          <div className="absolute right-4 top-6 w-32 h-20 rounded-lg overflow-hidden">
            <img src={images[3]} alt="Business Discussion" />
          </div>
          <div className="absolute right-6 bottom-6 w-32 h-16 rounded-lg overflow-hidden">
            <img src={images[4]} alt="Teamwork" />
          </div>
  
          {/* Title */}
          <h2 className="text-2xl font-bold">New Things Will Always <br /> Update Regularly</h2>
  
          {/* Subscription Form */}
          <div className="mt-6 flex items-center bg-white rounded-full overflow-hidden shadow-lg w-96 max-w-full">
            <span className="p-3 text-blue-500">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 p-3 text-gray-700 outline-none bg-white"
            />
            <button className="bg-blue-600 text-white px-5 py-3 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default Blog;
  