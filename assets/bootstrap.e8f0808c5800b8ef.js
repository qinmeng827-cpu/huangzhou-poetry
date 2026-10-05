const response=await fetch(new URL('./site-data.b7d44806f6566944.json',import.meta.url));
if(!response.ok)throw Error('Website data could not be loaded: '+response.status);
Object.assign(window,await response.json());
await import('./app.9e1b53ed0ec3101c.js');
