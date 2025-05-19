import React from "react";

interface Notification {
  title: string;
  description: string;
  isNew?: boolean;
  timestamp?: string;
  icon?: string;
  type?: 'warning' | 'info' | 'success' | 'error';
}

const NotificationCard: React.FC = () => {
  // Sample notifications
  const notifications: Notification[] = [
    {
      title: "High Risk Alert",
      description: "Farm ID #F789 shows critical drought risk levels",
      isNew: true,
      timestamp: "10 minutes ago",
      type: 'warning',
      icon: "⚠️"
    },
    {
      title: "Weather Warning",
      description: "Potential drought conditions detected in Al-Jazeera region",
      timestamp: "1 hour ago",
      type: 'warning',
      icon: "🌡️"
    },
    {
      title: "New Policy Added",
      description: "Agricultural Bank added 150 new farmer policies",
      timestamp: "2 hours ago",
      type: 'success',
      icon: "📄"
    },
    {
      title: "System Update",
      description: "Risk assessment model v2.1 deployed successfully",
      timestamp: "3 hours ago",
      type: 'info',
      icon: "🔄"
    }
  ];

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-orange-50';
      case 'success':
        return 'bg-green-50';
      case 'error':
        return 'bg-red-50';
      default:
        return 'bg-blue-50';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#EAECF0] shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-[#EAECF0] flex justify-between items-center">
        <h3 className="text-base font-semibold text-[#252525]">
          Notifications
        </h3>
        <button className="w-6 h-6 flex items-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd47db5fdb0eb8d4774ddab0e48f7d9b884df3f1?placeholderIfAbsent=true"
            className="w-full h-full"
            alt="Options"
          />
        </button>
      </div>
      
      <div className="divide-y divide-[#EAECF0]">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="p-4 flex items-start gap-3"
          >
            <div className={`w-8 h-8 rounded-full ${getBackgroundColor(notification.type)} flex items-center justify-center flex-shrink-0`}>
              {notification.icon}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-[15px] font-semibold text-[#252525] truncate">
                  {notification.title}
                </h4>
                {notification.isNew && (
                  <span className="px-2 py-1 text-xs bg-[rgba(239,162,47,0.10)] text-[#EFA22F] rounded-full">
                    New
                  </span>
                )}
              </div>
              <p className="text-sm text-[#68727D] mt-1">
                {notification.description}
              </p>
              {notification.timestamp && (
                <p className="text-xs text-[#68727D] mt-1">
                  {notification.timestamp}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-5 py-4 border-t border-[#EAECF0] flex justify-between items-center">
        <button className="text-sm font-medium text-[#323539] hover:text-[#83C541] transition-colors">
          View All
        </button>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ccc255a3a91ff985dc0285627abb524d9c59ec0?placeholderIfAbsent=true"
          className="w-5 h-5"
          alt="Arrow right"
        />
      </div>
    </div>
  );
};

export default NotificationCard;