// ScrollTrigger Debug and Performance Monitoring
export const debugScrollTriggers = () => {
  if (typeof window === 'undefined') return;
  
  const ScrollTrigger = window.gsap?.ScrollTrigger;
  if (!ScrollTrigger) {
    console.warn('ScrollTrigger not found');
    return;
  }

  // Log all active ScrollTriggers
  const triggers = ScrollTrigger.getAll();
  console.group('Active ScrollTriggers:');
  triggers.forEach((trigger, index) => {
    console.log(`${index + 1}. ID: ${trigger.vars.id || 'unnamed'}`, {
      trigger: trigger.trigger,
      start: trigger.vars.start,
      end: trigger.vars.end,
      pinned: trigger.pin,
      scrub: trigger.vars.scrub,
      progress: trigger.progress
    });
  });
  console.groupEnd();

  // Check for overlapping triggers
  const overlaps = [];
  triggers.forEach((trigger1, i) => {
    triggers.forEach((trigger2, j) => {
      if (i !== j && trigger1.start < trigger2.end && trigger2.start < trigger1.end) {
        overlaps.push([trigger1.vars.id || i, trigger2.vars.id || j]);
      }
    });
  });

  if (overlaps.length > 0) {
    console.warn('Overlapping ScrollTriggers detected:', overlaps);
  }

  return {
    total: triggers.length,
    overlaps: overlaps.length,
    triggers: triggers.map(t => ({
      id: t.vars.id,
      progress: t.progress,
      isActive: t.isActive
    }))
  };
};

// Performance monitoring
export const monitorPerformance = () => {
  let frameCount = 0;
  let lastTime = performance.now();
  
  const checkFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      if (fps < 30) {
        console.warn(`Low FPS detected: ${fps}fps`);
      }
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(checkFPS);
  };
  
  requestAnimationFrame(checkFPS);
};

// Utility to check if sections are conflicting
export const checkSectionConflicts = () => {
  // Check if multiple sections are pinned at the same time
  const ScrollTrigger = window.gsap?.ScrollTrigger;
  if (!ScrollTrigger) return;

  const pinnedTriggers = ScrollTrigger.getAll().filter(trigger => trigger.pin);
  
  if (pinnedTriggers.length > 1) {
    console.warn('Multiple pinned sections detected:', pinnedTriggers.map(t => t.vars.id || 'unnamed'));
  }
  
  return pinnedTriggers.length;
};

// Auto-debug function to run periodically
export const startPerformanceMonitoring = () => {
  monitorPerformance();
  
  // Check for conflicts every 5 seconds
  setInterval(() => {
    debugScrollTriggers();
    checkSectionConflicts();
  }, 5000);
};
