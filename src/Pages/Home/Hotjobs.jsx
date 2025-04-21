import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const Hotjobs = () => {
  const [jobs, setJobs] = useState([]);  // Stores all jobs
  const [visibleJobs, setVisibleJobs] = useState([]);  // Stores the jobs to be displayed
  const [hasMore, setHasMore] = useState(true);  // Check if there are more jobs to show

  useEffect(() => {
    fetch('http://localhost:8081/job')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setVisibleJobs(data.slice(0, 8));  // Show first 8 jobs initially
        if (data.length <= 8) setHasMore(false);  // If total jobs are less than or equal to 8, no more to show
      })
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  // Function to load more jobs when user clicks "See More"
  const loadMoreJobs = () => {
    const currentJobsCount = visibleJobs.length;
    const newJobs = jobs.slice(currentJobsCount, currentJobsCount + 8);
    setVisibleJobs([...visibleJobs, ...newJobs]);

    // Check if there are more jobs to show
    if (currentJobsCount + newJobs.length >= jobs.length) {
      setHasMore(false);  // Disable the "See More" button if no more jobs left
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          visibleJobs.map(job => (
            <HotJobsCard key={job.id} job={job} />
          ))
        }
      </div>

      {/* "See More" button if there are more jobs to show */}
      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreJobs}
            className="btn btn-primary"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Hotjobs;
