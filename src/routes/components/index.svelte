<script lang="ts">
  import DocAccordion from '$lib/Components/Docs/DocAccordion.svelte'
  import DocAlert from '$lib/Components/Docs/DocAlert.svelte'
  import DocBadge from '$lib/Components/Docs/DocBadge.svelte'
  import Breadcrumb from '$lib/Components/Breadcrumb.svelte'
  import ButtonGroup from '$lib/Components/ButtonGroup.svelte'
  import Card from '$lib/Components/Card.svelte'
  import Carousel from '$lib/Components/Carousel.svelte'
  import CloseButton from '$lib/Components/CloseButton.svelte'
  import Code from '$lib/Components/Code.svelte'
  import Collapse from '$lib/Components/Collapse.svelte'
  import Dropdowns from '$lib/Components/Dropdowns.svelte'
  import ListGroup from '$lib/Components/ListGroup.svelte'
  import Modal from '$lib/Components/Modal.svelte'
  import NavsAndTabs from '$lib/Components/NavsAndTabs.svelte'
  import Pagination from '$lib/Components/Pagination.svelte'
  import Popovers from '$lib/Components/Popovers.svelte'
  import Spinners from '$lib/Components/Spinners.svelte'
  import Toasts from '$lib/Components/Toasts.svelte'
  import Tooltips from '$lib/Components/Tooltips.svelte'

  const showScript = (elem: string) => {
    console.log(document.getElementById(elem).innerHTML)
  }
</script>

<svelte:head>
  <title>Components</title>
</svelte:head>

<main class="h-full overflow-y-auto">
  <div class="bg-gray-50 dark:bg-gray-900 dark:text-white">
    <div class="container px-6 mx-auto grid">
      <div class="mt-5 pb-5">
        <DocAccordion />
      </div>

      <hr />

      <div class="pb-5">
        <DocAlert />
      </div>

      <hr />

      <div class="pb-5">
        <DocBadge />
      </div>

      <hr />

      <Breadcrumb />
      <ButtonGroup />
      <Card />
      <Carousel />
      <CloseButton />
      <Collapse />
      <Dropdowns />
      <ListGroup />
      <Modal />
      <NavsAndTabs />
      <Pagination />
      <Popovers />
      <Spinners />
      <Toasts />
      <Tooltips />
    </div>
  </div>
</main>

<style>
  hr {
    @apply border;
    @apply text-gray-500;
    @apply m-10;
  }
</style>
