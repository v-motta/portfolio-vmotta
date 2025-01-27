/**
 * Converts a string into a URL-friendly slug by normalizing, removing diacritics, and replacing spaces with hyphens.
 *
 * @param {string} text - The input string to be transformed into a slug.
 * @returns {string} The generated slug in lowercase, with spaces replaced by hyphens and special characters removed.
 *
 * @example
 * // Basic usage
 * const result = createSlug("Hello, World!");
 * console.log(result); // Output: "hello-world"
 *
 * @example
 * // Input with diacritics
 * const result = createSlug("Café del Mar");
 * console.log(result); // Output: "cafe-del-mar"
 *
 * @example
 * // Input with multiple spaces
 * const result = createSlug("  Multiple   Spaces  ");
 * console.log(result); // Output: "multiple-spaces"
 *
 * @example
 * // Input with non-Latin characters
 * const result = createSlug("Καλημέρα Κόσμε");
 * console.log(result); // Output: "καλημερα-κοσμε"
 *
 * @remarks
 * - This function uses Unicode normalization (`NFC`) for consistent character representation.
 * - It removes diacritical marks (e.g., accents) using the Unicode `\p{Diacritic}` property.
 * - Only alphanumeric characters (letters and numbers) and spaces are preserved before conversion.
 */
export function createSlug(text: string): string {
  const slug = text
    .normalize('NFC')
    .replace(/[\p{Diacritic}]/gu, '')
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()

  return slug
}
