import React from "react";

interface Notification {
  title: string;
  description: string;
  isNew?: boolean;
  timestamp?: string;
}

const NotificationCard: React.FC = () => {
  // Sample notifications
  const notifications: Notification[] = [
    {
      title: "High Risk Alert",
      description: "Farm ID #F789 shows critical risk levels",
      isNew: true,
      timestamp: "10 minutes ago"
    },
    {
      title: "Weather Warning",
      description: "Potential drought conditions in Al-Jazeera region",
      timestamp: "1 hour ago"
    },
    {
      title: "System Update",
      description: "New risk assessment model deployed",
      timestamp: "2 hours ago"
    }
  ];

  return (
    <div
      className="justify-center items-center border border-[color:var(--Stroke-Base,#EAECF0)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] flex w-full flex-col overflow-hidden bg-white rounded-2xl border-solid"
    >
      <div
        className="border self-stretch relative px-5 py-4 border-[rgba(234,236,240,1)] border-solid"
      >
        <div
          className="text-[#252525] z-0 w-full text-base font-semibold whitespace-nowrap pr-7 max-md:pr-5"
        >
          Notifications
        </div>
        <div
          className="absolute z-0 flex w-6 flex-col items-stretch justify-center right-5 bottom-4"
        >
          <div
            className="flex min-h-6 w-full flex-col items-center justify-center"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd47db5fdb0eb8d4774ddab0e48f7d9b884df3f1?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-full"
              alt="Options"
            />
          </div>
        </div>
      </div>
      
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`${index < notifications.length - 1 ? 'border-b-[color:var(--Stroke-Base,#EAECF0)] border-b border-solid' : ''} ${notification.isNew ? 'justify-between' : 'items-center'} flex min-h-[74px] w-[314px] max-w-full ${notification.isNew ? 'gap-[40px_56px]' : 'gap-2.5'} py-4`}
        >
          <div
            className="items-center self-stretch flex gap-2.5 my-auto"
          >
            <div
              className="border bg-[#FCEEF0] self-stretch flex w-10 shrink-0 h-10 my-auto rounded-[128px] border-solid border-[#EAECF0]"
            />
            <div
              className="self-stretch my-auto"
            >
              <div
                className="text-[#252525] text-[15px] font-semibold leading-none"
              >
                {notification.title}
              </div>
              <div
                className="text-[#68727D] text-sm font-medium leading-none mt-1"
              >
                {notification.description}
              </div>
              {notification.timestamp && (
                <div className="text-[#68727D] text-xs mt-1">
                  {notification.timestamp}
                </div>
              )}
            </div>
          </div>
          {notification.isNew && (
            <div
              className="self-stretch flex items-center gap-2.5 text-sm text-[#EFA22F] font-medium whitespace-nowrap leading-none my-auto"
            >
              <div
                className="text-[#EFA22F] self-stretch bg-[rgba(239,162,47,0.10)] px-2 py-1 rounded-[128px]"
              >
                New
              </div>
            </div>
          )}
        </div>
      ))}
      
      <div
        className="border self-stretch flex min-h-[52px] w-full items-stretch gap-3 justify-center px-5 py-4 border-[rgba(234,236,240,1)] border-solid"
      >
        <div
          className="text-sm text-[#323539] font-medium leading-none w-[53px]"
        >
          View All
        </div>
        <div
          className="flex min-w-60 items-center gap-2 flex-1 shrink basis-[0%] my-auto"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ccc255a3a91ff985dc0285627abb524d9c59ec0?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch my-auto"
            alt="Arrow right"
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;