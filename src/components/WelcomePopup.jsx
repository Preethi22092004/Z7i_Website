import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup has been shown ever (not just this session)
    const hasPopupBeenShown = localStorage.getItem('welcomePopupShownPermanent');
    console.log('Popup shown status:', hasPopupBeenShown);
    
    if (!hasPopupBeenShown) {
      console.log('Setting up popup timer');
      const timer = setTimeout(() => {
        console.log('Showing popup');
        setIsOpen(true);
        // Mark popup as shown permanently
        localStorage.setItem('welcomePopupShownPermanent', 'true');
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative max-w-[95vw] max-h-[95vh]"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full 
                       bg-white/80 hover:bg-white 
                       transition-all duration-200 text-gray-800
                       shadow-lg"
            >
              <IoClose size={24} />
            </motion.button>

            {/* Just the Image */}
            <motion.img
              src="/images/popup.png"
              alt="Welcome to Z7i"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;