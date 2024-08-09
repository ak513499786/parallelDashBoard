import Navbar from "../components/navbar";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import axios from 'axios';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [notification, setNotification] = useState(false);
  const scrollRef = useRef(null);

  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  // Fetch notifications from the API
  useEffect(() => {
    async function fetchNotifications() {
      try {
        const response = await axios.get('/api/platform/notifications/route'); // Replace with your API endpoint
        setNotifications(response.data.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    }

    fetchNotifications();
  }, []);

  const handleNotificationClick = (notif) => {
    setSelectedNotification(notif);
    setNotification(true);
  };

  return (
    <>
    <Navbar />
    <section className="pt-[51.08px] max-sm:py-[30px] max-md:px-[40px] max-sm:px-[20px] px-[60px] pb-[123px]">
      <h1 className="text-[20px] leading-[26px] font-semibold mb-[28.92px]">
        Notifications
      </h1>
      <div className="max-md:relative">
        <div className="w-full max-xl:w-[50%] max-md:w-full h-[567px] rounded-[5px] bg-[white] pt-[0px] pl-[41px] max-sm:px-[20px] pr-[102.28px]">
          <div
            ref={scrollRef}
            className="h-[505px] max-xl:w-[90%] max-sm:w-full max-xl:overflow-x-hidden overflow-y-scroll w-full mt-[31px]"
          >
            {notifications.map((notif, index) => (
              <div key={index}>
                <h1 className="text-[16px] leading-[20.8px] mb-[16px]">
                  {notif.date}
                </h1>
                <div
                  onClick={() => handleNotificationClick(notif)}
                  className="py-[10px] h-[75px] w-full max-xl:w-full border-b-[1px] border-[#C4C4C4] cursor-pointer"
                >
                  <h1 className="capitalize max-xl:truncate text-[20px] leading-[26px]">
                    {notif.title}
                  </h1>
                  <p className="mt-[11px] text-[14px] leading-[18.2px] opacity-60">
                    {formatTime(notif.time)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {notification && selectedNotification && (
          <div className="h-[561px] max-sm:p-[20px] max-xl:w-[50%] max-md:w-full max-md:absolute w-[calc(100%-782px)] bg-[white] rounded-[5px] mt-[6px] pt-[38.5px] pl-[23.5px] pr-[43.5px]">
            <h1 className="capitalize max-hamburger:w-[90%] text-[20px] leading-[26px] font-semibold">
              {selectedNotification.title}
            </h1>
            <div className="mt-[16px] max-hamburger:mb-[10px] flex gap-[29.43px] mb-[42.08px]">
              <p className="text-[14px] leading-[18.2px] opacity-60">
                {formatTime(selectedNotification.time)}
              </p>
            </div>
            <p className="text-base max-hamburger:mb-[20px] mb-[36.61px]">
              {selectedNotification.description}
            </p>
            <button className="h-[43px] max-sm:w-full w-[134px] bg-[#0559BB] text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
              Join in zoom
            </button>
            <span
              onClick={() => setNotification(false)}
              className="hidden max-md:block"
            >
              <Image
                src="/Vector (2).svg"
                className="absolute max-md:right-[40px] max-sm:right-[20px] right-[50.33px] cursor-pointer top-[37.29px]"
                width={23.35}
                height={23.35}
              />
            </span>
          </div>
        )}
      </div>
    </section>
    </>
  );
}

export default Notifications;
