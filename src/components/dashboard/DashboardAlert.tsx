import React from "react";

interface DashboardAlertProps {
  title: string;
  description: string;
  icon: string;
}

const DashboardAlert: React.FC<DashboardAlertProps> = ({ 
  title, 
  description, 
  icon 
}) => {
  return (
    <div
      className="items-stretch border bg-[#FFF9FA] flex gap-4 overflow-hidden flex-wrap pl-4 pr-20 py-4 rounded-2xl border-solid border-[#F15D6D] max-md:pr-5"
    >
      <img
        src={icon}
        className="aspect-[1] object-contain w-7 shrink-0 my-auto"
        alt="Alert icon"
      />
      <div
        className="grow shrink-0 basis-0 w-fit max-md:max-w-full"
      >
        <div
          className="text-[#252525] text-[15px] font-semibold leading-none"
        >
          {title}
        </div>
        <div
          className="text-[#68727D] text-sm font-medium leading-none tracking-[-0.1px] max-md:max-w-full"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default DashboardAlert;
