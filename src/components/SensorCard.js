import React from 'react';

export const SensorCard = ({
                               title,
                               value,
                               status,
                               icon
                           }) => {
    const getStatusColor = () => {
        switch (status) {
            case 'online':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            case 'offline':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
            case 'warning':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            case 'active':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    return <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md">
        <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {title}
        </span>
            <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor()}`}>
          {status}
        </span>
        </div>
        <div className="flex items-center">
            <div className="mr-2 text-gray-500 dark:text-gray-400">{icon}</div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
          {value}
        </span>
        </div>
    </div>;
};