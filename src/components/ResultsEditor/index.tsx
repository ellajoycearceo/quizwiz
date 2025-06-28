import React, { useState } from 'react';
import { Plus, Target, Mail, Settings } from 'lucide-react';

const ResultsEditor: React.FC = () => {
  const [segments] = useState([
    {
      id: 1,
      name: 'Growth-Focused Entrepreneurs',
      description: 'Business owners looking to scale rapidly',
      color: '#10B981',
      criteria: 'High growth intention + Revenue focus',
    },
    {
      id: 2,
      name: 'Efficiency Optimizers',
      description: 'Companies focused on streamlining operations',
      color: '#3B82F6',
      criteria: 'Efficiency focus + Process improvement',
    },
    {
      id: 3,
      name: 'Brand Builders',
      description: 'Businesses prioritizing brand awareness',
      color: '#8B5CF6',
      criteria: 'Brand awareness + Market reach',
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Lead Segments & Results</h3>
          <p className="text-sm text-gray-600 mt-1">Define how quiz responses map to lead categories</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
          <Plus className="mr-2 h-4 w-4" />
          Add Segment
        </button>
      </div>

      <div className="space-y-4">
        {segments.map((segment) => (
          <div key={segment.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div
                className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                style={{ backgroundColor: segment.color }}
              ></div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <input
                      type="text"
                      defaultValue={segment.name}
                      className="text-lg font-semibold text-gray-900 bg-transparent border-none p-0 focus:ring-0 focus:outline-none"
                    />
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        ID: {segment.id}
                      </span>
                    </div>
                  </div>
                  <textarea
                    defaultValue={segment.description}
                    rows={2}
                    className="w-full text-gray-600 bg-transparent border-none p-0 resize-none focus:ring-0 focus:outline-none"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Segmentation Criteria</label>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">{segment.criteria}</p>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2">
                        Edit Logic
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Result Page Content</label>
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Result page title..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                      <textarea
                        placeholder="Personalized message for this segment..."
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                      <Mail className="mr-1 h-4 w-4" />
                      Email Sequence
                    </button>
                    <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                      <Target className="mr-1 h-4 w-4" />
                      Follow-up Actions
                    </button>
                    <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                      <Settings className="mr-1 h-4 w-4" />
                      Advanced Settings
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    Last updated: 2 days ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Smart Segmentation</h4>
        <p className="text-sm text-blue-700">
          Our platform automatically segments leads based on their quiz responses using predefined logic. 
          Each segment can have unique result pages, email sequences, and follow-up actions for maximum personalization.
        </p>
      </div>
    </div>
  );
};

export default ResultsEditor;