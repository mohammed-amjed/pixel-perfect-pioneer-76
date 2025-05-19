
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import AppLayout from "@/components/layout/AppLayout";
import { Search } from "lucide-react";

const FarmerProfile: React.FC = () => {
  // Dummy farmer data
  const farmer = {
    id: "F12345",
    name: "Farmer's Name",
    status: "Active",
    location: "Al-Jazeera State, Sudan",
    phone: "+249 912355118",
    policyActivationDate: "03.03.2025",
    landSize: "4,000 m²",
    riskLevel: "Moderate",
    weatherStation: "Yes",
    notes: [
      {
        username: "Username",
        content: "Vel nunc ut pulvinar eget elit enim neque, in sed. Facilisi ultrices in sed vitae, dolor. Nibh at et eget massa in orci, scelerisque tempor. Penatibus fermentum in in id dolor faucibus felis ac eget",
        date: "11.03.2025"
      }
    ]
  };
  
  // Dummy satellite data
  const satelliteData = {
    irrigationType: "Drip",
    soilType: "5×6.2m²",
    cropType: "2020",
    riskLevel: 12,
    windSpeed: "12 km/h",
    temperature: "40C°",
    precipitation: "8 mm",
    humidity: "65%"
  };

  return (
    <AppLayout
      title="Framer's Profile"
      subtitle="Farmer's personal and land information"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Financial Institutions", link: "/" },
        { label: "Institution X", link: "/" },
        { label: "Farmer's Profile" }
      ]}
      actionButton={
        <div className="flex gap-4">
          <Button variant="outline">Edit Policy Status</Button>
          <Button className="bg-[#83C541] hover:bg-[#6fa32e]">Download Report</Button>
        </div>
      }
    >
      {/* Farmer Info Card */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
              👨‍🌾
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-xl font-semibold">{farmer.name}</h2>
                <div className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded">
                  {farmer.status}
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span>📍</span>
                  <span>{farmer.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📞</span>
                  <span>{farmer.phone}</span>
                </div>
              </div>
            </div>
            
            <div className="text-red-500 cursor-pointer">
              ⚠️
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-6 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-50 rounded-md flex items-center justify-center">
                📅
              </div>
              <div>
                <div className="text-sm text-gray-500">Policy Activation Date</div>
                <div className="font-medium">{farmer.policyActivationDate}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-50 rounded-md flex items-center justify-center">
                📏
              </div>
              <div>
                <div className="text-sm text-gray-500">Land Size</div>
                <div className="font-medium">{farmer.landSize}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-50 rounded-md flex items-center justify-center">
                ⚠️
              </div>
              <div>
                <div className="text-sm text-gray-500">Risk Level</div>
                <div className="font-medium">{farmer.riskLevel}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center">
                🌤️
              </div>
              <div>
                <div className="text-sm text-gray-500">Weather Station</div>
                <div className="font-medium">{farmer.weatherStation}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Notes Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Notes</h2>
          <Button variant="outline" size="sm">
            Add a Note
          </Button>
        </div>
        
        {farmer.notes.map((note, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-800">
                🌱
              </div>
              <span className="font-medium">{note.username}</span>
            </div>
            <p className="text-gray-600 mb-2">{note.content}</p>
            <div className="text-right text-xs text-gray-500">{note.date}</div>
          </div>
        ))}
      </div>
      
      {/* Farm Information */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Farm Information</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Farm #</span>
            <Button variant="ghost" size="icon">⬅️</Button>
            <Button variant="ghost" size="icon">➡️</Button>
            <Button variant="ghost" size="icon">⋯</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Satellite Snapshots */}
          <div className="col-span-1 bg-white p-4 rounded-lg border">
            <h3 className="font-medium mb-1">Satellite Snapshots</h3>
            <p className="text-xs text-gray-500 mb-4">Historical satellite snapshots</p>
            
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="11.03.2025" className="pl-10" />
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>🗓️</span>
              <span>11.03.2025 - 15.03.2025</span>
            </div>
            
            {/* Satellite images */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="mb-4 relative">
                <div className="h-36 bg-gray-200 rounded-lg mb-1"></div>
                <div className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 rounded-md text-xs">
                  12.03.2025
                </div>
              </div>
            ))}
          </div>
          
          {/* Map and Data */}
          <div className="col-span-2">
            <div className="bg-gray-200 h-96 rounded-lg mb-6 relative">
              <div className="absolute top-2 right-2 flex gap-1">
                <button className="bg-white w-8 h-8 flex items-center justify-center rounded shadow">+</button>
                <button className="bg-white w-8 h-8 flex items-center justify-center rounded shadow">-</button>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-sm text-gray-500 mb-1">Irrigation Type</div>
                <div className="flex items-center gap-2">
                  <span>💧</span>
                  <span className="font-medium">{satelliteData.irrigationType}</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-sm text-gray-500 mb-1">Soil Type</div>
                <div className="flex items-center gap-2">
                  <span>🌱</span>
                  <span className="font-medium">{satelliteData.soilType}</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-sm text-gray-500 mb-1">Crop Type</div>
                <div className="flex items-center gap-2">
                  <span>🌾</span>
                  <span className="font-medium">{satelliteData.cropType}</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-sm text-gray-500 mb-1">Risk Level</div>
                <div className="flex items-center gap-2">
                  <span>⚠️</span>
                  <span className="font-medium">{satelliteData.riskLevel}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-sm text-gray-500 mb-1">Wind Speed</div>
                <div className="flex items-center gap-2">
                  <span>🌬️</span>
                  <span className="font-medium">{satelliteData.windSpeed}</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-sm text-gray-500 mb-1">Temperature</div>
                <div className="flex items-center gap-2">
                  <span>🌡️</span>
                  <span className="font-medium">{satelliteData.temperature}</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-sm text-gray-500 mb-1">Precipitation</div>
                <div className="flex items-center gap-2">
                  <span>🌧️</span>
                  <span className="font-medium">{satelliteData.precipitation}</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-sm text-gray-500 mb-1">Humidity</div>
                <div className="flex items-center gap-2">
                  <span>💧</span>
                  <span className="font-medium">{satelliteData.humidity}</span>
                </div>
              </div>
            </div>
            
            {/* Vegetation Index */}
            <div className="bg-white p-4 rounded-lg border mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Vegetation Index</h3>
                <Button variant="ghost" size="icon">⋯</Button>
              </div>
              
              <div className="h-48 bg-gray-100 rounded flex items-center justify-center mb-4">
                <p className="text-gray-500">Vegetation Index Chart</p>
              </div>
              
              <div className="flex justify-end">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">NDVI Value</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-medium mb-4">Vegetation health change over time</h3>
              <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Vegetation Health Chart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FarmerProfile;
