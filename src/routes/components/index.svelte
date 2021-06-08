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
</script>

<svelte:head>
  <title>Components</title>
</svelte:head>

<div class="container px-6 mx-auto grid">
  <div class="pb-5">
    <span class="text-xl">Accordion</span>
    <Accordion />
  </div>
  <div class="pb-5">
    <span class="text-xl">Alerts</span>
    <Alert append="mt-2" type="primary" />
    <Alert append="mt-2" type="secondary" />
    <Alert append="mt-2" type="success" />
    <Alert append="mt-2" type="danger" />
    <Alert append="mt-2" type="warning" />
    <Alert append="mt-2" type="info" />
    <Alert append="mt-2" type="light" />
    <Alert append="mt-2" type="dark" />

    <hr />

    <div class="mt-5">&#42; Square</div>
    <Alert type="dark" isRounded={false} />
    <div class="mt-5">&#42; Small Rounded Corner</div>
    <Alert type="dark" isRounded={true} roundedSize="sm" />
    <div class="mt-5">&#42; Large Rounded Corner</div>
    <Alert type="dark" isRounded={true} roundedSize="lg" />
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
