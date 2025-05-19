import React, { useState } from "react";
import { Link } from "react-router-dom";
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

// Type definitions for our data
interface Farmer {
  id: string;
  name: string;
  email: string;
  landSize: string;
  riskLevel: "Low" | "Moderate" | "High";
  lastViewed: string;
  lastUpdate: string;
}

interface Farm {
  id: string;
  name: string;
  email: string;
  soilType: string;
  cropType: string;
  amount: string;
  landSize: string;
  date: string;
}

interface Stats {
  count: number | string;
  growth: string;
}

interface StatsData {
  farmers: Stats;
  policies: Stats;
  claims: Stats;
  land: Stats;
}

// Enhanced dummy data for farmers
const farmersData: Farmer[] = [
  {
    id: "F326891",
    name: "Ahmed Hassan",
    email: 'a.hassan@agrimail.com',
    landSize: "4,500 m²",
    riskLevel: "Low",
    lastViewed: "15.03.2025",
    lastUpdate: "14.03.2025"
  },
  {
    id: "F326892",
    name: "Sarah Mohamed",
    email: 's.mohamed@agrimail.com',
    landSize: "3,200 m²",
    riskLevel: "Moderate",
    lastViewed: "14.03.2025",
    lastUpdate: "13.03.2025"
  },
  {
    id: "F326893",
    name: "Karim Ali",
    email: 'k.ali@agrimail.com',
    landSize: "6,800 m²",
    riskLevel: "High",
    lastViewed: "13.03.2025",
    lastUpdate: "12.03.2025"
  },
  {
    id: "F326894",
    name: "Fatima Ibrahim",
    email: 'f.ibrahim@agrimail.com',
    landSize: "2,900 m²",
    riskLevel: "Low",
    lastViewed: "12.03.2025",
    lastUpdate: "11.03.2025"
  },
  {
    id: "F326895",
    name: "Omar Khalil",
    email: 'o.khalil@agrimail.com',
    landSize: "5,100 m²",
    riskLevel: "Moderate",
    lastViewed: "11.03.2025",
    lastUpdate: "10.03.2025"
  },
  {
    id: "F326896",
    name: "Layla Ahmed",
    email: 'l.ahmed@agrimail.com',
    landSize: "3,700 m²",
    riskLevel: "High",
    lastViewed: "10.03.2025",
    lastUpdate: "09.03.2025"
  },
  {
    id: "F326897",
    name: "Youssef Mahmoud",
    email: 'y.mahmoud@agrimail.com',
    landSize: "4,200 m²",
    riskLevel: "Low",
    lastViewed: "09.03.2025",
    lastUpdate: "08.03.2025"
  }
];

// Enhanced dummy data for farms
const farmsData: Farm[] = [
  {
    id: "FR001",
    name: "Ahmed Hassan",
    email: 'a.hassan@agrimail.com',
    soilType: "Loamy",
    cropType: "Wheat",
    amount: "$3,450",
    landSize: "4,500 m²",
    date: "15.03.2025"
  },
  {
    id: "FR002",
    name: "Sarah Mohamed",
    email: 's.mohamed@agrimail.com',
    soilType: "Sandy",
    cropType: "Cotton",
    amount: "$2,800",
    landSize: "3,200 m²",
    date: "14.03.2025"
  },
  {
    id: "FR003",
    name: "Karim Ali",
    email: 'k.ali@agrimail.com',
    soilType: "Clay",
    cropType: "Sorghum",
    amount: "$4,200",
    landSize: "6,800 m²",
    date: "13.03.2025"
  },
  {
    id: "FR004",
    name: "Fatima Ibrahim",
    email: 'f.ibrahim@agrimail.com',
    soilType: "Loamy",
    cropType: "Sunflower",
    amount: "$2,100",
    landSize: "2,900 m²",
    date: "12.03.2025"
  },
  {
    id: "FR005",
    name: "Omar Khalil",
    email: 'o.khalil@agrimail.com',
    soilType: "Sandy",
    cropType: "Peanuts",
    amount: "$3,750",
    landSize: "5,100 m²",
    date: "11.03.2025"
  },
  {
    id: "FR006",
    name: "Layla Ahmed",
    email: 'l.ahmed@agrimail.com',
    soilType: "Clay",
    cropType: "Sesame",
    amount: "$2,950",
    landSize: "3,700 m²",
    date: "10.03.2025"
  },
  {
    id: "FR007",
    name: "Youssef Mahmoud",
    email: 'y.mahmoud@agrimail.com',
    soilType: "Loamy",
    cropType: "Onions",
    amount: "$3,200",
    landSize: "4,200 m²",
    date: "09.03.2025"
  }
];

// Enhanced statistics data
const statsData: StatsData = {
  farmers: { count: 1247, growth: "+3.2% monthly growth" },
  policies: { count: 892, growth: "+2.8% monthly growth" },
  claims: { count: 156, growth: "+1.5% monthly growth" },
  land: { count: "42,600 m²", growth: "+4.1% monthly growth" }
};

const InstituteReports: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"portfolio" | "reports">("portfolio");
  
  const handleRowClick = (id: string) => {
    if (typeof id === 'string') {
      window.location.href = `/farmer/${id}`;
    }
  };
  
  return (
    <AppLayout 
      title="Institute Reports" 
      subtitle="Comprehensive overview of agricultural portfolio and analytics"
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
                {farmersData.map((farmer) => (
                  <TableRow 
                    key={farmer.id}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleRowClick(farmer.id)}
                  >
                    <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
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
                    <TableCell onClick={(e) => e.stopPropagation()}>
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
                {farmsData.map((farm) => (
                  <TableRow 
                    key={farm.id}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleRowClick(farm.id)}
                  >
                    <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
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
                    <TableCell onClick={(e) => e.stopPropagation()}>
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