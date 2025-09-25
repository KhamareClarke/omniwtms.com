import React, { useEffect, useState } from 'react';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSlots() {
  const [countdown, setCountdown] = useState<Countdown>({
    days: 2,
    hours: 14,
    minutes: 27,
    seconds: 23
  });
  const [slotsLeft, setSlotsLeft] = useState<number>(7);

  useEffect(() => {
    // Set end time to end of current month
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endOfMonth.getTime() - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setCountdown({ days, hours, minutes, seconds });
        
        // Randomly decrease slots occasionally to create urgency
        if (seconds === 0 && minutes % 5 === 0 && slotsLeft > 3) {
          setSlotsLeft(prev => Math.max(3, prev - 1));
        }
      } else {
        // Reset for next month
        setCountdown({ days: 30, hours: 0, minutes: 0, seconds: 0 });
        setSlotsLeft(10);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [slotsLeft]);

  const reservedHeight = '56px';

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-semibold mt-4 mb-8" style={{ minHeight: reservedHeight }}>
      <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-4 py-2 rounded-full shadow-sm border border-orange-200 min-w-[220px]">
        <span className="font-bold">Limited Time:</span>
        <span>{countdown.days}d</span>:
        <span>{countdown.hours}h</span>:
        <span>{countdown.minutes}m</span>:
        <span>{countdown.seconds}s</span>
      </div>
      <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 px-4 py-2 rounded-full shadow-sm border border-blue-200 min-w-[180px]">
        <span className="font-bold">Slots Left:</span>
        <span className="text-2xl font-extrabold text-green-700">{slotsLeft}</span>
      </div>
    </div>
  );
}
