import { useLoaderData } from "react-router-dom";

import {
  FaIndustry,
  FaDollarSign,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  HiOutlineBriefcase,
  HiOutlineClock,
} from "react-icons/hi";
import { AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";

const JobDetails = () => {
  const jobData = useLoaderData();

  const {  company,applicationDeadline, category, jobType, salaryMax,salaryMin,
      salaryCurrency,location } = jobData;

  return (
    

    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
        Employment Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
        {/* Industry */}
        <div className="flex items-start gap-2">
          <FaIndustry className="mt-1 text-blue-600" />
          <div>
            <p className="font-medium">Industry</p>
            <p>Apply for: {company}</p>
          </div>
        </div>

        {/* Job Level */}
        <div className="flex items-start gap-2">
          <AiOutlineUser className="mt-1 text-blue-600" />
          <div>
            <p className="font-medium">Job Level</p>
            <p>{category}</p>
          </div>
        </div>

        {/* Salary */}
        <div className="flex items-start gap-2">
          <FaDollarSign className="mt-1 text-blue-600" />
          <div>
            <p className="font-medium">Salary</p>
            <p>
             {salaryMin} - {salaryMax} {salaryCurrency}
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="flex items-start gap-2">
          <HiOutlineBriefcase className="mt-1 text-blue-600" />
          <div>
            <p className="font-medium">Experience</p>
            <p>1 - 2 years</p>
          </div>
        </div>

        {/* Job Type */}
        <div className="flex items-start gap-2">
          <HiOutlineClock className="mt-1 text-blue-600" />
          <div>
            <p className="font-medium">Job Type</p>
            <p>{jobType}</p>
          </div>
        </div>

        {/* Deadline */}
        <div className="flex items-start gap-2">
          <AiOutlineCalendar className="mt-1 text-blue-600" />
          <div>
            <p className="font-medium">Deadline</p>
            <p>{applicationDeadline}</p>
          </div>
        </div>

        {/* Updated */}
        <div className="flex items-start gap-2">
          <AiOutlineCalendar className="mt-1 text-blue-600" />
          <div>
            <p className="font-medium">Updated</p>
            <p>10/07/2022</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2">
          <FaMapMarkerAlt className="mt-1 text-blue-600" />
          <div>
            <p className="font-medium">Location</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
