export default function handleResponseFromAPI(promise) {
	promise.then((results) => {
		return {
			status: 200,
			body: 'success',
		}
	}).then((results) => {
		console.log('Got a response from the API');
	}).catch((error) => {
		console.error(error);
	});
}
