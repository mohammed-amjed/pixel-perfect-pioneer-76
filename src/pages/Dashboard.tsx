import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import StatsCard from "../components/dashboard/StatsCard";
import DashboardAlert from "../components/dashboard/DashboardAlert";
import PortfolioTable from "../components/dashboard/PortfolioTable";
import NotificationCard from "../components/dashboard/NotificationCard";
import ActivityCard from "../components/dashboard/ActivityCard";
import QuickActionCard from "../components/dashboard/QuickActionCard";
import SearchBox from "../components/dashboard/SearchBox";

const Dashboard: React.FC = () => {
  // Stats cards data
  const statsCards = [
    {
      title: "Total Framers",
      value: "143",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9312df88b6d2884211b8304523164e855263acd1?placeholderIfAbsent=true",
      iconBgColor: "bg-[#F3F9EC]",
      growth: "+2% monthly growth"
    },
    {
      title: "Total Policies",
      value: "523",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac70ae5e1470fef5ca7cb450707004e402789041?placeholderIfAbsent=true",
      iconBgColor: "bg-[#ECF4FC]",
      growth: "+2% monthly growth"
    },
    {
      title: "Total Claims",
      value: "225",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/520e6221475c31001b77976783f33a4817e827de?placeholderIfAbsent=true",
      iconBgColor: "bg-[#FFEFEE]",
      growth: "+2% monthly growth"
    },
    {
      title: "Approved Claims",
      value: "345",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7fe8cb42a37df076b6abd2026f999dee8163195?placeholderIfAbsent=true",
      iconBgColor: "bg-[#F2FFFF]",
      growth: "+2% monthly growth"
    }
  ];

  // Quick action cards data
  const quickActions = [
    {
      title: "Manage Accounts",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7e507886f4eca8f8f4a290c102818d1c6245c62?placeholderIfAbsent=true"
    },
    {
      title: "View Reports",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7e507886f4eca8f8f4a290c102818d1c6245c62?placeholderIfAbsent=true"
    },
    {
      title: "Generate Summaries",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ccc255a3a91ff985dc0285627abb524d9c59ec0?placeholderIfAbsent=true"
    },
    {
      title: "Add New FI",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ccc255a3a91ff985dc0285627abb524d9c59ec0?placeholderIfAbsent=true"
    }
  ];

  return (
    <div
      className="bg-[rgba(250,250,252,1)] pr-8 max-md:pr-5"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-1/5 max-md:w-full max-md:ml-0">
          <Sidebar />
        </div>
        <div
          className="w-4/5 ml-5 max-md:w-full max-md:ml-0"
        >
          <div className="w-full mt-8 max-md:max-w-full max-md:mt-10">
            <div
              className="w-full max-md:max-w-full"
            >
              <div
                className="flex w-full items-center max-md:max-w-full"
              >
                <div
                  className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
                >
                  <h1
                    className="text-[#323539] text-[28px] font-semibold leading-none tracking-[-0.28px] max-md:max-w-full"
                  >
                    Welcome, Admin
                  </h1>
                  <p
                    className="text-[#68727D] text-base font-normal max-md:max-w-full"
                  >
                    Here's your rundown for today
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div
              className="flex min-h-[126px] gap-6 flex-wrap mt-8"
            >
              {statsCards.map((card, index) => (
                <StatsCard
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                  iconBgColor={card.iconBgColor}
                  growth={card.growth}
                />
              ))}
            </div>
            
            <div className="mt-8 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div
                  className="w-[67%] max-md:w-full max-md:ml-0"
                >
                  <div className="w-full max-md:max-w-full max-md:mt-6">
                    {/* Dashboard Alert */}
                    <DashboardAlert
                      title="Action Needed! Complete Your Portfolio Setup"
                      description="You've uploaded farmers but some profiles are missing key details."
                      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8183109bbd39627bce33cc21530c4c8433337720?placeholderIfAbsent=true"
                    />
                    
                    {/* Search and Filter */}
                    <div className="flex w-full items-stretch gap-5 text-[15px] text-[#68727D] font-normal whitespace-nowrap leading-none flex-wrap justify-between mt-[25px] max-md:max-w-full">
                      <SearchBox />
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/61ce16c4-0196-4a66-8697-eff6a086d1b0?placeholderIfAbsent=true"
                        className="aspect-[3.38] object-contain w-[135px] shrink-0 max-w-full pr-[var(--Main-System-14px,] pl-[var(--Main-System-14px,] gap-[12px;}] pt-[10px)] pb-[14px;]"
                        alt="Filter options"
                      />
                    </div>
                    
                    {/* Portfolio Table */}
                    <PortfolioTable />
                  </div>
                </div>
                
                <div
                  className="w-[33%] ml-5 max-md:w-full max-md:ml-0"
                >
                  <div className="grow max-md:mt-6">
                    {/* Notification Card */}
                    <NotificationCard />
                    
                    {/* Activity Card */}
                    <ActivityCard />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Action Cards */}
            <div className="flex items-stretch gap-6 flex-wrap mt-[23px]">
              {quickActions.map((action, index) => (
                <QuickActionCard
                  key={index}
                  title={action.title}
                  icon={action.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
