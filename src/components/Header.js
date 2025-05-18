import React from 'react';
import { BellIcon, MenuIcon, MoonIcon, SunIcon } from 'lucide-react';

export const Header = ({
                           systemActive,
                           onToggleSystem
                       }) => {

    return <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-6 py-4">
            <div className="flex items-center space-x-3">
                <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <MenuIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Elephant Deterrence System
                </h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center">
            <span className="mr-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              System
            </span>
                    <button onClick={onToggleSystem} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${systemActive ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${systemActive ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                </div>
                <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer relative">
                    <BellIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <MoonIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
            </div>
        </div>
    </header>;
};