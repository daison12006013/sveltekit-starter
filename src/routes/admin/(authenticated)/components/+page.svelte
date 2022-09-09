<script lang="ts">
  import DocAccordion from '$lib/components/Docs/DocAccordion.svelte'
  import DocAlert from '$lib/components/Docs/DocAlert.svelte'
  import DocBadge from '$lib/components/Docs/DocBadge.svelte'
  import Breadcrumb from '$lib/components/Breadcrumb.svelte'
  import ButtonGroup from '$lib/components/ButtonGroup.svelte'
  import Card from '$lib/components/Card.svelte'
  import Carousel from '$lib/components/Carousel.svelte'
  import CloseButton from '$lib/components/CloseButton.svelte'
  import Code from '$lib/components/Code.svelte'
  import Collapse from '$lib/components/Collapse.svelte'
  import Dropdowns from '$lib/components/Dropdowns.svelte'
  import ListGroup from '$lib/components/ListGroup.svelte'
  import Modal from '$lib/components/Modal.svelte'
  import NavsAndTabs from '$lib/components/NavsAndTabs.svelte'
  import Pagination from '$lib/components/Pagination.svelte'
  import Popovers from '$lib/components/Popovers.svelte'
  import Spinners from '$lib/components/Spinners.svelte'
  import Toasts from '$lib/components/Toasts.svelte'
  import Tooltips from '$lib/components/Tooltips.svelte'

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
