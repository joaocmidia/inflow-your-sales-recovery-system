import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
  badgeVariant?: 'primary' | 'accent' | 'bonus';
}

export const FeatureCard = ({ icon, title, description, badge, badgeVariant = 'primary' }: FeatureCardProps) => {
  const badgeStyles = {
    primary: 'bg-primary/20 text-primary',
    accent: 'bg-accent/20 text-accent',
    bonus: 'bg-gradient-accent text-accent-foreground',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gradient-card border border-border rounded-xl p-6 shadow-card hover:border-primary/40 transition-colors group"
    >
      {badge && (
        <span className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-semibold ${badgeStyles[badgeVariant]}`}>
          {badge}
        </span>
      )}
      
      <div className="text-4xl mb-4">{icon}</div>
      
      <h3 className="text-lg font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
