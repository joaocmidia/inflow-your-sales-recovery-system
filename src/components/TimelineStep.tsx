import { motion } from 'framer-motion';

interface TimelineStepProps {
  day: string;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export const TimelineStep = ({ day, title, description, index, isLast }: TimelineStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative flex gap-6"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[1.375rem] top-12 w-0.5 h-[calc(100%-1rem)] bg-gradient-to-b from-primary/60 to-primary/10" />
      )}
      
      {/* Day badge */}
      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
        <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
      </div>
      
      <div className="pb-8">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
          {day}
        </span>
        <h4 className="text-lg font-bold font-display text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
