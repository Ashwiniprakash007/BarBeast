const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendNotification: (message) => {
        new Notification('Notification', { body: message });
    },
});
