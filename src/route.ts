/**
 * List of public routes that do not require authentication
 * @type {string[]}
 */
export const isPublicRoute = ["/", "/about", "/contact"];

/**
 * List of authentication-related routes
 * @type {string[]}
 */
export const isAuthRoute = ["/login", "/verify-email"];

/**
 * List of protected routes that require authentication
 * @type {string[]}
 */
export const isProtectedRoute = ["/home", "/profile", "/settings"];

/**
 * Default redirect URL after successful login
 * @type {string}
 */
export const DEFAULT_REDIRECT_URL = "/home";
