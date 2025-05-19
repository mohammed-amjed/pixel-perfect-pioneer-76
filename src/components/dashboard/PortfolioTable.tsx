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
      institution: { 
        name: "Agricultural Bank of Sudan", 
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" 
      },
      totalFarmers: "12,450",
      totalInsuredLand: "156,856 m²",
      financialExposure: "$2,345,678"
    },
    {
      institution: { 
        name: "Farmers Cooperative Bank", 
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" 
      },
      totalFarmers: "8,723",
      totalInsuredLand: "98,497 m²",
      financialExposure: "$1,876,543"
    },
    {
      institution: { 
        name: "Rural Development Bank", 
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" 
      },
      totalFarmers: "15,234",
      totalInsuredLand: "182,373 m²",
      financialExposure: "$3,123,456"
    },
    {
      institution: { 
        name: "National Agricultural Bank", 
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" 
      },
      totalFarmers: "10,567",
      totalInsuredLand: "143,284 m²",
      financialExposure: "$2,654,789"
    },
    {
      institution: { 
        name: "Microfinance Initiative", 
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" 
      },
      totalFarmers: "5,892",
      totalInsuredLand: "76,583 m²",
      financialExposure: "$987,654"
    },
    {
      institution: { 
        name: "Regional Farmers Bank", 
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" 
      },
      totalFarmers: "7,345",
      totalInsuredLand: "89,583 m²",
      financialExposure: "$1,543,210"
    },
    {
      institution: { 
        name: "Agricultural Credit Union", 
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c9fb13fafb8be2b49dd870b4d959307124e6292?placeholderIfAbsent=true" 
      },
      totalFarmers: "6,789",
      totalInsuredLand: "92,583 m²",
      financialExposure: "$1,234,567"
    }
  ];

  return (
    <div className="border border-[color:var(--Stroke-Base,#EAECF0)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] w-full overflow-hidden bg-white mt-6 rounded-2xl border-solid">
      <div className="relative w-full px-6 py-4">
        <div className="text-[#252525] text-base font-semibold">
          Portfolio Overview
        </div>
        <div className="absolute right-5 bottom-4">
          <button className="w-6 h-6 flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd47db5fdb0eb8d4774ddab0e48f7d9b884df3f1?placeholderIfAbsent=true"
              className="w-full h-full"
              alt="Options"
            />
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#FAFAFC] border-b border-[#EAECF0]">
            <tr>
              <th className="text-left py-3 px-6 text-[13px] text-[#68727D] font-medium">
                Institution
              </th>
              <th className="text-left py-3 px-6 text-[13px] text-[#68727D] font-medium">
                Total Farmers
              </th>
              <th className="text-left py-3 px-6 text-[13px] text-[#68727D] font-medium">
                Total Insured Land
              </th>
              <th className="text-left py-3 px-6 text-[13px] text-[#68727D] font-medium">
                Financial Exposure
              </th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.map((item, index) => (
              <tr key={index} className="border-b border-[#EAECF0]">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-[#EAECF0] bg-[#FAFAFC] flex items-center justify-center">
                      <img
                        src={item.institution.avatar}
                        className="w-5 h-5"
                        alt="Institution avatar"
                      />
                    </div>
                    <span className="text-[15px] font-semibold text-[#252525]">
                      {item.institution.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-[#68727D]">
                  {item.totalFarmers}
                </td>
                <td className="py-4 px-6 text-sm text-[#68727D]">
                  {item.totalInsuredLand}
                </td>
                <td className="py-4 px-6 text-sm text-[#68727D]">
                  {item.financialExposure}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center px-6 py-3 text-sm text-[#68727D] font-medium">
        <button className="flex items-center gap-1.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d383312f4297c7c8e887a8c835b5a2fe7e2bf9?placeholderIfAbsent=true"
            className="w-4 h-4"
            alt="Previous"
          />
          <span>Prev</span>
        </button>
        <span>Page 1 to 8</span>
        <button className="flex items-center gap-1.5">
          <span>Next</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ce50ae31155d54363ffd3679abd7670c65ebeed?placeholderIfAbsent=true"
            className="w-4 h-4"
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
};

export default PortfolioTable;