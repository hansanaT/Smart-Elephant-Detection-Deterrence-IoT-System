import React from 'react';
import { BellIcon, AlertTriangleIcon, PhoneCallIcon, SendIcon } from 'lucide-react';

export const AlertsPanel = () => {
    // Mock data - would come from API in real implementation
    const alerts = [{
        id: 1,
        type: 'detection',
        message: 'Elephant detected at fence section B',
        time: '14:32',
        status: 'new'
    }, {
        id: 2,
        type: 'system',
        message: 'Bee sound deterrent activated',
        time: '14:33',
        status: 'sent'
    }, {
        id: 3,
        type: 'notification',
        message: 'SMS alert sent to 5 nearby residents',
        time: '14:33',
        status: 'delivered'
    }, {
        id: 4,
        type: 'system',
        message: 'Low battery warning (23%)',
        time: '13:15',
        status: 'delivered'
    }];

    const getAlertIcon = (type) => {
        switch (type) {
            case 'detection':
                return <AlertTriangleIcon className="h-4 w-4 text-red-500" />;
            case 'system':
                return <BellIcon className="h-4 w-4 text-yellow-500" />;
            case 'notification':
                return <SendIcon className="h-4 w-4 text-blue-500" />;
        }
    };

    const getStatusIndicator = (status) => {
        switch (status) {
            case 'new':
                return <span className="w-2 h-2 bg-red-500 rounded-full"></span>;
            case 'sent':
                return <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>;
            case 'delivered':
                return <span className="w-2 h-2 bg-green-500 rounded-full"></span>;
        }
    };

    return <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <BellIcon className="h-5 w-5 mr-2 text-indigo-500" />
                Alerts & Notifications
            </h2>
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
          3 New
        </span>
        </div>
        <div className="space-y-3">
            {alerts.map(alert => <div key={alert.id} className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md">
                <div className="mr-3 mt-1">{getAlertIcon(alert.type)}</div>
                <div className="flex-1">
                    <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {alert.message}
                        </p>
                        <div className="flex items-center space-x-1">
                            {getStatusIndicator(alert.status)}
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                    {alert.time}
                  </span>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <PhoneCallIcon className="h-4 w-4 text-indigo-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Emergency Contacts
            </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
            5 Configured
          </span>
            </div>
            <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium transition-colors">
                Send Manual Alert
            </button>
        </div>
    </div>;
};