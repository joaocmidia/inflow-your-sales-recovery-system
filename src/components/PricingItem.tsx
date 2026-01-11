import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingItemProps {
  title: string;
  description: string;
  price: string;
  index: number;
}

export const PricingItem = ({ title, description, price, index }: PricingItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center justify-between py-4 border-b border-border/50 last:border-0"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Check className="w-3 h-3 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <span className="text-muted-foreground line-through text-sm whitespace-nowrap ml-4">
        {price}
      </span>
    </motion.div>
  );
};
