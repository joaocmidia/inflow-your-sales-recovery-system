import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '',
  onClick 
}: CTAButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-primary text-primary-foreground shadow-button hover:shadow-glow",
    secondary: "bg-secondary text-secondary-foreground border border-border hover:border-primary/50",
    ghost: "bg-transparent text-foreground hover:bg-secondary",
  };
  
  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {variant === 'primary' && <ArrowRight className="w-4 h-4" />}
      </span>
      
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        />
      )}
    </motion.button>
  );
};
