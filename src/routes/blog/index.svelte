<script lang="ts">
  import Github from '$icon/Github/Github.svelte'
  import ChevronBarExpand from '$icon/ChevronBarExpand/ChevronBarExpand.svelte'
  import Building from '$icon/Building/Building.svelte'
  import CardList from '$icon/CardList/CardList.svelte'

  const incube8Img =
    'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAA7CAYAAADxcPHqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyQTJFMjBBREQ0RTExRTNBNERFOUNFNjIyMTk5RTgzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyQTJFMjBCREQ0RTExRTNBNERFOUNFNjIyMTk5RTgzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJBMkUyMDhERDRFMTFFM0E0REU5Q0U2MjIxOTlFODMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTJBMkUyMDlERDRFMTFFM0E0REU5Q0U2MjIxOTlFODMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7IbAQHAAAMoklEQVR42uxdC3gV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'
</script>

<div class="container mx-auto">
  <div class="flex items-center w-full h-screen">
    <div class="text-center 2xl:text-left">
      <p class="text-white text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl">
        Hey! I'm <span class="font-bold">Daison!</span>
      </p>
      <p class="opacity-10 text-red-100 text-4xl md:text-6xl lg:text-8xl 2xl:text-10xl font-bold">
        A SOFTWARE ENGINEER
      </p>
    </div>
  </div>

  <div class="bg-white rounded-xl mx-3 md:mx-3 my-5 p-5">
    <div class="flex flex-col xl:flex-row items-center justify-center">
      <div class="xl:px-10">
        <img
          class="rounded-full w-40 xl:w-auto mx-auto shadow-md 2xl:shadow-2xl border-2 lg:border-5 2xl:border-8 border-gray-100"
          src="https://avatars.githubusercontent.com/u/4581415"
          alt="my-profile"
        />
      </div>
      <div class="xl:border-l border-gray-300 border-dashed text-center mt-5 xl:px-10">
        <h1 class="text-3xl">About Me</h1>
        <div class="xl:text-left">
          <p class="pt-5">
            <span class="pl-5" />I'm
            <a
              href="https://www.linkedin.com/in/daison-cari%C3%B1o-56319471"
              target="_blank"
              class="font-thin italic border-b border-gray-900">Daison Cariño</a
            > and currently working here in Singapore as a Senior Software Engineer and Co. Lead
          </p>

          <p class="pt-5">
            <span class="pl-5" />To give you a background about my life, I was born on Feb 22, 1991
            in the Philippines, when I was kid we're limited to what we have, the first time I
            touched a computer was when I was around ~8 years old and that computer was from my
            Uncle, my father tought me how to play that Solitaire thing in Windows NT, lmao.
          </p>

          <p class="pt-5">
            <span class="pl-5" />Fast forward, it all started there, the passion / appreciation on
            how games work, I'm fascinated with FPS and RPG games; when I am in High School and I am
            motivated to create one! (Hell no, I wasn't able to! LOL). Hence, I was able to create
            my own Street Fighter (simple sprite extracted online) and I wrote it in JavaSE in my
            University Years! And yes I'm one of the University who received a Best Software
            Engineering (of that year).
          </p>

          <p class="pt-5">
            <span class="pl-5" />Throughout my Career, I started as a Fullstack Engineer, so I still
            have knowledge with Frontend Techology (see this website? this is written in SvelteJS
            for your info), nowadays more on R&D and Architectural in the Backend Side and some
            DevOps knowledge too.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-sm my-5 p-5 hidden">
    <h1 class="text-3xl">Open Source Enthusiast</h1>
    <p class="pt-5">
      I've been following open source projects since in my High School years, one of them was gaming
      tools such as bots written in Perl and a game engine written in C++ that runs a private
      server.
    </p>
    <p class="pt-5">
      By then, I started to follow opensource projects, it all started in SourceForge and now in
      GitHub.
    </p>
  </div>

  <div class="text-center text-white py-5">
    <div class="inline-block">
      <ChevronBarExpand width="30" height="30" />
    </div>

    <h1 class="text-5xl font-bold tracking-widest italic mt-5">
      <span class="inline-block"><Building width="30" height="30" /></span>
      Companies
    </h1>
    <p class="text-sm">Lists of companies that I worked in the past and current.</p>
    <div class="">
      <div class="flex flex-wrap justify-center mt-5">
        <img
          class="h-24 w-auto bg-white p-3 m-3 rounded-lg"
          src="http://mamemimommy.com/wp-content/uploads/2015/01/Pilipinas-Teleserv-logo-2014-black.png"
          alt="Pilipinas Teleserv Inc."
        />
        <img
          style="background-color: #112761;"
          class="h-24 w-auto p-3 m-3 rounded-lg"
          src="https://files.vroomvroomvroom.com/cms/us/logo.svg"
          alt="VroomVroomVroom Pty. Ltd."
        />
        <img
          class="h-24 w-auto bg-white p-3 m-3 rounded-lg"
          src="https://plus65.com.sg/images/Plus65.png"
          alt="Plus65 Pte. Ltd."
        />
        <img
          class="h-24 w-auto bg-gray-900 p-3 m-3 rounded-lg"
          src={incube8Img}
          alt="Incube8 Pte. Ltd."
        />
      </div>

      <div
        class="text-left inline-block bg-gray-200 text-gray-900 mx-2 md:mx-0 py-1 px-3 rounded-sm"
      >
        <p>These companies may seem to be unreachable / down website</p>
        <ul class="list-disc pl-10 text-sm">
          <li>Samjang Tech</li>
          <li>Olive Drab Global Services</li>
        </ul>
      </div>
    </div>

    <div class="inline-block mt-16">
      <ChevronBarExpand width="30" height="30" />
    </div>

    <h1 class="text-5xl font-bold tracking-widest italic mt-5">
      <span class="inline-block"><CardList width="30" height="30" /></span>
      Projects
    </h1>
    <p class="text-sm">Lists of projects that I've worked out.</p>
    <div>TODO...</div>

    <h1 class="text-5xl font-bold tracking-widest italic mt-5">
      <span class="inline-block"><Github width="30" height="30" /></span>
      Open Source
    </h1>
    <p class="text-sm">Lists of opensource I am contributing with.</p>
    <div>TODO...</div>
  </div>
</div>
