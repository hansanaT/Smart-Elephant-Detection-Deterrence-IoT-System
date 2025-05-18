import React from 'react';
import { CheckCircleIcon, AlertCircleIcon, ClockIcon } from 'lucide-react';

export const DetectionHistory = () => {
    // Mock data - would come from API in real implementation
    const detectionEvents = [{
        id: 1,
        timestamp: '2023-06-12 14:32:45',
        type: 'elephant',
        confidence: 98,
        action: 'deterred'
    }, {
        id: 2,
        timestamp: '2023-06-12 12:15:22',
        type: 'other',
        confidence: 76,
        action: 'monitoring'
    }, {
        id: 3,
        timestamp: '2023-06-12 09:47:03',
        type: 'elephant',
        confidence: 92,
        action: 'deterred'
    }, {
        id: 4,
        timestamp: '2023-06-11 23:12:57',
        type: 'unknown',
        confidence: 45,
        action: 'alerted'
    }, {
        id: 5,
        timestamp: '2023-06-11 19:38:11',
        type: 'elephant',
        confidence: 96,
        action: 'deterred'
    }];

    const getStatusIcon = (event) => {
        if (event.type === 'elephant') {
            return <AlertCircleIcon className="h-5 w-5 text-red-500" />;
        } else if (event.type === 'other') {
            return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
        } else {
            return <ClockIcon className="h-5 w-5 text-yellow-500" />;
        }
    };

    const getActionBadge = (action) => {
        switch (action) {
            case 'deterred':
                return <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            Deterred
          </span>;
            case 'alerted':
                return <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            Alerted
          </span>;
            case 'monitoring':
                return <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            Monitoring
          </span>;
        }
    };

    return <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Detection History
            </h2>
            <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                View All
            </button>
        </div>
        <div className="space-y-4">
            {detectionEvents.map(event => <div key={event.id} className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md">
                <div className="mr-3 mt-0.5">{getStatusIcon(event)}</div>
                <div className="flex-1">
                    <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {event.type === 'elephant' ? 'Elephant Detected' : event.type === 'other' ? 'Non-elephant Activity' : 'Unknown Activity'}
                        </p>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                  {event.timestamp.split(' ')[1]}
                </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {event.timestamp.split(' ')[0]}
                    </p>
                    <div className="flex justify-between mt-1.5">
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  Confidence: {event.confidence}%
                </span>
                        {getActionBadge(event.action)}
                    </div>
                </div>
            </div>)}
        </div>
    </div>;
};