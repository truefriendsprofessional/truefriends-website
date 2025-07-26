// Performance utilities for Features2 component
export const createPerformanceMonitor = () => {
  const metrics = {
    animationFrame: 0,
    lastTime: performance.now(),
    frameCount: 0,
    fps: 0
  };

  const updateFPS = () => {
    const now = performance.now();
    metrics.frameCount++;
    
    if (now >= metrics.lastTime + 1000) {
      metrics.fps = Math.round((metrics.frameCount * 1000) / (now - metrics.lastTime));
      metrics.frameCount = 0;
      metrics.lastTime = now;
      
      // Log performance warnings
      if (metrics.fps < 30) {
        console.warn(`Low FPS detected: ${metrics.fps}fps`);
      }
    }
    
    metrics.animationFrame = requestAnimationFrame(updateFPS);
  };

  const start = () => {
    updateFPS();
  };

  const stop = () => {
    if (metrics.animationFrame) {
      cancelAnimationFrame(metrics.animationFrame);
    }
  };

  const getFPS = () => metrics.fps;

  return { start, stop, getFPS };
};

// Throttle function for performance-sensitive operations
export const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// Debounce function for resize events
export const debounce = (func, delay) => {
  let timeoutId;
  
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// Optimize ScrollTrigger for better performance
export const optimizedScrollTriggerConfig = {
  // Reduce refresh frequency
  refreshPriority: -1,
  
  // Use lower precision for better performance
  scrub: true,
  
  // Batch DOM updates
  batch: true,
  
  // Optimize for specific scenarios
  fastScrollEnd: true,
  
  // Prevent unnecessary calculations
  invalidateOnRefresh: false
};
