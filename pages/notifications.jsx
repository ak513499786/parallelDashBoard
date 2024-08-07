import Navbar from "../components/navbar";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Notification() {
  const scrollRef = useRef(null);
  const [notification, setNotification] = useState(false);
  const [notifications, setNotifications] = useState({});
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await fetch('/api/platform/notifications/route');
      const data = await res.json();
      if (data.success) {
        // Group notifications by date
        const groupedNotifications = groupNotificationsByDate(data.data);
        setNotifications(groupedNotifications);
      }
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
    }
  };

  const groupNotificationsByDate = (notifs) => {
    return notifs.reduce((acc, notif) => {
      const date = new Date(notif.time).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(notif);
      return acc;
    }, {});
  };

  const handleNotificationClick = (notif) => {
    setSelectedNotification(notif);
    setNotification(true);
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <Navbar />
      <section className="pt-[51.08px] max-sm:py-[30px] max-md:px-[40px] max-sm:px-[20px] px-[60px] pb-[123px]">
        <h1 className="text-[20px] leading-[26px] font-semibold mb-[28.92px]">
          Notifications
        </h1>
        <div className="max-md:relative">
          <div className="w-full max-xl:w-[50%] max-md:w-full h-[567px] rounded-[5px] bg-[white] pt-[0px] pl-[41px] max-sm:px-[20px] pr-[102.28pxpx]">
            <div
              ref={scrollRef}
              className="h-[505px] max-xl:w-[90%] max-sm:w-full max-xl:overflow-x-hidden overflow-y-scroll w-full mt-[31px]"
            >
              {Object.entries(notifications).map(([date, notifs]) => (
                <div key={date} className="mt-[31px]">
                  <h1 className="text-[16px] leading-[20.8px] mb-[16px]">
                    {date}
                  </h1>
                  {notifs.map((notif) => (
                    <div
                      key={notif._id}
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
                  ))}
                </div>
              ))}
            </div>
          </div>
          {notification && selectedNotification && (
            <div className="h-[561px] max-sm:p-[20px] max-xl:w-[50%] max-md:w-full max-md:absolute w-[calc(100%-782px)] bg-[white] rounded-[5px] mt-[6px] pt-[38.5px] pl-[23.5px] pr-[43.5px]">
              <h1 className="capitalize max-hamburger:w-[90%] text-[20px] leading-[26px] font-semibold">
                {selectedNotification.title}
              </h1>
              <div className="mt-[20.16px] max-hamburger:mb-[10px] flex gap-[29.43px] mb-[45.08px]">
                <p className="text-[14px] leading-[18.2px] opacity-60">
                  {formatTime(selectedNotification.time)}
                </p>
              </div>
              <p className="text-base max-hamburger:mb-[20px] mb-[36.61px]">
                {selectedNotification.title} {/* You might want to add a 'description' field to your schema */}
              </p>
              <button className="h-[43px] max-sm:w-full w-[134px] bg-[#0559BB] text-white rounded-[6px] text-[17.95px] leading-[21.54px]">
                <a href={selectedNotification.joinMeetLink} target="_blank" rel="noopener noreferrer">Join in zoom</a>
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