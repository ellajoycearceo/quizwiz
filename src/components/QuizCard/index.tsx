import React from 'react';
import { MoreVertical, Users, TrendingUp } from 'lucide-react';

interface QuizCardProps {
  title: string;
  responses: number;
  conversionRate: number;
  status: 'active' | 'draft' | 'paused';
  lastUpdated: string;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  title, 
  responses, 
  conversionRate, 
  status, 
  lastUpdated 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success-100 text-success-800';
      case 'draft':
        return 'bg-warning-100 text-warning-800';
      case 'paused':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
      <div className="flex-1">
        <div className="flex items-center space-x-3">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(status)}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        <div className="flex items-center space-x-6 mt-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {responses} responses
          </div>
          <div className="flex items-center">
            <TrendingUp className="h-4 w-4 mr-1" />
            {conversionRate}% conversion
          </div>
          <span>Updated {lastUpdated}</span>
        </div>
      </div>
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
        <MoreVertical className="h-4 w-4 text-gray-400" />
      </button>
    </div>
  );
};

export default QuizCard;