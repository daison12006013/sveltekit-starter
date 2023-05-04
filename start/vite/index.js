// ---------------------------------------------------------
// SvelteKit Starter: here we determine based on the ./run
// runtime, in which we're passing the ROUTE_FOLDER as the
// input.
// ---------------------------------------------------------

let folder = process.env.ROUTE_FOLDER
let config = {}

switch (folder) {
	case 'my-custom-vite':
		// override the config
		break
}

export default config
