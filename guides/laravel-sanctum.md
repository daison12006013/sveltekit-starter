# SvelteKit + Laravel Sanctum Setup

Install sanctum under your laravel

```bash
laravel/ :~$ composer require laravel/sanctum
```

Add a new route group under your `app/Http/Kernel.php`

```php
'api' => [
   \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
   'throttle:api',
   \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```

Under `routes/api.php`

```php
Route::middleware('auth:sanctum')->group(['middleware' => 'auth:sanctum'], function () {
  Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email'    => ['required', 'email'],
        'password' => ['required'],
    ]);

    return response()->json(['authenticated' => Auth::attempt($credentials)]);
  });

  Route::get('/logged-in', function (Request $request) {
    return response()->json([
      'user' => $request->user()->only('id', 'email', 'first_name', 'last_name', 'image'),
    ]);
  });

  Route::match(['get', 'post'], '/logout', function (Request $request) {
    \Illuminate\Support\Facades\Auth::logout();
    return response()->json(['authenticated' => false]);
  });
});
```

The above code, we serve 3 routes, that is `/login`, `/logged-in` and `/logout`

## SvelteKit Starter Configuration

Update the `hooks` inside **svelte.config.js**

```diff
- hooks: `src/hooks/laravel-sanctum-fake-logged-in.ts`,
+ hooks: `src/hooks/laravel-sanctum.ts`,
```

Copy `.env.example` and make it `.env`

```bash
sveltekit-starter/ :~$ cp .env.example .env
```

Then update the `VITE_BASE_API` based on your laravel url.

### How the hooks work?

To explain about `laravel-sanctum.js` file

- it will check if there are `locals.user` loaded, or else it fetches to your laravel endpoint `/logged-in`  and passing the **user** object inside **locals.user**
- then, if `laravel_session` does not exists, it will fetch `/sanctum/csrf-cookie` and sets the cookie
