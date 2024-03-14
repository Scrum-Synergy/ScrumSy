import React, { useEffect, useState } from 'react';
import axios from 'axios';

export interface RevisionPlan {
  name: string;
  description: string;
  price: number;
  type: string;
  img: string;
}

const PlanCard: React.FC = () => {
  const [plans, setPlans] = useState<RevisionPlan[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://scrum-sy-api.vercel.app/api/revision'); 
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex gap-5'>
      {plans.map((plan, index) => (
        <div key={index} className=" w-80 h-96 bg-stone-900 bg-opacity-40 rounded-2xl shadow border-2 border-cyan-400 text-white flex-col justify-start items-start inline-flex">
          <img className="CardImage w-full h-40 object-cover rounded-t-2xl" src={plan.img} alt={plan.name} />
          <div className="CardContent p-4 flex flex-col justify-start items-start gap-2">
            <div className="CardTitle text-black text-xl font-bold font-['Red Hat Display'] text-white  ">{plan.name}</div>
            <div className="CardDescription text-white text-sm font-normal font-['Red Hat Display']">{plan.description}</div>
            <div className="CardType  w-9 flex justify-center border-2   rounded text-sm  font-['Red Hat Display']">#{plan.type}</div>
            <div className="CardPrice  text-sm font-bold font-['Red Hat Display']">${plan.price}</div>
          </div>
          <div className="CardActions self-stretch px-4 pb-4 justify-end items-start gap-2 inline-flex">
            <button className="Button px-3 py-2 rounded-lg border-2 bg-gradient-to-r from-customPink to-customCyan justify-start items-start gap-2 flex">
              <div className="ButtonText text-white text-[13px] font-bold font-['Red Hat Display'] leading-snug tracking-wide">Enroll Now</div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
