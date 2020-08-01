const electron = require('electron')

const { app } = electron
const { BrowserWindow } = electron

const path = require('path')

let mainWindow = null
/*
 *Require('update-electron-app')({
 * 	'repo': 'kitze/react-electron-example',
 * 	'updateInterval': '1 hour'
 *})
 */

function createWindow() {
	mainWindow = new BrowserWindow({ 'width': 900, 'height': 680, 'webPreferences': { 'nodeIntegration': true } })
	mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
	if (mainWindow === null) createWindow()
})
