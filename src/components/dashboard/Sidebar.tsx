import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div
      className="items-stretch border-r-[color:var(--Stroke-Base,#EAECF0)] flex grow flex-col overflow-hidden w-full bg-white py-6 border-r border-solid"
    >
      <div
        className="flex w-full flex-col text-base text-[rgba(37,37,37,1)] font-bold whitespace-nowrap tracking-[-0.24px] leading-[3] justify-center px-7 rounded-[5px] max-md:px-5"
      >
        <div
          className="flex w-32 max-w-full items-stretch gap-2 py-1"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3813ccfcf381dff44d10ea1c8a15d6d655ba91e?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[25px] shrink-0"
            alt="Logo"
          />
          <div className="my-auto">
            Maksat
          </div>
        </div>
      </div>
      <div
        className="w-full text-[15px] text-[#68727D] font-semibold leading-none flex-1 mt-8"
      >
        <div className="w-full">
          <div
            className="bg-[rgba(251,255,246,1)] relative flex min-h-[46px] w-full items-center gap-3 text-[#83C541] whitespace-nowrap px-7 max-md:px-5"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9024d07de527d344f4c6a446ec322ce67d3677a?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[18px] self-stretch z-0 shrink-0 my-auto"
              alt="Dashboard icon"
            />
            <div
              className="self-stretch z-0 flex-1 shrink basis-[0%] my-auto"
            >
              Dashboard
            </div>
            <div className="bg-[rgba(131,197,65,1)] absolute z-0 flex w-[3px] shrink-0 h-[46px] left-0 inset-y-0" />
          </div>
          <div
            className="flex min-h-[46px] w-full items-center gap-3 mt-1 px-7 max-md:px-5"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/409edf5ce62579b8a50fd66bb5fdf5c98992584f?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
              alt="Financial institutions icon"
            />
            <div
              className="text-[#68727D] self-stretch flex-1 shrink basis-[0%] my-auto"
            >
              Financial Institutions
            </div>
          </div>
          <div
            className="flex min-h-[46px] w-full items-center gap-3 mt-1 px-7 max-md:px-5"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ef51d70c89ac0893f78e2bef00bc746e34a907?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
              alt="Accounts list icon"
            />
            <div
              className="text-[#68727D] self-stretch flex-1 shrink basis-[0%] my-auto"
            >
              Accounts List
            </div>
          </div>
          <div
            className="flex min-h-[46px] w-full items-center gap-3 mt-1 px-7 max-md:px-5"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8134da4b39d50698e22e098072cda87c70a76ce?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
              alt="Reports icon"
            />
            <div
              className="text-[#68727D] self-stretch flex-1 shrink basis-[0%] my-auto"
            >
              Reports & Analytics
            </div>
          </div>
          <div
            className="flex min-h-[46px] w-full items-center gap-3 mt-1 px-7 max-md:px-5"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c042c4f5c33ee463a671970e6c9fc695bd41fc3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
              alt="Controls icon"
            />
            <div
              className="text-[#68727D] self-stretch flex-1 shrink basis-[0%] my-auto"
            >
              Controls & Security
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-center flex max-w-full w-[280px] flex-col items-stretch justify-center mt-8"
      >
        <div className="w-full px-7 max-md:px-5">
          <div
            className="items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] flex min-h-[58px] w-full gap-3 rounded-[5px]"
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
      </div>
      <div
        className="w-full text-[15px] text-[#68727D] font-semibold leading-none mt-8"
      >
        <div
          className="flex min-h-[46px] w-full items-center gap-3 px-7 max-md:px-5"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3036edb39a0533e6f3ff473e1c65de7457f0c8e7?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
            alt="Sign out icon"
          />
          <div
            className="text-[#68727D] self-stretch flex-1 shrink basis-[0%] my-auto"
          >
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
