import React, {useEffect, useState} from 'react';
import { ActivityIcon, BatteryIcon, WifiIcon, SpeakerIcon } from 'lucide-react';
import { SensorCard } from './SensorCard';
import {ref,onValue} from "firebase/database";
import { database } from '@/firebase/config';

export const SystemStatus = ({
                                 active,
                                 className = ''
                             }) => {
    const[motion,setMotion]=useState(null);
    const[vibration,setVibration]=useState(null);
    const[ultrasonic,setUltrasonic]=useState(null);
    const[timestamp,setTimestamp]=useState(null);
    const[wifiStatus,setWifiStatus]=useState(null);
    const[wifiStrength,setWifiStrength]=useState(null);

    useEffect(() => {
        const statusRef = ref(database,'sensors/' + '/status');
        onValue(statusRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setMotion(data.pir);
                setVibration(data.vibration);
                setUltrasonic(data.ultrasonic);
                setTimestamp(data.timestamp);
            }
        });
    }, []);
    useEffect(() => {
        const wifiRef = ref(database,'sensors/' + '/wifi');
        onValue(wifiRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setWifiStatus(data.status);
                setWifiStrength(data.strength);
            }
        });
    }, []);

    return <div className={`relative bg-white dark:bg-gray-800 rounded-lg shadow p-6 ${className}`}>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 place-items-center">
            System Status <span className={'text-center font-normal text-slate-500 opacity-50 text-sm'}>(Last Updated: {timestamp})</span>
        </h2>
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
                <ActivityIcon className={`h-5 w-5 ${active ? 'text-green-500' : 'text-red-500'} mr-2`} />
                <span className="font-medium text-gray-700 dark:text-gray-300">
            Status:
          </span>
            </div>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${active ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}`}>
          {active ? 'Active' : 'Inactive'}
        </span>
        </div>
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
                <SensorCard title="PIR Sensor" value="Operational" status={motion} icon={<ActivityIcon className="h-4 w-4" />} />
                <SensorCard title="Vibration" value="Operational" status={vibration} icon={<ActivityIcon className="h-4 w-4" />} />
                <SensorCard title="Ultrasonic" value="Operational" status={ultrasonic} icon={<ActivityIcon className="h-4 w-4" />} />
                {/*<SensorCard title="AI Module" value="Processing" status="active" icon={<ActivityIcon className="h-4 w-4" />} />*/}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {/*    <div className="flex justify-between items-center mb-2">*/}
            {/*        <div className="flex items-center">*/}
            {/*            <BatteryIcon className="h-4 w-4 text-green-500 mr-2" />*/}
            {/*            <span className="text-sm text-gray-600 dark:text-gray-400">*/}
            {/*    Battery*/}
            {/*  </span>*/}
            {/*        </div>*/}
            {/*        <span className="text-sm font-medium text-gray-900 dark:text-white">*/}
            {/*  78%*/}
            {/*</span>*/}
            {/*    </div>*/}
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        <WifiIcon className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                Signal (Strength : {wifiStrength})
              </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
              {wifiStatus}
            </span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <SpeakerIcon className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            Deterrent
                        </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Ready
                    </span>
                </div>
            </div>
        </div>
    </div>;
};