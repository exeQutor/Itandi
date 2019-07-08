document.querySelector('#btnCapture').addEventListener('click', () => {
	window.postMessage('captureRequest');
})

window.addEventListener('message', (e) => {
	if (e.source !== window) return
	if (e.data.type === 'captureResponse') {
		console.log('renderer ...', e)
		console.log(e.data.content)
		showCapturedImage(e.data.content);
	}
})

function showCapturedImage(image) {
	const img = document.querySelector('img')
	img.src = image
}
