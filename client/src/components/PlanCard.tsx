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
        const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/revision`); 
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex px-5 gap-5'>
      {plans.map((plan, index) => (
        <div key={index} className="w-80 h-96 bg-stone-900 bg-opacity-40 rounded-2xl shadow-lg border-2 border-cyan-400 text-white flex flex-col justify-between items-center">
          <img className="w-full h-1/2 rounded-t-xl object-cover" src={plan.img} alt={plan.name} />
          <div className="p-4">
            <div className="text-xl font-bold text-white">{plan.name}</div>
            <div className="text-sm text-gray-300">{plan.description}</div>
            <div className="text-sm font-bold text-customPink mt-2"># {plan.type}</div>
          </div>
          <div className="p-4 w-full flex justify-between items-center">
            <div className="text-sm font-bold text-white">{plan.price} DT</div>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-customPink to-customCyan text-white font-bold">
              Enroll Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
