import { defineStore } from 'pinia';

interface IAuthStore {
  email: string;
  name: string;
  status: boolean;
}

const initialValue: { user: IAuthStore } = {
  user: {
    email: '',
    name: '',
    status: false,
  },
};

export const authStore = defineStore('auth', {
  state: () => initialValue,
  getters: {
    isAuth: (state) => state.user.status,
  },
});
