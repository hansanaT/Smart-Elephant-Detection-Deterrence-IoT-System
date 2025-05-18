import React from 'react';
import { MapPinIcon, NavigationIcon } from 'lucide-react';
export const Map = () => {
    return <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2 text-indigo-500" />
                System Location
            </h2>
            <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                <NavigationIcon className="h-4 w-4 mr-1" />
                Navigate
            </button>
        </div>
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
            {/* This would be a real map in implementation */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 mb-2">
                        <NavigationIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Fence Section B
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        3.45 km away
                    </p>
                </div>
            </div>
            {/* Map coordinates overlay */}
            <div className="absolute bottom-2 left-2 bg-white dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 px-2 py-1 rounded text-xs text-gray-700 dark:text-gray-300">
                12.9716° N, 77.5946° E
            </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-md">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Last Activity
          </span>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                    14:32 Today
                </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-md">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Coverage Area
          </span>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                    500m Radius
                </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-md">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Terrain
          </span>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Forest Edge
                </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-md">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Risk Level
          </span>
                <p className="text-sm font-medium text-gray-900 dark:text-white text-yellow-500">
                    Medium
                </p>
            </div>
        </div>
    </div>;
};