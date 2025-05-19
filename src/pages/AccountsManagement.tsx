import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import AppLayout from "@/components/layout/AppLayout";
import { Filter, Plus, Search } from "lucide-react";

// Dummy data for the accounts
const accountsData = [
  {
    name: "Ahmed Hassan",
    email: "a.hassan@agribank.com",
    institution: "Agricultural Bank of Sudan",
    location: "Khartoum, Sudan",
    position: "Senior Risk Analyst",
    permissions: "Full",
    lastLogin: "03.03.2025"
  },
  {
    name: "Sarah Mohamed",
    email: "s.mohamed@fcbank.com",
    institution: "Farmers Cooperative Bank",
    location: "Al-Jazeera, Sudan",
    position: "Portfolio Manager",
    permissions: "Partial",
    lastLogin: "03.03.2025"
  },
  {
    name: "Karim Ali",
    email: "k.ali@rdb.com",
    institution: "Rural Development Bank",
    location: "River Nile, Sudan",
    position: "Risk Assessment Officer",
    permissions: "View",
    lastLogin: "03.03.2025"
  },
  {
    name: "Fatima Ibrahim",
    email: "f.ibrahim@nab.com",
    institution: "National Agricultural Bank",
    location: "North Kordofan, Sudan",
    position: "Senior Analyst",
    permissions: "Full",
    lastLogin: "03.03.2025"
  },
  {
    name: "Omar Khalil",
    email: "o.khalil@microfi.com",
    institution: "Microfinance Initiative",
    location: "White Nile, Sudan",
    position: "Risk Manager",
    permissions: "Partial",
    lastLogin: "03.03.2025"
  },
  {
    name: "Layla Ahmed",
    email: "l.ahmed@rfb.com",
    institution: "Regional Farmers Bank",
    location: "Kassala, Sudan",
    position: "Data Analyst",
    permissions: "View",
    lastLogin: "03.03.2025"
  },
  {
    name: "Youssef Mahmoud",
    email: "y.mahmoud@acu.com",
    institution: "Agricultural Credit Union",
    location: "Red Sea, Sudan",
    position: "Portfolio Analyst",
    permissions: "Partial",
    lastLogin: "03.03.2025"
  }
];

const AccountsManagement: React.FC = () => {
  return (
    <AppLayout 
      title="Accounts Management" 
      subtitle="Accounts Overview"
      actionButton={
        <Button className="bg-[#83C541] hover:bg-[#6fa32e] flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Account
        </Button>
      }
    >
      {/* Search and Filter */}
      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search names, IDs and more.." className="pl-10" />
        </div>
        
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
          <span className="text-xs">▼</span>
        </Button>
      </div>
      
      {/* Accounts Table */}
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-semibold">Account's List</h2>
          <button className="w-6 h-6 text-gray-400 hover:text-gray-600">
            •••
          </button>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Admin Name <span className="text-xs">▼</span></TableHead>
              <TableHead>Institution <span className="text-xs">▼</span></TableHead>
              <TableHead>Location <span className="text-xs">▼</span></TableHead>
              <TableHead>Position <span className="text-xs">▼</span></TableHead>
              <TableHead>Permissions <span className="text-xs">▼</span></TableHead>
              <TableHead>Last Login <span className="text-xs">▼</span></TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accountsData.map((account, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">
                  <input type="checkbox" className="rounded" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      👤
                    </div>
                    <div>
                      <div>{account.name}</div>
                      <div className="text-xs text-gray-500">{account.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{account.institution}</TableCell>
                <TableCell>{account.location}</TableCell>
                <TableCell>{account.position}</TableCell>
                <TableCell>
                  <span 
                    className={`px-2 py-1 text-xs rounded-full ${
                      account.permissions === "Full" 
                        ? "bg-green-50 text-green-700" 
                        : account.permissions === "Partial"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {account.permissions}
                  </span>
                </TableCell>
                <TableCell>{account.lastLogin}</TableCell>
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
    </AppLayout>
  );
};

export default AccountsManagement;