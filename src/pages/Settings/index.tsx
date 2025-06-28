import React, { useState } from 'react';
import { 
  Save, 
  Mail, 
  Database, 
  Palette, 
  Shield, 
  Key,
  Globe,
  Webhook,
  Download
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'integrations' | 'branding' | 'security'>('general');

  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'integrations', label: 'Integrations', icon: Database },
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">Configure your QuizWiz platform preferences</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </button>
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
          {activeTab === 'general' && <GeneralSettings />}
          {activeTab === 'integrations' && <IntegrationsSettings />}
          {activeTab === 'branding' && <BrandingSettings />}
          {activeTab === 'security' && <SecuritySettings />}
        </div>
      </div>
    </div>
  );
};

const GeneralSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              defaultValue="QuizWiz Solutions"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
            <input
              type="url"
              defaultValue="https://quizwiz.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
            <input
              type="email"
              defaultValue="contact@quizwiz.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (Central European Time)</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Export Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Export Format</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="export-format" value="csv" defaultChecked className="text-primary-600 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-gray-700">CSV</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="export-format" value="json" className="text-primary-600 focus:ring-primary-500" />
                <span className="ml-2 text-sm text-gray-700">JSON</span>
              </label>
            </div>
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
              <span className="ml-2 text-sm text-gray-700">Include lead segment information in exports</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const IntegrationsSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Marketing Platforms</h3>
        <div className="space-y-4">
          {[
            { name: 'Mailchimp', connected: true, icon: Mail },
            { name: 'ConvertKit', connected: false, icon: Mail },
            { name: 'ActiveCampaign', connected: false, icon: Mail },
          ].map((platform) => (
            <div key={platform.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className="bg-gray-100 p-2 rounded-lg mr-3">
                  <platform.icon className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{platform.name}</p>
                  <p className="text-sm text-gray-500">
                    {platform.connected ? 'Connected' : 'Not connected'}
                  </p>
                </div>
              </div>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  platform.connected
                    ? 'bg-error-100 text-error-700 hover:bg-error-200'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {platform.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">CRM & Project Management</h3>
        <div className="space-y-4">
          {[
            { name: 'ClickUp', connected: true, icon: Database },
            { name: 'HubSpot', connected: false, icon: Database },
            { name: 'Salesforce', connected: false, icon: Database },
          ].map((platform) => (
            <div key={platform.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className="bg-gray-100 p-2 rounded-lg mr-3">
                  <platform.icon className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{platform.name}</p>
                  <p className="text-sm text-gray-500">
                    {platform.connected ? 'Connected' : 'Not connected'}
                  </p>
                </div>
              </div>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  platform.connected
                    ? 'bg-error-100 text-error-700 hover:bg-error-200'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {platform.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Webhooks</h3>
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Webhook className="h-5 w-5 text-gray-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Custom Webhook</p>
                <p className="text-sm text-gray-500">Send lead data to your custom endpoint</p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200">
              Configure
            </button>
          </div>
          <input
            type="url"
            placeholder="https://your-domain.com/webhook"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
    </div>
  );
};

const BrandingSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">White-Label Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
              <span className="ml-2 text-sm text-gray-700">Remove QuizWiz branding from quizzes</span>
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
              <span className="ml-2 text-sm text-gray-700">Add custom footer text</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Default Quiz Styling</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary-600 rounded-lg border border-gray-300"></div>
              <input
                type="text"
                defaultValue="#7C3AED"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option>Inter (Recommended)</option>
              <option>Arial</option>
              <option>Helvetica</option>
              <option>Georgia</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quiz Theme</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option>Modern</option>
              <option>Classic</option>
              <option>Minimal</option>
              <option>Bold</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Logo & Assets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Logo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="text-gray-400">
                <Download className="mx-auto h-8 w-8 mb-2" />
                Upload your logo
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Favicon</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="text-gray-400">
                <Download className="mx-auto h-8 w-8 mb-2" />
                Upload favicon
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecuritySettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">API Access</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
            <div className="flex items-center space-x-3">
              <input
                type="password"
                defaultValue="qw_live_1234567890abcdef"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                readOnly
              />
              <button className="px-4 py-2 text-sm font-medium text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200">
                Regenerate
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">Use this key to authenticate API requests</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Privacy</h3>
        <div className="space-y-4">
          <div>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
              <span className="ml-2 text-sm text-gray-700">Automatically delete leads after 365 days</span>
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
              <span className="ml-2 text-sm text-gray-700">Require consent for data collection</span>
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
              <span className="ml-2 text-sm text-gray-700">Enable GDPR compliance features</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">License Information</h3>
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold mb-2">Professional License</h4>
              <p className="text-sm opacity-90">Licensed to: QuizWiz Solutions</p>
              <p className="text-sm opacity-90">License Key: QW-PRO-2024-ABCD1234</p>
              <p className="text-sm opacity-90">Valid until: Lifetime</p>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">
              <Key className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;