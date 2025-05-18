'use client'
import {Header} from "@/components/Header";
import {SystemStatus} from "@/components/SystemStatus";
import {AlertsPanel} from "@/components/AlertsPanel";
import {SensorData} from "@/components/SensorData";
import {DetectionHistory} from "@/components/DetectionHistory";
import {Map} from "@/components/Map";
import {useState} from "react";

export const Dashboard = () => {
    const [systemActive, setSystemActive] = useState(true);
    return <div className="flex flex-col w-full min-h-screen">
        <Header systemActive={systemActive} onToggleSystem={() => setSystemActive(!systemActive)} />
        <main className="flex-1 p-4 md:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SystemStatus active={systemActive} />
                <AlertsPanel />
                <Map />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <SensorData className="lg:col-span-2" />
                <DetectionHistory />
            </div>
        </main>
    </div>;
};