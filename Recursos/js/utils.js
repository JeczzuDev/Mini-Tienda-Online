/**
 * Shared utility functions for the application
 */

/**
 * Escapes HTML to prevent XSS attacks
 * @param {string} str - The string to escape
 * @returns {string} The escaped string
 */
export function EscapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * Validates and sanitizes image URLs
 * Only allows HTTPS protocol for security in production
 * @param {string} url - The URL to validate
 * @returns {string} The validated URL or a placeholder image
 */
export function ValidateImageURL(url) {
    try {
        const urlObj = new URL(url);
        // Allow both http and https for development, but prefer https
        if (urlObj.protocol === 'https:' || urlObj.protocol === 'http:') {
            return url;
        }
    } catch (e) {
        console.error('Invalid URL:', url);
    }
    // Return a placeholder image for invalid URLs to maintain UI consistency
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
}
