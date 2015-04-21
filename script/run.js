var electron = require('electron-prebuilt');
var proc = require('child_process');

// spawn electron
var child = proc.spawn(electron, ["."]);
