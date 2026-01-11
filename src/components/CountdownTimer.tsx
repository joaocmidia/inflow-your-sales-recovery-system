import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 3,
    hours: 8,
    minutes: 34,
    seconds: 11,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div 
        key={value}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        className="bg-secondary rounded-lg px-3 py-2 min-w-[3rem] text-center"
      >
        <span className="text-2xl font-bold font-display text-foreground">
          {String(value).padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-2">
      <TimeBlock value={timeLeft.days} label="dias" />
      <span className="text-xl text-muted-foreground font-bold">:</span>
      <TimeBlock value={timeLeft.hours} label="horas" />
      <span className="text-xl text-muted-foreground font-bold">:</span>
      <TimeBlock value={timeLeft.minutes} label="min" />
      <span className="text-xl text-muted-foreground font-bold">:</span>
      <TimeBlock value={timeLeft.seconds} label="seg" />
    </div>
  );
};
