export const shortenString = (
  text: string | null | undefined,
  prefix: number,
  suffix: number
) => {
  if (text) {
    const firstStrings = text.slice(0, prefix);
    const lastStrings = text.slice(-suffix);
    const formatString = firstStrings + "..." + lastStrings;
    return formatString;
  }
  return "non-text";
};
