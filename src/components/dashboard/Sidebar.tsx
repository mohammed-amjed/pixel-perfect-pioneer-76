
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Define navigation items
  const navItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9024d07de527d344f4c6a446ec322ce67d3677a?placeholderIfAbsent=true"
    },
    {
      title: "Financial Institutions",
      path: "/institutions",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/409edf5ce62579b8a50fd66bb5fdf5c98992584f?placeholderIfAbsent=true"
    },
    {
      title: "Accounts List",
      path: "/accounts",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3ef51d70c89ac0893f78e2bef00bc746e34a907?placeholderIfAbsent=true"
    },
    {
      title: "Reports & Analytics",
      path: "/reports",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8134da4b39d50698e22e098072cda87c70a76ce?placeholderIfAbsent=true"
    },
    {
      title: "Controls & Security",
      path: "/security",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c042c4f5c33ee463a671970e6c9fc695bd41fc3?placeholderIfAbsent=true"
    }
  ];

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <div
      className="items-stretch border-r-[color:var(--Stroke-Base,#EAECF0)] flex grow flex-col overflow-hidden w-full bg-white py-6 border-r border-solid h-full"
    >
      {/* Top section - Logo and navigation */}
      <div
        className="flex w-full flex-col text-base text-[rgba(37,37,37,1)] font-bold whitespace-nowrap tracking-[-0.24px] leading-[3] justify-center px-7 rounded-[5px] max-md:px-5"
      >
        <Link to="/" className="flex w-32 max-w-full items-stretch gap-2 py-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3813ccfcf381dff44d10ea1c8a15d6d655ba91e?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[25px] shrink-0"
            alt="Logo"
          />
          <div className="my-auto">
            Maksat
          </div>
        </Link>
      </div>
      
      {/* Middle section - Navigation menu */}
      <div
        className="w-full text-[15px] text-[#68727D] font-semibold leading-none mt-8"
      >
        <div className="w-full">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`relative flex min-h-[46px] w-full items-center gap-3 mt-1 px-7 max-md:px-5 transition-colors ${
                isActive(item.path) 
                  ? "bg-[rgba(251,255,246,1)] text-[#83C541]" 
                  : "text-[#68727D] hover:bg-gray-50"
              }`}
            >
              <img
                src={item.icon}
                className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
                alt={`${item.title} icon`}
              />
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                {item.title}
              </div>
              
              {isActive(item.path) && (
                <div className="bg-[rgba(131,197,65,1)] absolute z-0 flex w-[3px] shrink-0 h-[46px] left-0 inset-y-0" />
              )}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Spacer to push the bottom section down */}
      <div className="flex-1"></div>
      
      {/* Bottom section - Institution name, sign out button, and footer */}
      <div className="flex flex-col mt-auto">
        {/* Institution Profile */}
        <div
          className="self-center flex max-w-full w-full flex-col items-stretch justify-center px-7 max-md:px-5"
        >
          <div
            className="items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] flex min-h-[58px] w-full gap-3 rounded-[5px] px-2"
          >
            <div
              className="items-center self-stretch flex w-full gap-2.5 flex-1 shrink basis-[0%] my-auto"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c721572e015afa34dc6f114d4583a2690d92181?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto"
                alt="User avatar"
              />
              <div
                className="self-stretch my-auto"
              >
                <div
                  className="text-[#252525] text-[15px] font-semibold leading-none"
                >
                  Institution Name
                </div>
                <div
                  className="text-[#68727D] text-sm font-medium leading-none"
                >
                  a.abdo@domain.com
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sign Out Button */}
        <div
          className="w-full text-[15px] text-[#68727D] font-semibold leading-none mt-4"
        >
          <div
            className="flex min-h-[46px] w-full items-center gap-3 px-7 max-md:px-5 hover:bg-gray-100 cursor-pointer rounded-md transition-colors"
          >
            <LogOut className="w-[18px] h-[18px] text-[#68727D]" />
            <div
              className="text-[#68727D] self-stretch flex-1 shrink basis-[0%] my-auto"
            >
              Sign Out
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-4 px-7 py-3 text-xs text-[#68727D] border-t border-[#EAECF0]">
          <p className="text-center">© 2025 Maksat. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-1">
            <span className="hover:text-[#83C541] cursor-pointer">Privacy</span>
            <span className="hover:text-[#83C541] cursor-pointer">Terms</span>
            <span className="hover:text-[#83C541] cursor-pointer">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
