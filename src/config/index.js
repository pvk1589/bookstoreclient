const environmentUrls = new Map();


environmentUrls.set('localhost','http://localhost:8080');
environmentUrls.set('book-store-web.com','http://book-store_web.com:8080');

export default environmentUrls.get(window.location.hostname);