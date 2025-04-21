import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    id,
    title,
    location,
    jobType,
    category,
    requirements,
    applicationDeadline,
    salaryMin,
    salaryMax,
    salaryCurrency,
    company_logo,
    company,
    description,
  } = job;

  // Ensure requirements is an array
  let parsedRequirements = [];
  try {
    parsedRequirements = typeof requirements === 'string'
      ? JSON.parse(requirements)
      : Array.isArray(requirements)
      ? requirements
      : [];
  } catch (error) {
    parsedRequirements = [];
  }

  return (
    <div className="card card-compact bg-base-100 shadow-xl bg-gradient-to-l from-[#0d47a1] to-black text-white">
      <div className="flex gap-2 mt-4 px-4">
        <figure>
          <img className="w-12 h-12 object-contain" src={company_logo} alt={company} />
        </figure>
        <div>
          <h4 className="text-xl font-semibold">{company}</h4>
          <p className="flex items-center gap-1 text-sm">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm">{description}</p>

        <div className="flex gap-2 flex-wrap mt-2">
          {parsedRequirements.map((skill, index) => (
            <p
              key={index}
              className="border rounded-md px-2 text-sm hover:text-blue-400 hover:bg-white bg-opacity-10"
            >
              {skill}
            </p>
          ))}
        </div>

        <div className="card-actions justify-between items-center mt-4">
          <p className="flex items-center gap-1 text-sm">
            Salary: <FaDollarSign /> {salaryMin}-{salaryMax} {salaryCurrency}
          </p>
          <Link to={`/job/${id}`}>
            <button className="btn btn-sm btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
