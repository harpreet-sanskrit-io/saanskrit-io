<script>
// @ts-nocheck

	import { db } from '$lib/db';


	let camps = [1, 2];

  let create_new = false;
  function toggle_create_new(){
    create_new = !create_new
  }

  let pd = {
    page_name: '',
    page_title: '',
    page_desc: '',
    page_layout: '',
    page_sec_scheme: '',
  }
  

  let page_red;
  let page = [];

  async function db_get_page(){
     page = await db.select('page');
  }

  async function db_create_page(){
     page_red = await db.create('page:' + pd.page_name.trim() , 
      {
        page_name: pd.page_name.trim(),
        page_title: pd.page_title.trim(),
        page_desc: pd.page_desc.trim(),
        page_layout: pd.page_layout.trim(),
        page_sec_scheme: pd.page_sec_scheme.trim(),  
       }
    )
    db_get_page()
  }

  db_get_page();


</script>

<main class="lg:pl-20">
	<div class="xl:pl-96">
		<div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
			<!-- Main area -->
			<header	class="flex items-center justify-between border-b border-gray-200 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
				<h2 class="text-base font-semibold leading-7 text-gray-900">Pages</h2>
        <div class="flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button on:click={db_create_page} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
			</header>


  <div class="">
    <div class="border-b border-gray-900/10 py-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">General Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Page details, name should be unique.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="page-name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <input bind:value={pd.page_name}     type="text" id="page-name" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="page-title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
          <div class="mt-2">
            <input  bind:value={pd.page_title} type="text"  id="page-title" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="page-desc" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <div class="mt-2">
            <input  bind:value={pd.page_desc} id="page-desc" type="text" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="page-layout" class="block text-sm font-medium leading-6 text-gray-900">Layout</label>
          <div class="mt-2">
            <select  bind:value={pd.page_layout}  id="page-layout" name="country" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Flowers</option>
              <option>Candy</option>
              <option>Merino</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b border-gray-900/10 py-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Security Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Use required scheme or left blank for access to anyone.</p>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="page-sec-scheme" class="block text-sm font-medium leading-6 text-gray-900">Security Scheme</label>
          <div class="mt-2">
            <select   bind:value={pd.page_sec_scheme}  id="page-sec-scheme" name="country" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Admin</option>
              <option>Editor</option>
              <option>Reader</option>
            </select>
          </div>
        </div>
      </div>
    </div>

  </div>





      <div class="whitespace-pre">
			{JSON.stringify(db, null , '\t')}
      </div>

      <div class="whitespace-pre mt-20 hidden">
        {JSON.stringify(page, null , '\t')}
        </div>
		</div>
	</div>
</main>

<aside
	class="fixed inset-y-0 left-20 hidden w-96 overflow-y-auto scroll-smooth  scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block"
>
	<!-- Secondary column (hidden on smaller screens) -->
	<header
		class="flex items-center justify-between border-b border-gray-200 px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
	>
		<h2 class="text-base font-semibold leading-7 text-gray-900">Pages</h2>
    {#if !create_new}
		<button  on:click="{toggle_create_new}" class="text-sm font-semibold leading-6 text-indigo-400">+ New</button>
    {/if}
	</header>
	<!-- Deployment list -->
	<ul class="divide-y divide-gray-100">
		{#each page as p}
			<li class="flex justify-between gap-x-6 py-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm font-semibold leading-6 text-gray-900">{p.page_name}</p>
						<p class="mt-1 truncate text-xs leading-5 text-gray-500" />
					</div>
				</div>
			</li>
		{/each}
	</ul>
</aside>
