const electron = require('electron')

const { app, ipcMain } = electron
const { BrowserWindow } = electron
const isDev = require('electron-is-dev')
require('electron-reload')
const path = require('path')

let mainWindow = null

const { autoUpdater } = require('electron-updater')
/**
 * Creates the main window which is displayed on window activation
 */
const createWindow = () => {
	mainWindow = new BrowserWindow({
		'width': 800,
		'height': 600,
		'webPreferences': { 'nodeIntegration': true }
	})

	mainWindow.loadURL(isDev ?
		'http://localhost:3000' :
		`file://${path.join(__dirname, '../build/index.html')}`)

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

/**
 * An event that is emitted once electron has finished initialising
 */
app.on('ready', () => {
	createWindow()
	autoUpdater.checkForUpdatesAndNotify()
})

/**
 * An event that is emitted on all windows have been closed
 */
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})

/**
 * An event that is emitted when the application is launched (either the first time or whilst the application is open)
 */
app.on('activate', () => {
	if (mainWindow === null) createWindow()
})

autoUpdater.on('update-available', () => {
	mainWindow.webContents.send('update_available')
})
autoUpdater.on('update-downloaded', () => {
	mainWindow.webContents.send('update_downloaded')
})

app.on('ready-to-show', () => {
	autoUpdater.checkForUpdatesAndNotify()
})

ipcMain.on('restart_app', () => {
	autoUpdater.quitAndInstall();
});
