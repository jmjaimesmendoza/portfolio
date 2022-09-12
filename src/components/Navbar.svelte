
<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    let navBtn: HTMLElement;
    let menubar: HTMLElement;
    let flag = false;
    let theme = localStorage.getItem("theme") ??  "light";
    const themeClick = () => {
      theme = theme === "light" ? "dark" : "light";
    }
    $: if (flag) {      
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }

    onMount(() => {
      flag = true;
      navBtn.addEventListener('click' , () => {
        const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded') ?? 'false');
        navBtn.setAttribute('aria-expanded', (!isExpanded).toString());
        menubar.classList.toggle('hidden');
        menubar.classList.toggle('flex');
      })
    })
  </script>
<nav class="
  flex
  px-2
  py-2
  text-snow2
  justify-between
  items-center
  bg-night1
  border-b-2
border-night2
  dark:bg-opacity-75
  dark:backdrop-filter
  dark:backdrop-blur
  sticky
  top-0
  z-10
">
  <a href="/" class="
      px-2  
      focus:outline-none
      focus-visible:ring-4
      transition
      ring-aurora1
      dark:ring-frost1
      rounded-sm
      ring-offset-4
      ring-offset-night1
      text-lg
    "
  aria-label="Go to homepage">Juan Martín Jaimes Mendoza</a>
  <button
    bind:this={navBtn}
    id="menu"
    class="
      absolute
      top-2
      right-10
      md:hidden
      focus:outline-none
      focus-visible:ring-4
      transition
      ring-aurora1
      dark:ring-frost1
      rounded-sm
      ring-offset-night1
      ring-offset-4
      "
    aria-expanded="false"
    aria-label="open menu">            
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    </svg>     
  </button>

  <ul role="menubar" bind:this={menubar} class="
    hidden
    animate-openmenu
    bg-night2
    flex-col
    absolute
    left-0
    right-0
    top-[2.8rem]
    text-center
    px-6
    py-4
    items-center
    md:flex
    md:bg-transparent
    md:flex-row
    md:static
    md:justify-between
  ">
    <li class="md:ml-auto">
      <a role="menuitem" sveltekit:prefetch href="https://github.com/jmjaimesmendoza/portfolio" class="                      
      px-4
      flex
      items-center
      focus:outline-none
      transition
      focus-visible:ring-4
      ring-aurora1
      dark:ring-frost1
      rounded-sm
      ring-offset-4
      ring-offset-night2
      md:ring-offset-night1
      hover:text-aurora1
      hover:underline
      group     
      underline-offset-2
      mb-4
      md:mb-0
      md:-mr-3
      "
      >
      <svg role="img" class="w-6 h-6 mr-3 transition stroke-transparent fill-snow2 group-hover:fill-aurora1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      Source</a>   
    </li>
    <li class="md:ml-auto">
      <a role="menuitem" sveltekit:prefetch href="/" class="                      
      px-4
      focus:outline-none
      transition
      focus-visible:ring-4
      ring-aurora1
      dark:ring-frost1
      rounded-sm
      ring-offset-4
      ring-offset-night2
      md:ring-offset-night1
      hover:text-aurora1
      hover:underline          
      underline-offset-2
      "
      >Contact</a>
    </li>               
  </ul>
  <button on:click={themeClick} class="focus:outline-none
  focus-visible:ring-4
  transition
  ring-aurora1
  dark:ring-frost1
  ring-offset-4
  ring-offset-night1 rounded-sm absolute right-2 top-3.5 md:top-[1.63rem]">
    {#if theme === "light"}
    <img in:fade src="/moon.svg" class=" hover:animate-pulse bounce w-5 fill-snow2" alt="">
    {:else}
    <img in:fade src="/sun.svg" class="w-6 hover:animate-spin" alt="">
    {/if}
  </button>
</nav>