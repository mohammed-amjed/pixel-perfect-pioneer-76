import React from "react";

interface Activity {
  username: string;
  description: string;
  timestamp?: string;
}

const ActivityCard: React.FC = () => {
  // Sample activities
  const activities: Activity[] = [
    {
      username: "Ahmed Hassan",
      description: "Updated risk assessment for Farm ID #F123",
      timestamp: "2 hours ago"
    },
    {
      username: "Sarah Mohamed",
      description: "Added new farmer profile in Al-Jazeera region",
      timestamp: "4 hours ago"
    },
    {
      username: "Karim Ali",
      description: "Generated monthly risk report for March 2025",
      timestamp: "5 hours ago"
    },
    {
      username: "Fatima Ibrahim",
      description: "Modified land parameters for Farm ID #F456",
      timestamp: "1 day ago"
    }
  ];

  return (
    <div
      className="items-stretch border border-[color:var(--Stroke-Base,#EAECF0)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] flex min-h-[422px] w-full flex-col overflow-hidden bg-white mt-6 rounded-2xl border-solid"
    >
      <div
        className="border flex w-full flex-col items-stretch text-base text-[#252525] font-semibold justify-center px-5 py-4 border-[rgba(234,236,240,1)] border-solid"
      >
        <div
          className="text-[#252525] w-full pr-7 max-md:pr-5"
        >
          Latest Activity
        </div>
      </div>
      <div
        className="flex min-h-[312px] w-full flex-col items-stretch justify-center px-5"
      >
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`flex w-full items-center gap-2.5 py-4 ${index < activities.length - 1 ? 'border-[rgba(234,236,240,1)] border-b' : ''}`}
          >
            <div
              className="items-center self-stretch flex gap-2.5 my-auto"
            >
              <div
                className="bg-[rgba(252,238,240,1)] border self-stretch flex min-h-10 items-center justify-center w-10 h-10 my-auto rounded-[50px] border-[rgba(234,236,240,1)] border-solid"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d13be515cb0d03f77adf8ddb6233aa007752df9?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch my-auto"
                  alt="Activity icon"
                />
              </div>
              <div
                className="self-stretch my-auto"
              >
                <div
                  className="text-[#252525] text-[15px] font-semibold leading-none"
                >
                  {activity.username}
                </div>
                <div
                  className="text-[#68727D] text-sm font-medium leading-none mt-1"
                >
                  {activity.description}
                </div>
                {activity.timestamp && (
                  <div className="text-[#68727D] text-xs mt-1">
                    {activity.timestamp}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="self-center flex min-h-[52px] w-full max-w-[352px] items-stretch gap-3 justify-center px-5 py-4 border-[rgba(234,236,240,1)] border-t"
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

export default ActivityCard;