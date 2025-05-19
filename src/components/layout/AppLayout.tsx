
import React from "react";
import Sidebar from "../dashboard/Sidebar";
import { Link, useLocation } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; link?: string }[];
  actionButton?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ 
  children, 
  title, 
  subtitle, 
  breadcrumbs = [],
  actionButton
}) => {
  const location = useLocation();
  
  return (
    <div className="flex h-screen w-full">
      <div className="w-60 shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto bg-gray-50">
        <div className="p-6">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div className="flex items-center gap-2 text-sm mb-4">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="text-gray-400">›</span>}
                  {crumb.link ? (
                    <Link 
                      to={crumb.link} 
                      className={`${
                        location.pathname === crumb.link 
                          ? "text-[#83C541]" 
                          : "text-gray-600 hover:text-[#83C541]"
                      }`}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#83C541]">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
          
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
            </div>
            {actionButton && (
              <div>
                {actionButton}
              </div>
            )}
          </div>
          
          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
