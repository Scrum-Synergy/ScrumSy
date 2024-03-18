import SideBar from '../../components/SideBar';
import DashboardNav from '../../components/DashboardNav';

const Dashboard = () => {
  return (
    <div className='w-full flex'>
      <SideBar></SideBar>
      <div className='w-full'> 
        <DashboardNav></DashboardNav>
        
        <div className='flex'>
          
          <div className='w-full bg-stone-100' style={{ height: 'calc(100vh - 75px)' }}>
            main content
          </div>
          <div className=' bg-stone-100 w-1/4 ' style={{ height: 'calc(100vh - 75px)' }}>
            other content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
