interface ThemeState {
  currentTheme: "light" | "dark";
}

const initialState: ThemeState = {
  currentTheme: "light",
};

const themeReducer = (state = initialState, action: any): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        currentTheme: state.currentTheme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default themeReducer;
