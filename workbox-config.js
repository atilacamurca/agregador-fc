/**
 * Workbox: Configuração para geração de service worker,
 * para suporte a site offline.
 */
module.exports = {
    "globDirectory": "dist/",
    "globPatterns": [
        "**/*.{html,css,js,png,json}"
    ],
    "swDest": "dist/service-worker.js"
}
