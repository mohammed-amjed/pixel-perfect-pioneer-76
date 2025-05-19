
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import Dashboard from "./Dashboard";

const Index: React.FC = () => {
  return (
    <AppLayout 
      title="Dashboard" 
      subtitle="Here's your rundown for today"
      breadcrumbs={[
        { label: "Home", link: "/" }
      ]}
    >
      <Dashboard />
    </AppLayout>
  );
};

export default Index;
