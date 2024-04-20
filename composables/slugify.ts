export function useSlugify() {
  const toSlug = (input: string) => {
    return input
      .toLowerCase() // LowerCase
      .replace(/\s+/g, '-') // space to -
      .replace(/&/g, '-and-') // & to and
      .replace(/--/g, '-'); // -- to -
  };

  return { toSlug };
}
