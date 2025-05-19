
import React, { useState } from "react";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppLayout from "@/components/layout/AppLayout";
import { ArrowRight, Filter, Search } from "lucide-react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Dummy data for demonstration
const farmersData = Array.from({ length: 7 }, (_, i) => ({
  id: `#32689${i + 180}`,
  name: `Farmer Name`,
  email: 'username@mail.com',
  landSize: "4,000 m²",
  riskLevel: i % 3 === 0 ? "Low" : i % 3 === 1 ? "Moderate" : "High",
  lastViewed: "03.03.2025",
  lastUpdate: "03.03.2025"
}));

const farmsData = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  name: `Farmer Name`,
  email: 'username@mail.com',
  soilType: i % 3 === 0 ? "Loamy" : i % 3 === 1 ? "Sandy" : "Clay",
  cropType: ["Wheat", "Sorghum", "Cotton", "Sunflower", "Sesame", "Peanuts", "Onions"][i],
  amount: "$2,373",
  landSize: `${i % 2 === 0 ? "1,000" : "2,000"} m²`,
  date: "01.03.2025"
}));

const statsData = {
  farmers: { count: 123, growth: "+1% monthly growth" },
  policies: { count: 123, growth: "+1% monthly growth" },
  claims: { count: 123, growth: "+1% monthly growth" },
  land: { count: "4,000 m²", growth: "+1% monthly growth" }
};

const InstituteReports: React.FC = () => {
  const [activeTab, setActiveTab] = useState("portfolio");
  
  return (
    <AppLayout 
      title="Institute Reports" 
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      breadcrumbs={[
        { label: "Financial Institutions", link: "/" },
        { label: "Institute Reports" }
      ]}
      actionButton={
        <Button className="bg-[#83C541] hover:bg-[#6fa32e]">
          Generate Report
        </Button>
      }
    >
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="mb-6 border-b w-full bg-transparent p-0 h-auto justify-start">
          <TabsTrigger 
            value="portfolio" 
            className={`px-6 py-3 border-b-2 rounded-none ${
              activeTab === "portfolio" 
                ? "border-[#83C541] text-[#83C541]" 
                : "border-transparent"
            }`}
          >
            Portfolio
          </TabsTrigger>
          <TabsTrigger 
            value="reports" 
            className={`px-6 py-3 border-b-2 rounded-none ${
              activeTab === "reports" 
                ? "border-[#83C541] text-[#83C541]" 
                : "border-transparent"
            }`}
          >
            Reports
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="portfolio" className="mt-0">
          {/* Overview Statistics */}
          <div className="bg-white rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Overview</h2>
              <button className="w-6 h-6 text-gray-400 hover:text-gray-600">
                •••
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border-r pr-4">
                <div className="flex items-start">
                  <div className="mr-4 flex-1">
                    <div className="text-sm text-gray-500">Total Farmers</div>
                    <div className="text-2xl font-semibold">{statsData.farmers.count}</div>
                    <div className="text-xs text-green-500">{statsData.farmers.growth}</div>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-full">
                    🧑‍🌾
                  </div>
                </div>
              </div>
              
              <div className="border-r pr-4">
                <div className="flex items-start">
                  <div className="mr-4 flex-1">
                    <div className="text-sm text-gray-500">Total Policies</div>
                    <div className="text-2xl font-semibold">{statsData.policies.count}</div>
                    <div className="text-xs text-green-500">{statsData.policies.growth}</div>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-full">
                    📄
                  </div>
                </div>
              </div>
              
              <div className="border-r pr-4 mt-4">
                <div className="flex items-start">
                  <div className="mr-4 flex-1">
                    <div className="text-sm text-gray-500">Total Claims</div>
                    <div className="text-2xl font-semibold">{statsData.claims.count}</div>
                    <div className="text-xs text-green-500">{statsData.claims.growth}</div>
                  </div>
                  <div className="bg-red-50 p-2 rounded-full">
                    📝
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-start">
                  <div className="mr-4 flex-1">
                    <div className="text-sm text-gray-500">Total Land</div>
                    <div className="text-2xl font-semibold">{statsData.land.count}</div>
                    <div className="text-xs text-green-500">{statsData.land.growth}</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded-full">
                    🌱
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search" className="pl-10" />
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
              <span className="text-xs">▼</span>
            </Button>
          </div>
          
          {/* Portfolio Overview Table */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-lg font-semibold">Portfolio's Overview</h2>
              <button className="w-6 h-6 text-gray-400 hover:text-gray-600">
                •••
              </button>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Name <span className="text-xs">▼</span></TableHead>
                  <TableHead>Land Size <span className="text-xs">▼</span></TableHead>
                  <TableHead>Risk Level <span className="text-xs">▼</span></TableHead>
                  <TableHead>Farmer ID <span className="text-xs">▼</span></TableHead>
                  <TableHead>Last Viewed <span className="text-xs">▼</span></TableHead>
                  <TableHead>Last Image Update <span className="text-xs">▼</span></TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {farmersData.map((farmer, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">
                      <input type="checkbox" className="rounded" />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          🧑
                        </div>
                        <div>
                          <div>{farmer.name}</div>
                          <div className="text-xs text-gray-500">{farmer.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{farmer.landSize}</TableCell>
                    <TableCell>
                      <span 
                        className={`px-2 py-1 text-xs rounded-full ${
                          farmer.riskLevel === "Low" 
                            ? "bg-green-50 text-green-700" 
                            : farmer.riskLevel === "Moderate"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-red-50 text-red-700"
                        }`}
                      >
                        {farmer.riskLevel}
                      </span>
                    </TableCell>
                    <TableCell>{farmer.id}</TableCell>
                    <TableCell>{farmer.lastViewed}</TableCell>
                    <TableCell>{farmer.lastUpdate}</TableCell>
                    <TableCell>
                      <button className="w-6 h-6 text-gray-400 hover:text-gray-600">
                        •••
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="p-4 border-t">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <div className="flex items-center">
                      Page 1 to 8
                    </div>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-0">
          <div className="grid grid-cols-2 gap-6">
            {/* Risk Trends Chart */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Risk Trends</h2>
                <button className="w-6 h-6 text-gray-400 hover:text-gray-600">
                  •••
                </button>
              </div>
              
              <div className="h-64 bg-gray-50 flex items-center justify-center rounded">
                <p className="text-gray-500">Risk Chart Visualization</p>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-600">
                  % of risk against policies issued in a given year
                </div>
                <Button variant="link" className="text-[#83C541] flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Portfolio Risk Distribution */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Portfolio Risk Distribution</h2>
                <button className="w-6 h-6 text-gray-400 hover:text-gray-600">
                  •••
                </button>
              </div>
              
              <div className="h-64 bg-gray-50 flex items-center justify-center rounded">
                <p className="text-gray-500">Pie Chart Visualization</p>
              </div>
              
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Low</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-300"></div>
                  <span className="text-sm">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-700"></div>
                  <span className="text-sm">High</span>
                </div>
              </div>
              
              <div className="text-sm text-center mt-2 text-gray-600">
                Total of all risks portfolio
              </div>
            </div>
          </div>
          
          {/* Filter Section */}
          <div className="flex items-center gap-4 my-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search..." className="pl-10" />
            </div>
            
            <div className="flex-1 flex gap-2">
              <div className="flex-1">
                <div className="border rounded-md p-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Weather Station Data</span>
                  <span className="text-xs">▼</span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="border rounded-md p-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Crop Type</span>
                  <span className="text-xs">▼</span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="border rounded-md p-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Soil Type</span>
                  <span className="text-xs">▼</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Farm's Overview Table */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-lg font-semibold">Farm's Overview</h2>
              <button className="w-6 h-6 text-gray-400 hover:text-gray-600">
                •••
              </button>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Name <span className="text-xs">▼</span></TableHead>
                  <TableHead>Soil Type <span className="text-xs">▼</span></TableHead>
                  <TableHead>Crop Type <span className="text-xs">▼</span></TableHead>
                  <TableHead>Amount <span className="text-xs">▼</span></TableHead>
                  <TableHead>Land Size <span className="text-xs">▼</span></TableHead>
                  <TableHead>Date <span className="text-xs">▼</span></TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {farmsData.map((farm, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">
                      <input type="checkbox" className="rounded" />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          🧑
                        </div>
                        <div>
                          <div>{farm.name}</div>
                          <div className="text-xs text-gray-500">{farm.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{farm.soilType}</TableCell>
                    <TableCell>{farm.cropType}</TableCell>
                    <TableCell>{farm.amount}</TableCell>
                    <TableCell>{farm.landSize}</TableCell>
                    <TableCell>{farm.date}</TableCell>
                    <TableCell>
                      <button className="w-6 h-6 text-gray-400 hover:text-gray-600">
                        •••
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="p-4 border-t">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <div className="flex items-center">
                      Page 1 to 8
                    </div>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default InstituteReports;
