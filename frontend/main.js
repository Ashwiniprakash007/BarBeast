const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Disable hardware acceleration to avoid GPU initialization issues
app.disableHardwareAcceleration();

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true, // Recommended for security
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  // Load the React app from the build folder
  const startURL = url.format({
    pathname: path.join(__dirname, 'build', 'index.html'),
    protocol: 'file:',
    slashes: true,
  });

  // Log the URL to check if it's correct
  console.log('Loading URL:', startURL);

  mainWindow.loadURL(startURL);

  // Optional: Open DevTools for debugging
  mainWindow.webContents.openDevTools();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
