# SvelteKit Projects

- [./run and src/route.js](#run-and-srcroutejs)
- [Playwright Test Cases](#playwright-test-cases)
- [Demo](#demo)
- [Framework Specific Guidelines](#framework-specific-guidelines)
- [Disclaimer](#disclaimer)

The copy of this branch should have at least the `v1.15.10` of `@sveltejs/kit`

## ./run and src/route.js

Dynamic way of serving the `./src/routes/admin`, we've added a condition inside our `start/route.js` to pre-determine the folder we want.

```bash
# this demonstrates a fake logged in
$> ./run admin dev
$> ./run admin-in dev

# this demonstrates a fake logged out
$> ./run admin-out dev

# this connects to your laravel sanctum
$> ./run admin-laravel-sanctum dev
```

The above command is similar to what it looks like below

```bash
$> ROUTE_FOLDER=admin npm run dev
```

We've stored more route projects, such as the original `demo` of sveltekit and my own resumé `blog`

```bash
# this demonstrates my bio and resumé
$> ./run blog dev

# this demonstrates the original sveltekit counter + todo
$> ./run demo dev
```

## Playwright Test Cases

When writing a test cases, rule of thumb is to name your tests with/by specific words, such as **"demo:"**

```js
// tests/demo.js
test('demo: about page has expected h1', async ({ page }) => {
 // ...
});
```

Then you can run specific folders by executing it this way

```bash
./run demo test -- -g "demo:"
```

## Demo

- [Admin logged-in](https://sveltekit-windmill-admin.vercel.app/)
- [Admin logged-out](https://sveltekit-windmill-admin-out.vercel.app/)
- [Bio / Resumé](https://daison.vercel.app/)

## Framework Specific Guidelines

- [Setup Laravel Sanctum](/guides/laravel-sanctum.md)
- ***You have backend framework? Add your sveltekit guidelines here!***

## Disclaimer

- (Admin UI) Most of the design was based originally from [Estevan Maito's](https://github.com/estevanmaito/windmill-dashboard)
