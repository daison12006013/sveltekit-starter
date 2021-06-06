<svelte:head>
  <title>Tables</title>
</svelte:head>

<main class="h-full pb-16 overflow-y-auto">
  <div class="container grid px-6 mx-auto">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Tables</h2>
    <!-- CTA -->
    <a
      class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
      href="https://github.com/daison12006013/sveltekit-windmill-admin"
    >
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
        <span>Star this project on GitHub</span>
      </div>
      <span>View more &RightArrow;</span>
    </a>

    <!-- With avatar -->
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Table with avatars</h4>
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr
              class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            >
              <th class="px-4 py-3">Client</th>
              <th class="px-4 py-3">Amount</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Hans Burger</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Jolina Angelie</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Unemployed</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 369.95 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
                >
                  Pending
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Sarah Curry</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Designer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 86.00 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                >
                  Denied
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Rulia Joberts</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Actress</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 1276.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Wenzel Dashington</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Actor</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
                >
                  Expired
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Dave Li</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Influencer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Maria Ramovic</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Runner</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Hitney Wouston</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Singer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Hans Burger</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
      >
        <span class="flex items-center col-span-3"> Showing 21-30 of 100 </span>
        <span class="col-span-2" />
        <!-- Pagination -->
        <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul class="inline-flex items-center">
              <li>
                <button
                  class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                  aria-label="Previous"
                >
                  <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  1
                </button>
              </li>
              <li>
                <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  2
                </button>
              </li>
              <li>
                <button
                  class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                >
                  3
                </button>
              </li>
              <li>
                <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  4
                </button>
              </li>
              <li>
                <span class="px-3 py-1">...</span>
              </li>
              <li>
                <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  8
                </button>
              </li>
              <li>
                <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  9
                </button>
              </li>
              <li>
                <button
                  class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                  aria-label="Next"
                >
                  <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                    <path
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </span>
      </div>
    </div>

    <!-- With actions -->
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Table with actions</h4>
    <div class="w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr
              class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            >
              <th class="px-4 py-3">Client</th>
              <th class="px-4 py-3">Amount</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Hans Burger</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Jolina Angelie</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Unemployed</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 369.95 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
                >
                  Pending
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Sarah Curry</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Designer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 86.00 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                >
                  Denied
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Rulia Joberts</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Actress</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 1276.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Wenzel Dashington</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Actor</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
                >
                  Expired
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Dave Li</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Influencer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Maria Ramovic</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Runner</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Hitney Wouston</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">Singer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>

            <tr class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <!-- Avatar with inset shadow -->
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="font-semibold">Hans Burger</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm"> $ 863.45 </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-3 text-sm"> 6/10/2020 </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      />
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
      >
        <span class="flex items-center col-span-3"> Showing 21-30 of 100 </span>
        <span class="col-span-2" />
        <!-- Pagination -->
        <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul class="inline-flex items-center">
              <li>
                <button
                  class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                  aria-label="Previous"
                >
                  <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  1
                </button>
              </li>
              <li>
                <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  2
                </button>
              </li>
              <li>
                <button
                  class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                >
                  3
                </button>
              </li>
              <li>
                <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  4
                </button>
              </li>
              <li>
                <span class="px-3 py-1">...</span>
              </li>
              <li>
                <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  8
                </button>
              </li>
              <li>
                <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  9
                </button>
              </li>
              <li>
                <button
                  class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                  aria-label="Next"
                >
                  <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                    <path
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </span>
      </div>
    </div>
  </div>
</main>
