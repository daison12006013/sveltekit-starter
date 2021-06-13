<script lang="ts">
  import forgotPasswordOffice from '$lib/Templates/Admin/Images/forgot-password-office.jpeg'
  import forgotPasswordOfficeDark from '$lib/Templates/Admin/Images/forgot-password-office-dark.jpeg'

  const rands = ['', 'dark']
  const randCls = rands[Math.floor(Math.random() * rands.length)]
</script>

<section id="body" class={randCls}>
  <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div
      class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img
            aria-hidden="true"
            class="object-cover w-full h-full dark:hidden"
            src={forgotPasswordOffice}
            alt="Office"
          />
          <img
            aria-hidden="true"
            class="hidden object-cover w-full h-full dark:block"
            src={forgotPasswordOfficeDark}
            alt="Office"
          />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Forgot password
            </h1>
            <label class="block text-sm">
              <span class="text-gray-700 dark:text-gray-400">Email</span>
              <input
                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="Jane Doe"
              />
            </label>

            <!-- You should use a button here, as the anchor is only used for the example  -->
            <a
              class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              href="./login.html"
            >
              Recover password
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
