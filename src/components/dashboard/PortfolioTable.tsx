import React from "react";

interface Institution {
  name: string;
  avatar: string;
}

interface PortfolioData {
  institution: Institution;
  totalFarmers: string;
  totalInsuredLand: string;
  financialExposure: string;
}

const PortfolioTable: React.FC = () => {
  // Sample data for the table
  const portfolioData: PortfolioData[] = [
    {
      institution: { name: "Admin Name", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" },
      totalFarmers: "4,000 m2",
      totalInsuredLand: "4,856",
      financialExposure: "$1,234.56"
    },
    {
      institution: { name: "Admin Name", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" },
      totalFarmers: "4,000 m2",
      totalInsuredLand: "497",
      financialExposure: "$1,234.56"
    },
    {
      institution: { name: "Admin Name", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" },
      totalFarmers: "4,000 m2",
      totalInsuredLand: "2,373",
      financialExposure: "$1,234.56"
    },
    {
      institution: { name: "Admin Name", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" },
      totalFarmers: "4,000 m2",
      totalInsuredLand: "3,284",
      financialExposure: "$1,234.56"
    },
    {
      institution: { name: "Admin Name", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" },
      totalFarmers: "4,000 m2",
      totalInsuredLand: "583",
      financialExposure: "$1,234.56"
    },
    {
      institution: { name: "Admin Name", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" },
      totalFarmers: "4,000 m2",
      totalInsuredLand: "583",
      financialExposure: "$1,234.56"
    },
    {
      institution: { name: "Admin Name", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" },
      totalFarmers: "4,000 m2",
      totalInsuredLand: "583",
      financialExposure: "$1,234.56"
    }
  ];

  return (
    <div
      className="border border-[color:var(--Stroke-Base,#EAECF0)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] w-full overflow-hidden bg-white mt-6 rounded-2xl border-solid max-md:max-w-full"
    >
      <div
        className="relative w-full px-6 py-4 max-md:max-w-full max-md:px-5"
      >
        <div
          className="text-[#252525] z-0 w-full text-base font-semibold pr-7 max-md:max-w-full max-md:pr-5"
        >
          Portfolio Overview
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
      <div
        className="border-t-[color:var(--Stroke-Base,#EAECF0)] flex w-full overflow-hidden border-t border-solid max-md:max-w-full"
      >
        <div className="w-[191px]">
          <div
            className="items-center border-b-[color:var(--Stroke-Base,#EAECF0)] flex min-h-11 w-full gap-4 text-[13px] text-[#68727D] font-medium whitespace-nowrap leading-none bg-[#FAFAFC] px-6 py-[13px] border-b border-solid max-md:px-5"
          >
            <div
              className="text-[#68727D] self-stretch gap-1 my-auto"
            >
              Institution
            </div>
          </div>
          
          {portfolioData.map((item, index) => (
            <div
              key={`institution-${index}`}
              className="items-center border-b-[color:var(--Stroke-Base,#EAECF0)] flex min-h-16 w-full gap-4 px-6 py-4 border-b border-solid max-md:px-5"
            >
              <div
                className="justify-center items-center border border-[color:var(--Stroke-Base,#EAECF0)] self-stretch flex min-h-8 w-8 h-8 bg-[#FAFAFC] my-auto rounded-[128px] border-solid"
              >
                <img
                  src={item.institution.avatar}
                  className="aspect-[1] object-contain w-5 self-stretch my-auto"
                  alt="Institution avatar"
                />
              </div>
              <div
                className="text-[#252525] self-stretch text-[15px] font-semibold leading-none my-auto"
              >
                {item.institution.name}
              </div>
            </div>
          ))}
        </div>
        
        <div
          className="text-[15px] text-[#68727D] font-medium leading-none w-[148px]"
        >
          <div
            className="items-center border-b-[color:var(--Stroke-Base,#EAECF0)] flex min-h-11 w-full gap-4 text-[13px] leading-none bg-[#FAFAFC] px-6 py-[13px] border-b border-solid max-md:px-5"
          >
            <div
              className="text-[#68727D] self-stretch gap-1 my-auto"
            >
              Total Farmers
            </div>
          </div>
          
          {portfolioData.map((item, index) => (
            <div
              key={`farmers-${index}`}
              className="items-center border-b-[color:var(--Stroke-Base,#EAECF0)] flex min-h-16 w-full gap-4 text-sm text-[#68727D] leading-none px-6 py-[22px] border-b border-solid max-md:px-5"
            >
              <div
                className="self-stretch my-auto"
              >
                {item.totalFarmers}
              </div>
            </div>
          ))}
        </div>
        
        <div
          className="text-[15px] text-[#68727D] font-medium leading-none w-[164px]"
        >
          <div
            className="items-center border-b-[color:var(--Stroke-Base,#EAECF0)] flex min-h-11 w-full gap-4 text-[13px] leading-none bg-[#FAFAFC] pl-6 pr-[21px] py-[13px] border-b border-solid max-md:px-5"
          >
            <div
              className="text-[#68727D] self-stretch gap-1 my-auto"
            >
              Total Insured Land 
            </div>
          </div>
          
          {portfolioData.map((item, index) => (
            <div
              key={`land-${index}`}
              className="items-center border-b-[color:var(--Stroke-Base,#EAECF0)] flex min-h-16 w-full gap-4 text-sm text-[#68727D] whitespace-nowrap leading-none px-6 py-[22px] border-b border-solid max-md:px-5"
            >
              <div
                className="self-stretch my-auto"
              >
                {item.totalInsuredLand}
              </div>
            </div>
          ))}
        </div>
        
        <div
          className="text-[15px] text-[#68727D] font-medium leading-none w-[156px]"
        >
          <div
            className="items-center border-b-[color:var(--Stroke-Base,#EAECF0)] flex min-h-11 w-full gap-4 text-[13px] leading-none bg-[#FAFAFC] pl-6 pr-[15px] py-[13px] border-b border-solid max-md:pl-5"
          >
            <div
              className="text-[#68727D] self-stretch gap-1 my-auto"
            >
              Financial Exposure
            </div>
          </div>
          
          {portfolioData.map((item, index) => (
            <div
              key={`exposure-${index}`}
              className="items-center border-b-[color:var(--Stroke-Base,#EAECF0)] flex min-h-16 w-full gap-4 text-sm whitespace-nowrap leading-none px-6 py-[22px] border-b border-solid max-md:px-5"
            >
              <div
                className="text-[#68727D] self-stretch my-auto"
              >
                {item.financialExposure}
              </div>
            </div>
          ))}
        </div>
        
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3c9b89810e51fea3eb1cdb9b5c8a8c0eddb9f75?placeholderIfAbsent=true"
          className="aspect-[0.16] object-contain w-[77px] shrink-0"
          alt="Table decoration"
        />
      </div>
      
      <div
        className="flex w-full flex-col items-stretch text-sm text-[#68727D] font-medium leading-none justify-center px-6 py-3 max-md:max-w-full max-md:px-5"
      >
        <div
          className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full"
        >
          <div
            className="justify-center items-center self-stretch flex min-h-10 gap-1.5 whitespace-nowrap pr-[var(--Main-System-16px,] pl-[var(--Main-System-16px,] my-auto py-[12px)] rounded-[128px]"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d383312f4297c7c8e887a8c835b5a2fe7e2bf9?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Previous"
            />
            <div
              className="text-[#68727D] self-stretch my-auto"
            >
              Prev
            </div>
          </div>
          <div
            className="text-[#68727D] self-stretch min-h-10 my-auto rounded-[128px]"
          >
            Page 1 to 8
          </div>
          <div
            className="justify-center items-center self-stretch flex min-h-10 gap-1.5 whitespace-nowrap pr-[var(--Main-System-16px,] pl-[var(--Main-System-16px,] my-auto py-[12px)] rounded-[128px]"
          >
            <div
              className="text-[#68727D] self-stretch my-auto"
            >
              Next
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ce50ae31155d54363ffd3679abd7670c65ebeed?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTable;
