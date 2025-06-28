import React, { useState } from 'react';
import { 
  Plus, 
  Save, 
  Eye, 
  Settings, 
  Palette, 
  Target,
  ChevronDown,
  GripVertical,
  X
} from 'lucide-react';
import QuestionEditor from '../../components/QuestionEditor';
import ResultsEditor from '../../components/ResultsEditor';

const QuizBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'questions' | 'results' | 'design' | 'settings'>('questions');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: 'multiple-choice',
      question: 'What\'s your primary business goal?',
      options: ['Increase revenue', 'Expand market reach', 'Improve efficiency', 'Build brand awareness']
    }
  ]);

  const tabs = [
    { id: 'questions', label: 'Questions', icon: Plus },
    { id: 'results', label: 'Results & Segments', icon: Target },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quiz Builder</h1>
          <p className="mt-2 text-gray-600">Create engaging lead generation quizzes with advanced segmentation</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
            <Save className="mr-2 h-4 w-4" />
            Save Quiz
          </button>
        </div>
      </div>

      {/* Quiz Title */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quiz Title</label>
            <input
              type="text"
              defaultValue="Marketing Strategy Assessment"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              rows={3}
              defaultValue="Discover the perfect marketing strategy for your business with our comprehensive assessment quiz."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'questions' && <QuestionEditor questions={questions} setQuestions={setQuestions} />}
          {activeTab === 'results' && <ResultsEditor />}
          {activeTab === 'design' && <DesignEditor />}
          {activeTab === 'settings' && <SettingsEditor />}
        </div>
      </div>
    </div>
  );
};

// Design Editor Component
const DesignEditor: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Quiz Design & Branding</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg border border-gray-300"></div>
              <input
                type="text"
                defaultValue="#2563EB"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Font</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option>Inter (Recommended)</option>
              <option>Arial</option>
              <option>Helvetica</option>
              <option>Georgia</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="text-gray-400">
                <Plus className="mx-auto h-8 w-8 mb-2" />
                Upload your logo
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Preview</h4>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg mx-auto mb-2"></div>
              <h5 className="font-semibold text-gray-900">Your Quiz Title</h5>
            </div>
            <div className="space-y-3">
              <div className="p-3 border border-gray-200 rounded-lg">Sample Question</div>
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings Editor Component
const SettingsEditor: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Quiz Settings</h3>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lead Capture</label>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-gray-600">Require email address</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-gray-600">Require phone number</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-gray-600">Require name</span>
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Privacy & Compliance</label>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-gray-600">GDPR compliant</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-gray-600">Show privacy policy link</span>
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Integration</label>
          <select className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            <option>Select email service...</option>
            <option>Mailchimp</option>
            <option>ConvertKit</option>
            <option>ActiveCampaign</option>
            <option>Custom webhook</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default QuizBuilder;