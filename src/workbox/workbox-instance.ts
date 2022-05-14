import { Workbox } from 'workbox-window';

export const wb = (() => {
  if ('serviceWorker' in navigator) {
    const swExt = import.meta.env.MODE === 'development' ? 'ts' : 'js'
  
    const workboxInstance = new Workbox(`/service-worker.${swExt}`, {
      type: 'module'
    });
  
    workboxInstance.register();

    return workboxInstance;
  } else {
    return null;
  };
})();
