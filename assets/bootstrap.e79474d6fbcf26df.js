const response=await fetch(new URL('./site-data.118ee79e842ca204.json',import.meta.url));
if(!response.ok)throw Error('Website data could not be loaded: '+response.status);
Object.assign(window,await response.json());
await import('./app.82fbe57b1586b5ea.js');
