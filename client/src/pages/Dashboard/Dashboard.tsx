
import SideBar from '../../components/SideBar'



const Dashboard = () => {
  return (
    <div className='w-full flex'>
      <div className=''>
        <SideBar/>
      </div>
      { /*main section*/  }
      <div className=' w-full bg-blue-200'> 
         <nav className='w-full bg-amber-200  h-20'> Nav</nav>
         <div className='flex'>
         <div className=' w-full h-svh bg-slate-600'>
          main content
         </div>
         <div className=' bg-white  w-1/4 h-screen'>
          other content
         </div>
         </div>
      
      </div>
    </div>
  )
}

export default Dashboard