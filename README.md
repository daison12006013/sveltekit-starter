# SvelteKit Projects

This project contains the lists of tools used

- [SvelteKit](https://github.com/sveltejs/kit)
- [TailwindCSS](https://tailwindcss.com/)
- [Laravel Sanctum](https://laravel.com/docs/sanctum)
  - To authenticate users thru cookie, mainly for SPA Applications

## DEMO

- [Admin](https://sveltekit-windmill-admin.vercel.app/)
- [Blog / Personal Site](https://daison.vercel.app/)

## Start the server and open the app in a new browser tab

- To build only for admin

```bash
$> ./make admin dev

# this is equivalent to
$> ROUTE_FOLDER=admin npm run dev
```

## Progress

- Separated templates
  - [x] Blog
  - [x] Admin
  - [x] SvelteKit Demo
- Separated components (inputs / tables, etc.)
- Cypress Testing

## Disclaimer

- (Admin UI) Most of the design was based originally from [Estevan Maito's](https://github.com/estevanmaito/windmill-dashboard)

## Framework Guides

- [Setup Laravel Sanctum](/guides/laravel-sanctum.md)
- ***Add yours here...***
