import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobData = useLoaderData();

  const { title, company } = jobData;

  return (
    <div className="mt-10">
      <h1>Job details for: {title}</h1>
      <p>Apply for: {company}</p>
      
    </div>
  );
};

export default JobDetails;
