import React from "react";

interface Activity {
  username: string;
  description: string;
  timestamp: string;
  icon?: string;
  type?: 'update' | 'add' | 'generate' | 'modify';
}

const ActivityCard: React.FC = () => {
  // Sample activities
  const activities: Activity[] = [
    {
      username: "Ahmed Hassan",
      description: "Updated risk assessment for Farm ID #F123",
      timestamp: "2 hours ago",
      type: 'update',
      icon: "📊"
    },
    {
      username: "Sarah Mohamed",
      description: "Added new farmer profile in Al-Jazeera region",
      timestamp: "4 hours ago",
      type: 'add',
      icon: "👨‍🌾"
    },
    {
      username: "Karim Ali",
      description: "Generated monthly risk report for March 2025",
      timestamp: "5 hours ago",
      type: 'generate',
      icon: "📄"
    },
    {
      username: "Fatima Ibrahim",
      description: "Modified land parameters for Farm ID #F456",
      timestamp: "1 day ago",
      type: 'modify',
      icon: "🌱"
    }
  ];

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'update':
        return 'bg-blue-50';
      case 'add':
        return 'bg-green-50';
      case 'generate':
        return 'bg-purple-50';
      case 'modify':
        return 'bg-orange-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#EAECF0] shadow-sm overflow-hidden mt-6">
      <div className="px-5 py-4 border-b border-[#EAECF0] flex justify-between items-center">
        <h3 className="text-base font-semibold text-[#252525]">
          Latest Activity
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
        {activities.map((activity, index) => (
          <div
            key={index}
            className="p-4 flex items-start gap-3"
          >
            <div className={`w-8 h-8 rounded-full ${getBackgroundColor(activity.type)} flex items-center justify-center flex-shrink-0`}>
              {activity.icon}
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-[15px] font-semibold text-[#252525]">
                {activity.username}
              </h4>
              <p className="text-sm text-[#68727D] mt-1">
                {activity.description}
              </p>
              <p className="text-xs text-[#68727D] mt-1">
                {activity.timestamp}
              </p>
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

export default ActivityCard;