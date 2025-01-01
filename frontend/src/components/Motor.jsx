import React from 'react'

const Motor = () => {
    const handleMotorStart = async () => {
        await fetch("http://localhost:3000/motor/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        alert("Motor Started!");
      };
    
      const handleMotorStop = async () => {
        await fetch("http://localhost:3000/motor/stop", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        alert("Motor Stopped!");
      };
  return (
    <div>
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Motor Control Panel</h1>
      <div className="flex gap-4">
        <button
          onClick={handleMotorStart}
          className="bg-green-500 text-white py-2 px-4 rounded-lg"
        >
          Start Motor
        </button>
        <button
          onClick={handleMotorStop}
          className="bg-red-500 text-white py-2 px-4 rounded-lg"
        >
          Stop Motor
        </button>
      </div>
    </div>
    </div>
  )
}

export default Motor
