import { easeOut } from "motion";
import * as motion from "motion/react-client"
import team1 from "../../assets/pictures/team4.jpg";
import team2 from "../../assets/pictures/team5.jpg";
import team3 from "../../assets/pictures/team3.jpg";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-120 bg-gradient-to-l from-[#0d47a1] to-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="flex-1">
    <motion.img
      src={team1}
      animate={{y:[50,100,50]}}
      transition={{duration:10,repeat:Infinity}}
      className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-700 shadow-2xl" />
    <motion.img
      src={team2}
      animate={{x:[100,150,100]}}
      transition={{duration:10,repeat:Infinity}}
      className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-700 shadow-2xl" />
    </div>
    <div className="flex-1">
      <motion.h1 
      animate={{x:50}}
      transition={{duration:2, delay:1, ease:easeOut, repeat:Infinity}}
      
      className="text-5xl font-bold">Lates <motion.span
      animate={{color:['#33ddff','#33ff9c','#f0ff33']}}
      transition={{duration:1.5, repeat:Infinity}}
      >Jobs</motion.span> For You!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;