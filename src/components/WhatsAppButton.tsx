import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [isPillVisible, setIsPillVisible] = useState(false);

    const whatsappLink = "https://api.whatsapp.com/send?phone=5511934001766&text=Quero%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20InFlow";

    useEffect(() => {
        const handleScroll = () => {
            if (hasTriggered) return;

            const pricingSection = document.getElementById('pricing');
            if (pricingSection) {
                const rect = pricingSection.getBoundingClientRect();
                if (rect.top <= window.innerHeight) {
                    setIsVisible(true);
                    setHasTriggered(true);
                    setIsPillVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasTriggered]);

    // Pill visibility cycle logic
    useEffect(() => {
        if (!isVisible) return;

        let hideTimer: NodeJS.Timeout;
        let showInterval: NodeJS.Timeout;

        const startCycle = () => {
            // Hide after 10s
            hideTimer = setTimeout(() => {
                setIsPillVisible(false);
            }, 10000);

            // Show again every 60s
            showInterval = setInterval(() => {
                setIsPillVisible(true);
                // Set another timeout to hide it after 10s
                setTimeout(() => {
                    setIsPillVisible(false);
                }, 10000);
            }, 60 * 1000);
        };

        startCycle();

        return () => {
            clearTimeout(hideTimer);
            clearInterval(showInterval);
        };
    }, [isVisible]);

    const handleClosePill = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsPillVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-[90px] right-6 sm:bottom-8 sm:right-8 z-[100]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.5
                        }}
                        className="relative group flex flex-row-reverse items-center"
                    >
                        {/* Circular Button */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-glow hover:scale-110 active:scale-95 transition-all duration-300 relative z-10 overflow-visible"
                        >
                            <motion.svg
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                viewBox="0 0 24 24"
                                className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                            </motion.svg>

                            {/* Outer Pulse Animation */}
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-[#25D366] rounded-full z-[-1]"
                            />
                        </a>

                        {/* Text Pill */}
                        <AnimatePresence>
                            {isPillVisible && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 10, scale: 0.9 }}
                                    className="mr-3 bg-card border border-primary/20 backdrop-blur-md px-4 py-2 rounded-full shadow-card flex items-center gap-2 relative group/pill hover:border-primary/50 transition-colors"
                                >
                                    <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                                        Dúvidas? Fale conosco no Whatsapp
                                    </span>
                                    <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />

                                    {/* Close Button */}
                                    <button
                                        onClick={handleClosePill}
                                        className="absolute -top-2 -right-2 w-5 h-5 bg-muted hover:bg-destructive text-foreground hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
