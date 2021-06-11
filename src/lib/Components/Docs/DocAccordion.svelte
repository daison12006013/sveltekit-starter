<script lang="ts">
  import Accordion from '$lib/Components/Accordion.svelte'
  import AccordionItem from '$lib/Components/AccordionItem.svelte'
  import Code from '$lib/Components/Code.svelte'
</script>

<span class="text-xl">Accordion</span>
<Accordion>
  <AccordionItem title="Normal text accordion" type="primary"
    >Eu laboris officia dolore non anim qui fugiat duis. Consectetur anim consequat commodo
    excepteur dolor commodo sint proident eu deserunt ea incididunt minim sint. Aliqua dolor tempor
    ex dolore magna tempor ullamco sunt sit sit veniam. Nisi proident cupidatat labore aliqua minim.
    Eiusmod ad laborum commodo elit anim cupidatat elit quis.</AccordionItem
  >
  <AccordionItem title="HTML Accordion" type="danger" show={true}>
    My 2nd accordition with html element
    <div>
      <p class="text-xs">
        Esse labore dolore reprehenderit est laboris labore. Deserunt pariatur nisi enim nulla elit
        minim laborum sunt sunt labore duis sit. Dolore incididunt minim eu est dolor velit
        adipisicing deserunt labore. Culpa aute nostrud magna aliqua exercitation reprehenderit sunt
        sit.
      </p>
      <strong>strong</strong>
      <i>italic</i>
    </div>
  </AccordionItem>
</Accordion>

<h3 class="text-sm mt-2">Example:</h3>
<Code language="svelte">
  {"import Accordion from '$lib/Components/Accordion.svelte'"}<br />
  {"import AccordionItem from '$lib/Components/AccordionItem.svelte'"}<br /><br />
  {'// can be (primary, secondary, success, danger, warning, info, light, dark)'}<br />
  {"let type = 'danger'"}<br />
  <br />
  {'<Accordion>'}<br />
  &nbsp;&nbsp;{'<AccordionItem type show={true}>Text or HTML element here..</Accordion>'}<br />
  &nbsp;&nbsp;{'<AccordionItem type="light" show={false}>Text or HTML element here..</Accordion>'}<br
  />
  {'</Accordion>'}
</Code>
