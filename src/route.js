// ---------------------------------------------------------
// SvelteKit Starter: here we determine based on the ./make
// runtime, in which we're passing the ROUTE_FOLDER as the
// input.
// ---------------------------------------------------------

let folder = process.env.ROUTE_FOLDER
let hooks = 'sveltekit-default'

switch (folder) {
	// this is a fake way to demonstrate logged in
	case 'admin':
	case 'admin-in':
		folder = 'admin'
		hooks = 'laravel-sanctum-fake-logged-in'
		break

	// this is a fake way to demonstrate logged out
	case 'admin-out':
		folder = 'admin'
		hooks = 'laravel-sanctum-fake-logged-out'
		break

	// check the give route folder if laravel sanctum
	// thus it will be re-routed to admin
	case 'admin-laravel-sanctum':
		folder = 'admin'
		hooks = 'laravel-sanctum'
		break

	case undefined:
		folder = 'demo'
		hooks = 'sveltekit-default'
		break
}

export default { folder, hooks }
