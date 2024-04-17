import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Notification {
  _id: string;
  status: string;
}

const NotificationComponent: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Function to fetch notifications from the database
    const fetchNotifications = async () => {
      try {
        const response = await axios.get<Notification[]>(`${import.meta.env.VITE_SERVER}/api/request/all`,
          {
            headers: {
              jwt: document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/, "$1")
            }
          }
        ); // Adjust the endpoint as per your backend setup
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    // Call the fetchNotifications function when the component mounts
    fetchNotifications();

    // Optionally, you can set up polling or use WebSocket for real-time updates
    // For simplicity, let's just refetch notifications every 30 seconds
    const interval = setInterval(fetchNotifications, 3000);

    // Cleanup function to clear interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-72 h-96 mr-6 -mt-10 notification-container bg-[#211951] p-4 rounded-[10px] overflow-auto">
      <h2 className="text-xl text-center italic font-semibold mb-4">Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification._id} className="shadow-md rounded-md text-[15px]">
            <span className="font-bold">REQ ID:</span> {notification._id}
            <br />
            <span className="font-bold">Status:</span> {notification.status}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;
