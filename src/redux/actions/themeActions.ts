export const TOGGLE_THEME = 'TOGGLE_THEME';

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

export const toggleTheme = (): ToggleThemeAction => {
  return {
    type: TOGGLE_THEME
  };
};

export type ThemeActions = ToggleThemeAction;