import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  iconBgColor: string;
  growth: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon, 
  iconBgColor, 
  growth 
}) => {
  return (
    <div
      className="border border-[color:var(--Stroke-Base,#EAECF0)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] min-w-60 overflow-hidden flex-1 shrink basis-[0%] bg-white px-5 py-4 rounded-2xl border-solid"
    >
      <div className="flex w-full">
        <div
          className="flex-1 shrink basis-4"
        >
          <div
            className="text-[#68727D] text-sm font-medium leading-none"
          >
            {title}
          </div>
          <div
            className="text-[#252525] text-[28px] font-bold leading-none tracking-[-0.42px] mt-2"
          >
            {value}
          </div>
        </div>
        <div
          className={`justify-center items-center ${iconBgColor} flex w-9 h-9 px-2 rounded-[128px]`}
        >
          <img
            src={icon}
            className="aspect-[1] object-contain w-5 self-stretch my-auto"
            alt="Stats icon"
          />
        </div>
      </div>
      <div
        className="text-[#83C541] text-sm font-medium leading-none mt-2"
      >
        {growth}
      </div>
    </div>
  );
};

export default StatsCard;
