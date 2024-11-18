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
      <input
        type="email"
        id="email"
        v-model="email"
        :class="{ 'input-error': emailError }"
        class="mx-10 h-14 p-5 bg-slate-200 rounded-md block"
      />
      <!-- "v-if" is Vue syntax that allows for conditional rendering -->
      <!-- If "emailError == true" the span will render -->
      <span
        v-if="emailError"
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
        <div
          v-if="completed"
          class="m-10 text-center text-green-500 font-bold text-4xl"
        >
          Complete!
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// Create/export data object to App.vue
export default {
  data() {
    return {
      email: '',
      emailError: false,
      completed: false,
    };
  },
  // Methods is an object that holds functions
  methods: {
    // Create a function to validate email
    validateEmail(email) {
      // Regex code to validate a valid email format was used
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      //   Testing the "email" property in the Vue data() object returning a boolean
      return emailRegex.test(email);
    },
    // Create a function to "handleSubmit" of form data entered
    handleSubmit() {
      // If statement to check that if "validateEmail == true"
      if (this.validateEmail(this.email)) {
        // If true "emailError" is set to false and "completed" is set to true in Vue data() object
        this.emailError = false;
        this.completed = true;
        // Setting a "user/email" key/value in local storage
        localStorage.setItem('user', this.email);
        // Printing "email" value from local storage
        console.log(localStorage.getItem('user'));
        // If "validateEmail == false" setting "emailError == true" and "completed == false" in Vue data() object
      } else {
        this.emailError = true;
        this.completed = false;
      }
    },
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
