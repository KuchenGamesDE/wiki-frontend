if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js', { scope: '.' })
            .then(function () {
                return navigator.serviceWorker.ready;
            })
            .catch(function (error) {
                 console.error('Service Worker registration failed:', error);
            });

    });
}
