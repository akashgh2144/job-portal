import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const HotJobsCard = ({job}) => {
    const {_id,title,location,jobType,category,requirements,applicationDeadline,salaryRange,company_logo,company,description}= job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl bg-gradient-to-l from-[#0d47a1] to-black">
       <div className="flex gap-2 mt-4">
       <figure>
          <img
            className="w-12"
            src={company_logo}
            alt="Shoes" />
        </figure>
        <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="flex gap-2 items-center"> <FaMapMarkerAlt></FaMapMarkerAlt>  {location}</p>
        </div>
       </div>
        <div className="card-body">
          <h2 className="card-title">{title}!</h2>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">

            {
                requirements.map(skill => <p
                className="border rounded-md text-center px-2  hover:text-blue-600 hover:bg-slate-400    "
                
                >{skill}</p> )
            }

          </div>
          <div className="card-actions justify-end items-center">

            <p className="flex gap-1 items-center">salary: <FaDollarSign></FaDollarSign> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
          <Link to={`/jobs/${_id}`}>
          <button className="btn btn-primary">Apply</button>
          </Link>
          </div>
        </div>
      </div>
    );
};

export default HotJobsCard;