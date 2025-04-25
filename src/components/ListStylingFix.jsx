import { useEffect } from 'react';

/**
 * This component doesn't render anything, it just runs on mount to ensure
 * proper bullet point styling is applied throughout the application.
 */
const ListStylingFix = () => {
  useEffect(() => {
    // Apply filled bullet styling to all lists
    const applyBulletStyles = () => {
      // Get all lists
      const allLists = document.querySelectorAll('ul, ol');
      
      // Apply styles to each list
      allLists.forEach(list => {
        // Skip lists that have specific classes that should be excluded
        if (list.classList.contains('no-bullets') || 
            list.classList.contains('navbar-nav') || 
            list.classList.contains('pagination')) {
          return;
        }
        
        // Set list style to disc (filled bullets)
        list.style.listStyleType = 'disc';
        
        // Ensure padding is set correctly
        if (getComputedStyle(list).paddingLeft === '0px') {
          list.style.paddingLeft = '1.5rem';
        }
        
        // Remove any custom bullets
        const items = list.querySelectorAll('li');
        items.forEach(item => {
          // Remove ::before pseudo-elements with content by setting their display to none
          const style = document.createElement('style');
          style.innerHTML = `
            li::before {
              display: none !important;
            }
          `;
          document.head.appendChild(style);
        });
      });
    };
    
    // Run once on mount
    applyBulletStyles();
    
    // Run again after a slight delay to handle any dynamic content
    const timeout = setTimeout(applyBulletStyles, 500);
    
    // Run whenever the DOM changes to catch dynamically added lists
    const observer = new MutationObserver(applyBulletStyles);
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Clean up
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default ListStylingFix; 