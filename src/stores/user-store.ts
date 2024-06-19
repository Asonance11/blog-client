import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserStore {
  isLoggedIn: boolean;
  userLogin: () => void;
  logout: () => void;
}

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      isLoggedIn: false,
      userLogin: () => {
        const userLocalStorage = localStorage.getItem("token");
        if (userLocalStorage) {
          set({ isLoggedIn: true });
        }
      },
      logout: () => {
        set({ isLoggedIn: false });
        localStorage.clear();
      },
    }),
    {
      name: "userStore",
    },
  ),
);
