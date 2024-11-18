<!-- Create html template for form component -->
<template>
  <div class="justify-items-center mt-16">
    <!-- Create form '@submit' is the Vue syntax for an event listener -->
    <!-- Chaining ".prevent" is Vue syntax for "preventDefault()" -->
    <!-- onSubmit event triggers the "handleSubmit()" function -->
    <form
      @submit.prevent="handleSubmit"
      class="grid grid-col-1 border-2 border-black h-96 w-3/4 rounded-md bg-slate-100"
    >
      <!-- Label/text at the top of the form -->
      <label
        for="email"
        class="m-auto py-10 text-4xl font-extrabold"
        >Enter your email address:</label
      >
      <!-- Create input field for email -->
      <!-- ":class" is Vue syntax that binds "input-error" class if "emailError" is true -->
      <!-- "v-model" is Vue syntax that updates Vue "data()" object / two way data binding -->
      <!-- Since refactored to create a Vue "ref" variable so input could be cleared without changing state -->
      <input
        type="email"
        id="email"
        v-model="emailInput"
        :class="{ 'input-error': formStore.emailError }"
        class="mx-10 h-14 p-5 bg-slate-200 rounded-md block"
      />
      <!-- "v-if" is Vue syntax that allows for conditional rendering -->
      <!-- If "emailError == true" the span will render -->
      <span
        v-if="formStore.emailError"
        class="error-message"
        >Invalid email</span
      >
      <div class="grid grid-cols-3">
        <!-- Create form submit button -->
        <button
          class="bg-green-500 w-32 m-10 h-16 rounded-md"
          type="submit"
        >
          Submit
        </button>
        <!-- "v-if" allows for conditional rendering if "completed == true" in Vue data() object -->
        <!-- refactored to look for formStore object state -->
        <div
          v-if="formStore.isCompleteDisplay"
          class="m-10 text-center text-green-500 font-bold text-4xl"
        >
          Complete!
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// Import "formStore" from "formStore.js"
import { useFormStore } from '../stores/formStore';
import { ref } from 'vue';

// Refactor to use formStore not data() object
export default {
  setup() {
    // Create/call formStore variable/function
    const formStore = useFormStore();

    const emailInput = ref('');
    // Refactor handleSubmit()
    const handleSubmit = () => {
      // Validat email input "value"
      if (validateEmail(emailInput.value)) {
        // Initiate "complete" message to display by setting to true
        formStore.setIsCompleteDisplay(true);
        // Set email state in formStore
        formStore.setEmail(emailInput.value);
        // Display current State in console
        console.log('Current State: ', formStore.$state);
        // Clear input field
        emailInput.value = '';
        // Clear complete message after 5 seconds
        setTimeout(() => {
          formStore.setIsCompleteDisplay(false);
        }, 5000);
      } else {
        // Initiate error message to display and print current state in console
        formStore.setEmailError(true);
        console.log('Current State: ', formStore.$state);
      }
    };
    // Validate Email
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    return {
      formStore,
      handleSubmit,
      emailInput,
    };
  },
};
</script>

<!-- Inline style for conditionally rendered components cuz my tailwind.css skill aren't quite there yet -->
<style>
.input-error {
  border: 1px solid red;
}
.error-message {
  color: red;
  font-size: 0.875em;
}
.completion-message {
  margin-top: 20px;
  font-weight: bold;
  color: green;
}
</style>
