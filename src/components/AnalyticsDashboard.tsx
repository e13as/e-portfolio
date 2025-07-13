'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Users, Eye, TrendingUp, Calendar } from 'lucide-react';
import { trackEvent } from './GoogleAnalytics';

interface AnalyticsData {
  totalVisitors: number;
  todayVisitors: number;
  pageViews: number;
  uniqueVisitors: number;
  topPages: Array<{ page: string; views: number }>;
}

interface AnalyticsDashboardProps {
  isDarkMode: boolean;
}

export default function AnalyticsDashboard({ isDarkMode }: AnalyticsDashboardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalVisitors: 0,
    todayVisitors: 0,
    pageViews: 0,
    uniqueVisitors: 0,
    topPages: []
  });
  const [loading, setLoading] = useState(false);

  // Toggle dashboard visibility
  const toggleDashboard = () => {
    setIsVisible(!isVisible);
    trackEvent('analytics_dashboard_toggle', 'engagement', isVisible ? 'close' : 'open');
  };

  // Simulate analytics data (replace with real API calls)
  const fetchAnalyticsData = async () => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock data - replace with real Google Analytics API calls
    const mockData: AnalyticsData = {
      totalVisitors: 1247,
      todayVisitors: 23,
      pageViews: 3421,
      uniqueVisitors: 892,
      topPages: [
        { page: '/', views: 1247 },
        { page: '/projects', views: 456 },
        { page: '/contact', views: 234 },
        { page: '/about', views: 189 }
      ]
    };
    
    setAnalyticsData(mockData);
    setLoading(false);
    trackEvent('analytics_data_fetch', 'engagement', 'success');
  };

  useEffect(() => {
    if (isVisible) {
      fetchAnalyticsData();
    }
  }, [isVisible]);

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={toggleDashboard}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
          isDarkMode 
            ? 'bg-green-600 hover:bg-green-500 text-white' 
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
        title="Analytics Dashboard"
      >
        <BarChart3 size={24} />
      </motion.button>

      {/* Dashboard Modal */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                toggleDashboard();
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${
                isDarkMode 
                  ? 'bg-[#111] border border-green-600/30' 
                  : 'bg-white border border-green-200'
              }`}
            >
              {/* Header */}
              <div className={`p-6 border-b ${
                isDarkMode ? 'border-green-600/30' : 'border-green-200'
              }`}>
                <div className="flex items-center justify-between">
                  <h2 className={`text-2xl font-bold ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`}>
                    📊 Analytics Dashboard
                  </h2>
                  <button
                    onClick={toggleDashboard}
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode 
                        ? 'hover:bg-green-600/20 text-green-400' 
                        : 'hover:bg-green-100 text-green-600'
                    }`}
                  >
                    ✕
                  </button>
                </div>
                <p className={`mt-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Real-time visitor statistics and insights
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className={`animate-spin rounded-full h-8 w-8 border-b-2 ${
                      isDarkMode ? 'border-green-400' : 'border-green-600'
                    }`}></div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <StatCard
                        title="Total Visitors"
                        value={analyticsData.totalVisitors.toLocaleString()}
                        icon={<Users size={20} />}
                        isDarkMode={isDarkMode}
                        color="blue"
                      />
                      <StatCard
                        title="Today's Visitors"
                        value={analyticsData.todayVisitors.toLocaleString()}
                        icon={<Calendar size={20} />}
                        isDarkMode={isDarkMode}
                        color="green"
                      />
                      <StatCard
                        title="Page Views"
                        value={analyticsData.pageViews.toLocaleString()}
                        icon={<Eye size={20} />}
                        isDarkMode={isDarkMode}
                        color="purple"
                      />
                      <StatCard
                        title="Unique Visitors"
                        value={analyticsData.uniqueVisitors.toLocaleString()}
                        icon={<TrendingUp size={20} />}
                        isDarkMode={isDarkMode}
                        color="orange"
                      />
                    </div>

                    {/* Top Pages */}
                    <div className={`rounded-lg p-4 ${
                      isDarkMode ? 'bg-black/30' : 'bg-gray-50'
                    }`}>
                      <h3 className={`text-lg font-semibold mb-4 ${
                        isDarkMode ? 'text-green-400' : 'text-green-600'
                      }`}>
                        📄 Top Pages
                      </h3>
                      <div className="space-y-3">
                        {analyticsData.topPages.map((page, index) => (
                          <div key={page.page} className="flex items-center justify-between">
                            <span className={`${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {index + 1}. {page.page}
                            </span>
                            <span className={`font-mono ${
                              isDarkMode ? 'text-green-400' : 'text-green-600'
                            }`}>
                              {page.views.toLocaleString()} views
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Info */}
                    <div className={`text-sm p-4 rounded-lg ${
                      isDarkMode ? 'bg-green-600/10 border border-green-600/20' : 'bg-green-50 border border-green-200'
                    }`}>
                      <p className={`${
                        isDarkMode ? 'text-green-300' : 'text-green-700'
                      }`}>
                        💡 <strong>Note:</strong> This is demo data. Connect your Google Analytics account to see real statistics.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Stat Card Component
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  isDarkMode: boolean;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

function StatCard({ title, value, icon, isDarkMode, color }: StatCardProps) {
  const colorClasses = {
    blue: isDarkMode ? 'bg-blue-600/20 border-blue-600/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600',
    green: isDarkMode ? 'bg-green-600/20 border-green-600/30 text-green-400' : 'bg-green-50 border-green-200 text-green-600',
    purple: isDarkMode ? 'bg-purple-600/20 border-purple-600/30 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600',
    orange: isDarkMode ? 'bg-orange-600/20 border-orange-600/30 text-orange-400' : 'bg-orange-50 border-orange-200 text-orange-600',
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`p-4 rounded-lg border ${colorClasses[color]}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium opacity-80">{title}</span>
        {icon}
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </motion.div>
  );
} 