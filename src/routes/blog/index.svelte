<script lang="ts">
  import Alert from '$lib/Components/Alert.svelte'
  import ChevronBarExpand from '$icon/ChevronBarExpand/ChevronBarExpand.svelte'
  import Building from '$icon/Building/Building.svelte'
  import CardList from '$icon/CardList/CardList.svelte'
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
      <div class="flex items-center justify-center mt-5">
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
          class="h-24 w-auto bg-gray-800 p-3 m-3 rounded-lg"
          src="http://incube8.sg/images/logo_small.png"
          alt="Incube8 Pte. Ltd."
        />
      </div>

      <div class="text-left inline-block bg-gray-200 text-gray-900 py-1 px-3 rounded-sm">
        <p>These companies, it seems unreachable / down website</p>
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
    <p class="text-sm">Lists of the projects that I've worked out.</p>
    <div />
  </div>
</div>
