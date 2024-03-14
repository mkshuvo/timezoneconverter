import React from "react";
import TimezoneConverter from "../components/TimezoneConverter";
import './favicon.ico'; // Assuming you want to import favicon.ico as a style
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 min-w-96 items-center justify-between font-mono text-sm lg:flex">
                <TimezoneConverter />
            </div>
        </main>
    );
}
