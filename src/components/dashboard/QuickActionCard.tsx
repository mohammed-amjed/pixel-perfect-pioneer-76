import React from "react";

interface QuickActionCardProps {
  title: string;
  icon: string;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ title, icon }) => {
  return (
    <div
      className="items-stretch border border-[color:var(--Neutral-700,#D1D9E2)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex flex-col overflow-hidden justify-center flex-1 px-5 py-4 rounded-[10px] border-solid"
    >
      <div className="w-full">
        <div
          className="text-[#252525] text-base font-semibold tracking-[0.02px]"
        >
          {title}
        </div>
        <div
          className="flex w-full items-center gap-3 text-sm text-[#68727D] font-medium tracking-[-0.01px] leading-none mt-2"
        >
          <div
            className="self-stretch flex-1 shrink basis-[0%] my-auto"
          >
            Quick Action
          </div>
          <img
            src={icon}
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Action icon"
          />
        </div>
      </div>
    </div>
  );
};

export default QuickActionCard;
