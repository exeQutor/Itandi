const { clipboard } = require('electron')

window.addEventListener('message', (e) => {
	if (e.source !== window) return
	if (e.data === 'captureRequest') {
		console.log('preload ...', e)
		window.postMessage({ type: 'captureResponse', content: getCapturedImage() })
	}
})

function getCapturedImage() {
	const image = clipboard.readImage()
	return image.toDataURL()
}