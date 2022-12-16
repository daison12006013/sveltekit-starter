# SvelteKit Projects
redeploy from master

The copy of this branch should have at least the `v1.0.0-next.480` of `@sveltejs/kit`

## ./make and src/route.js

Dynamic way of serving the `./src/routes/admin`, we've added a condition inside our `src/route.js` to pre-determine the folder we want.

```bash
# this demonstrates a fake logged in
$> ./make admin dev
$> ./make admin-in dev

# this demonstrates a fake logged out
$> ./make admin-out dev

# this connects to your laravel sanctum
$> ./make admin-laravel-sanctum dev
```

The above command is similar to what it looks like below

```bash
$> ROUTE_FOLDER=admin npm run dev
```

We've stored more route projects, such as the original `demo` of sveltekit and my own resumé `blog`

```bash
# this demonstrates my bio and resumé
$> ./make blog dev

# this demonstrates the original sveltekit counter + todo
$> ./make demo dev
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
