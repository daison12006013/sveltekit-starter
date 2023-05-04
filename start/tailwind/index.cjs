// ---------------------------------------------------------
// SvelteKit Starter: here we determine based on the ./run
// runtime, in which we're passing the ROUTE_FOLDER as the
// input.
// ---------------------------------------------------------

let folder = process.env.ROUTE_FOLDER
let file = './daisy-ui.cjs'

switch (folder) {
	case 'admin':
	case 'admin-in':
	case 'admin-out':
		'./admin.cjs'
		break
}

module.exports = require(file)
