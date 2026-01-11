import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role?: string;
  avatar?: string;
}

export const TestimonialCard = ({ content, author, role, avatar }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-card border border-border rounded-xl p-5 shadow-card"
    >
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      
      <p className="text-sm text-foreground/90 mb-4 leading-relaxed">
        "{content}"
      </p>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
          {avatar || author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{author}</p>
          {role && <p className="text-xs text-muted-foreground">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
};
