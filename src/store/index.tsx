import { create } from "zustand";

interface LanguageStore {
  language: "ar" | "fa" | "en";
  direction: "rtl" | "ltr";
  setLanguage: (lang: LanguageStore["language"]) => void;
}

interface LoadingState {
  progress: number;
  randomDuration: number;
  isLoadingShow: boolean;
  setProgress: (value: number) => void;
  setRandomDuration: (ms: number) => void;
  setIsLoadingShow: (show: boolean) => void;
}

interface HeaderStore {
  isHeaderShow: boolean;
  setIsHeaderShow: (show: boolean) => void;
}

interface ContextMenuStore {
  isContextMenuShow: boolean;
  setIsContextMenuShow: (show: boolean) => void;
}

interface ThemeStore {
  theme: "light" | "dark";
  setTheme: (theme: ThemeStore["theme"]) => void;
}

const useStore = create<LanguageStore>((set) => ({
  language: "en",
  direction: "ltr",

  setLanguage: (lang) => {
    setTimeout(() => {
      set({
        language: lang,
        direction: lang === "en" ? "ltr" : "rtl",
      });
    }, 300);
  },
}));

const useLoadingStore = create<LoadingState>((set) => ({
  progress: 0,
  randomDuration: 0,
  isLoadingShow: true,
  setProgress: (value) => set({ progress: value }),
  setRandomDuration: (ms) => set({ randomDuration: ms }),
  setIsLoadingShow: (show) => set({ isLoadingShow: show }),
}));

const useHeaderStore = create<HeaderStore>((set) => ({
  isHeaderShow: false,
  setIsHeaderShow: (show) => set({ isHeaderShow: show }),
}));

const useContextMenuStore = create<ContextMenuStore>((set) => ({
  isContextMenuShow: true,
  setIsContextMenuShow: (show) => set({ isContextMenuShow: show }),
}));

const useThemeStore = create<ThemeStore>((set) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));

export {
  useStore,
  useLoadingStore,
  useHeaderStore,
  useContextMenuStore,
  useThemeStore,
};
