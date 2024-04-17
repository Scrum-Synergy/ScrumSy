import SideBar from '../../components/SideBar';
import Form from '../../components/Form';
import Profile from '../../components/Profile';
import DashboardNav from '../../components/DashboardNav';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useAuth } from '../../hooks/useAuth';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece]; 

const Dashboard = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [CurrentTab, setCurrentTab] = useState('Dashboard');
  const { user } = useAuth();

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div className='w-full flex'>
      <SideBar handleTabChange={handleTabChange} />
      <div className='w-full'> 
        <DashboardNav></DashboardNav>
        
        <div className='flex'>
          
          <div className='w-full bg-[#836FFF]' style={{ height: 'calc(100vh - 75px)' }}>
           {/* Main Content */ }
            {CurrentTab === 'Dashboard' && (
              <div className="Rectangle9 m-5 mt-12" style={{width: 643, height: 194, background: '#211951', boxShadow: '10px 10px 25px rgba(0, 0, 0, 0.25)', borderRadius: 30}}>
                <p className='text-white font-bold text-2xl py-8 px-20'>Welcome to the dashboard, {user.username} </p>
                <p className='text-white  font-Poppins font-sans text-[17.5px] px-20'>“All our dreams can come true, if we have the courage to pursue them. “  <span className='px-3'>Walt Disney</span>     </p>
                <img className="absolute top-10 right-[650px] w-[210px] h-[210px] rotate-[5deg] " src="Graduated.png" />
                <h2 className=' mt-16 text-3xl font-bold text-white'>My Courses</h2>
                <div>
                  {/*{student.planEnrolledIn.map((revisionPlan) => (
                    <div key={revisionPlan.id}>
                      <p>{revisionPlan.name}</p>
                      <p>{revisionPlan.description}</p>
                    </div>
                  ))}*/}
                </div>
           
              </div>
            )}
            {CurrentTab === 'Courses' && (
              <div className= ' max-h-fit max-w-fit p-8 m-auto'> <Form/> </div>
          
            )}
            {CurrentTab === 'Profile' && (
              <div className='pt-8 m-auto' >  
                <Profile/>
</div>
            )}
          </div>
          <div className=' bg-[#836FFF] w-1/4 ' style={{ height: 'calc(100vh - 75px)' }}>
            {/* other Content */ }
            <div className='py-4 px-8' >
            <Calendar onChange={onChange} value={value} />
            </div>
            <h2 className='text-2xl font-bold text-white'>Upcoming Tasks </h2>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

