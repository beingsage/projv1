import { useState } from 'react';

export default function Sticky() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        if (!phoneNumber.startsWith('+91 -')) {
            setPhoneNumber('+91 - ');
        }
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Validate phone number (allow only digits after the prefix and ensure it's 10 digits)
        if (/^\+91 - \d{0,10}$/.test(value) || value === '+91 - ') {
            setPhoneNumber(value);
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#2D2D2D] w-full p-0 z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-16">
                <p className="text-slate-400 text-center justify-center align-middle text-2xl font-medium tracking-wide">
                    Download the Cricket Opinion App Now and Start Predicting!
                </p>
                <div className="bg-transparent p-3 rounded-lg h-28 text-center justify-center align-middle">
                    <input
                        className="bg-slate-300 text-slate-700 px-10 py-3 rounded-md text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 mr-5"
                        placeholder={isFocused ? '' : 'Enter your mobile number'}
                        value={phoneNumber}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <button className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-4">
                        Get Link
                    </button>
                </div>
            </div>
        </div>
    );
}