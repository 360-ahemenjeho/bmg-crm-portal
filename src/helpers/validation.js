/**
 * Validate if a string is a valid email.
 * @param {string} value
 * @returns {boolean}
 */
export function validateEmail(value) {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Validate password strength.
 * Requires uppercase, lowercase, number, and special symbol.
 * @param {string} password
 * @returns {boolean}
 */
export function validatePassword(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialSymbol = /[!@#$%^&*(),\-.?":{}|<>]/.test(password);

  return hasUppercase && hasLowercase && hasNumber && hasSpecialSymbol;
}

/**
 * Validate a phone number.
 * Allows optional "+" and 7–12 digits.
 * @param {string} number
 * @returns {boolean}
 */
export function validatePhoneNumber(number) {
  if (!number) return false;
  return /^\+?[1-9]\d{6,11}$/.test(number);
}
