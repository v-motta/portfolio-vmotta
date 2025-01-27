/**
 * Converts a string to lowercase and removes all non-alphabetic characters.
 *
 * @param {string} text - The input string to be transformed.
 * @returns {string} The cleaned string in lowercase with special characters removed.
 *
 * @example
 * // Basic usage
 * const result = getCleanText("Hello, World!");
 * console.log(result); // Output: "helloworld"
 *
 * @example
 * // Input with numbers and symbols
 * const result = getCleanText("TypeScript 4.0!");
 * console.log(result); // Output: "typescript"
 *
 * @remarks
 * - This function is useful when you need a simplified, clean version of a string.
 * - It removes everything except alphabetic characters (a-z).
 */
export function getCleanText(text: string): string {
  const cleanText = text.toLowerCase().replace(/[^a-z]/g, '')

  return cleanText
}
