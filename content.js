// content.js - runs in the page context but we use popup.js to inject functions
// This file is required by manifest.json but we're handling all logic via popup.js scripting API
// Keeping this minimal to avoid conflicts

console.log('🐱 Catify content script loaded.');
// We store state on window object from injected functions, so nothing else needed here.
