import React from 'react';
import { BarChartIcon, TrendingUpIcon } from 'lucide-react';

export const SensorData = ({
                               className = ''
                           }) => {
    return <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 ${className}`}>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Sensor Data
            </h2>
            <div className="flex space-x-2">
                <select className="text-sm border border-gray-300 dark:border-gray-600 rounded bg-transparent text-gray-700 dark:text-gray-300 px-2 py-1">
                    <option>Last Hour</option>
                    <option>Last 24 Hours</option>
                    <option>Last 7 Days</option>
                </select>
            </div>
        </div>
        <div className="space-y-6">
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Motion Detection (PIR)
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              <TrendingUpIcon className="w-3 h-3 mr-1" />
              +12%
            </span>
                </div>
                <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                    {/* This would be a chart in a real implementation */}
                    <div className="h-full w-full flex items-end px-1">
                        {[35, 45, 30, 20, 40, 50, 60, 35, 15, 25, 40, 55].map((value, i) => <div key={i} className="flex-1 mx-0.5 bg-blue-500 rounded-t" style={{
                            height: `${value}%`
                        }}></div>)}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Vibration Sensor
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              Stable
            </span>
                </div>
                <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                    {/* This would be a chart in a real implementation */}
                    <div className="h-full w-full flex items-end px-1">
                        {[10, 15, 10, 25, 15, 10, 30, 25, 10, 15, 10, 20].map((value, i) => <div key={i} className="flex-1 mx-0.5 bg-green-500 rounded-t" style={{
                            height: `${value}%`
                        }}></div>)}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Ultrasonic Distance
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
              <TrendingUpIcon className="w-3 h-3 mr-1" />
              Activity
            </span>
                </div>
                <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                    {/* This would be a chart in a real implementation */}
                    <div className="h-full w-full flex items-end px-1">
                        {[60, 50, 70, 80, 65, 75, 60, 50, 55, 65, 70, 60].map((value, i) => <div key={i} className="flex-1 mx-0.5 bg-yellow-500 rounded-t" style={{
                            height: `${value}%`
                        }}></div>)}
                    </div>
                </div>
            </div>
        </div>
    </div>;
};