import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    email: '',
    isCompleteDisplay: false,
    emailError: false,
  }),
  actions: {
    setEmail(newEmail) {
      this.email = newEmail;
    },
    setIsCompleteDisplay(status) {
      this.isCompleteDisplay = status;
    },
    setEmailError(status) {
      this.emailError = status;
    },
  },
});
