export const actLocale = (locale) => {
  return {
    type: "CHANGE_LOCALE",
    payload: locale,
  };
};
export const actDarkMode = (mode) => {
  return {
    type: "CHANGE_DARK_MODE",
    payload: mode,
  };
};
