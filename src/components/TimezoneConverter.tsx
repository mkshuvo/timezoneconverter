"use client"
import React, { useState } from "react";
import './style.css';

const TimezoneConverter = () => {
    const [inputTime, setInputTime] = useState("");
    const [inputTimezone, setInputTimezone] = useState<string>("");
    const [outputTimezone, setOutputTimezone] = useState<string>("");
    const [convertedTime, setConvertedTime] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputTime || !inputTimezone || !outputTimezone) {
            alert("Please fill in all fields");
            return;
        }

        try {
            const inputDate = new Date(inputTime);
            const inputDateTime = new Date(
                Date.UTC(
                    inputDate.getFullYear(),
                    inputDate.getMonth(),
                    inputDate.getDate(),
                    inputDate.getHours(),
                    inputDate.getMinutes(),
                    inputDate.getSeconds(),
                ),
            );
            inputDateTime.setUTCHours(
                inputDateTime.getUTCHours() +
                (inputTimezone.includes("+") ? -1 : 1) *
                parseInt(inputTimezone.slice(3), 10),
            );
            const outputDateTime = new Date(inputDateTime.getTime());
            outputDateTime.setUTCHours(
                outputDateTime.getUTCHours() +
                (outputTimezone.includes("+") ? -1 : 1) *
                parseInt(outputTimezone.slice(3), 10),
            );
            setConvertedTime(
                outputDateTime.toISOString().slice(0, 19).replace("T", " "),
            );
        } catch (error) {
            alert("Invalid input");
        }
    };

    const handleReset = () => {
        setInputTime("");
        setInputTimezone("");
        setOutputTimezone("");
        setConvertedTime("");};

    return (
        <div className="p-4 mt-16 mx-auto bg-green-600 rounded">
            <h1 className="text-2xl font-bold mb-4">Convert Timezone here:</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-2">
                    <label htmlFor="inputTime" className="block text-black-700 font-bold mb-1">
                        Input Time:
                    </label>
                    <input
                        type="text"
                        id="inputTime"
                        value={inputTime}
                        onChange={(e) => setInputTime(e.target.value)}
                        required
                        className="w-full px-3 py-2 leading-tight text-gray-700 text-3xl border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="inputTimezone" className="block text-white-700 font-bold mb-1">
                        Input Timezone:
                    </label>
                    <select
                        id="inputTimezone"
                        value={inputTimezone}
                        onChange={(e) => setInputTimezone(e.target.value)}
                        required
                        className="w-full text-3xl px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select a timezone</option>
                        <option value="UTC">UTC</option>
                        <option value="GMT-12:00">GMT-12:00</option>
                        <option value="GMT-11:00">GMT-11:00</option>
                        <option value="GMT-10:00">GMT-10:00</option>
                        <option value="GMT-09:00">GMT-09:00</option>
                        <option value="GMT-08:00">GMT-08:00 OR PST</option>
                        <option value="GMT-07:00">GMT-07:00 OR MST OR PDT</option>
                        <option value="GMT-06:00">GMT-06:00 OR CST OR MDT</option>
                        <option value="GMT-05:00">GMT-05:00 OR EST OR CDT</option>
                        <option value="GMT-04:00">GMT-04:00 OR EDT</option>
                        <option value="GMT-03:00">GMT-03:00</option>
                        <option value="GMT-02:00">GMT-02:00</option>
                        <option value="GMT-01:00">GMT-01:00</option>
                        <option value="GMT">GMT</option>
                        <option value="GMT+01:00">GMT+01:00</option>
                        <option value="GMT+02:00">GMT+02:00</option>
                        <option value="GMT+03:00">GMT+03:00</option>
                        <option value="GMT+04:00">GMT+04:00</option>
                        <option value="GMT+05:00">GMT+05:00</option>
                        <option value="GMT+06:00">GMT+06:00</option>
                        <option value="GMT+07:00">GMT+07:00</option>
                        <option value="GMT+08:00">GMT+08:00</option>
                        <option value="GMT+09:00">GMT+09:00</option>
                        <option value="GMT+10:00">GMT+10:00</option>
                        <option value="GMT+11:00">GMT+11:00</option>
                        <option value="GMT+12:00">GMT+12:00</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="outputTimezone" className="block text-white-700 font-bold mb-1">
                        Output Timezone:
                    </label>
                    <select
                        id="outputTimezone"
                        value={outputTimezone}
                        onChange={(e) => setOutputTimezone(e.target.value)}
                        required
                        className="w-full px-3 py-2 leading-tight text-gray-700 text-3xl border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select a timezone</option>
                        <option value="UTC">UTC</option>
                        <option value="GMT-12:00">GMT-12:00</option>
                        <option value="GMT-11:00">GMT-11:00</option>
                        <option value="GMT-10:00">GMT-10:00</option>
                        <option value="GMT-09:00">GMT-09:00</option>
                        <option value="GMT-08:00">GMT-08:00 OR PST</option>
                        <option value="GMT-07:00">GMT-07:00 OR MST OR PDT</option>
                        <option value="GMT-06:00">GMT-06:00 OR CST OR MDT</option>
                        <option value="GMT-05:00">GMT-05:00 OR EST OR CDT</option>
                        <option value="GMT-04:00">GMT-04:00 OR EDT</option>
                        <option value="GMT-03:00">GMT-03:00</option>
                        <option value="GMT-02:00">GMT-02:00</option>
                        <option value="GMT-01:00">GMT-01:00</option>
                        <option value="GMT">GMT</option>
                        <option value="GMT+01:00">GMT+01:00</option>
                        <option value="GMT+02:00">GMT+02:00</option>
                        <option value="GMT+03:00">GMT+03:00</option>
                        <option value="GMT+04:00">GMT+04:00</option>
                        <option value="GMT+05:00">GMT+05:00</option>
                        <option value="GMT+06:00">GMT+06:00</option>
                        <option value="GMT+07:00">GMT+07:00</option>
                        <option value="GMT+08:00">GMT+08:00</option>
                        <option value="GMT+09:00">GMT+09:00</option>
                        <option value="GMT+10:00">GMT+10:00</option>
                        <option value="GMT+11:00">GMT+11:00</option>
                        <option value="GMT+12:00">GMT+12:00</option>
                    </select>
                </div>
                <div className="flex justify-between mt-7">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white text-3xl rounded"
                    >
                        Convert
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white text-3xl rounded"
                    >
                        Reset
                    </button>
                </div>
            </form>
            {convertedTime && (
                <div className="text-white-600 text-4xl fo p-4 rounded">
                    <p className="text-xlfont-bold">Converted Time: {convertedTime}</p>
                </div>
            )}
        </div>
    );
};

export default TimezoneConverter;
