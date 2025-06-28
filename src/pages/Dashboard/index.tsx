import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Mail,
  PlusCircle,
  BarChart3,
  Download,
  Zap
} from 'lucide-react';
import StatsCard from '../../components/StatsCard';
import QuizCard from '../../components/QuizCard';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Leads Generated', value: '2,847', change: '+12.5%', icon: Users, positive: true },
    { title: 'Active Quizzes', value: '8', change: '+2 this month', icon: Target, positive: true },
    { title: 'Conversion Rate', value: '68.4%', change: '+5.2%', icon: TrendingUp, positive: true },
    { title: 'Email Sequences', value: '12', change: '4 active', icon: Mail, positive: true },
  ];

  const recentQuizzes = [
    {
      title: 'Marketing Strategy Assessment',
      responses: 234,
      conversionRate: 72,
      status: 'active',
      lastUpdated: '2 hours ago'
    },
    {
      title: 'Business Growth Readiness',
      responses: 189,
      conversionRate: 65,
      status: 'active',
      lastUpdated: '1 day ago'
    },
    {
      title: 'Sales Funnel Optimizer',
      responses: 156,
      conversionRate: 78,
      status: 'draft',
      lastUpdated: '3 days ago'
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back! Here's what's happening with your lead generation.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Link
            to="/builder"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Quiz
          </Link>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Quizzes */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Quizzes</h2>
                <Link 
                  to="/analytics" 
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  View all
                </Link>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {recentQuizzes.map((quiz, index) => (
                <QuizCard key={index} {...quiz} />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Insights */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/builder"
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="bg-primary-100 p-2 rounded-lg group-hover:bg-primary-200 transition-colors duration-200">
                  <PlusCircle className="h-5 w-5 text-primary-600" />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Create New Quiz</p>
                  <p className="text-sm text-gray-500">Build a lead generation quiz</p>
                </div>
              </Link>
              <Link
                to="/analytics"
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="bg-secondary-100 p-2 rounded-lg group-hover:bg-secondary-200 transition-colors duration-200">
                  <BarChart3 className="h-5 w-5 text-secondary-600" />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">View Analytics</p>
                  <p className="text-sm text-gray-500">Deep dive into performance</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Platform Benefits */}
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
            <div className="flex items-center mb-3">
              <Zap className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-semibold">Platform Benefits</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                One-time license fee
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                Advanced lead segmentation
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                White-label ready
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                Seamless integrations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;