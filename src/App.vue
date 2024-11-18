<!-- Creating form component template container -->
<template>
  <div id="app">
    <FormComponent />
  </div>
</template>

<script>
// Importing data() object from "FormComponent.vue"
import FormComponent from './components/FormComponent.vue';
// Exporting component to main.js
export default {
  components: {
    FormComponent,
  },
};
</script>
