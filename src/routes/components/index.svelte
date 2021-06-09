<script lang="ts">
  import Accordion from '$lib/Components/Accordion.svelte'
  import Alert from '$lib/Components/Alert.svelte'
  import Badge from '$lib/Components/Badge.svelte'
  import Breadcrumb from '$lib/Components/Breadcrumb.svelte'
  import ButtonGroup from '$lib/Components/ButtonGroup.svelte'
  import Card from '$lib/Components/Card.svelte'
  import Carousel from '$lib/Components/Carousel.svelte'
  import CloseButton from '$lib/Components/CloseButton.svelte'
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

  import { isDark, toggleTheme } from '$stores/menus'
</script>

<svelte:head>
  <title>Components</title>
</svelte:head>

<main class="h-full overflow-y-auto">
  <div class="bg-gray-50 dark:bg-gray-900 dark:text-white">
    <div class="container px-6 mx-auto grid">
      <div class="mt-5 pb-5">
        <span class="text-xl">Accordion</span>
        <Accordion type="danger" />
      </div>

      <div class="pb-5">
        <span class="text-xl">Alerts</span>
        <Alert type="primary" />
        <Alert type="secondary" />
        <Alert type="success" />
        <Alert type="danger" />
        <Alert type="warning" />
        <Alert type="info" />
        <Alert type="light" />
        <Alert type="dark" />
      </div>

      <Badge />
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
