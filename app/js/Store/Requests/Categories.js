export function fetchAll() {
    return fetch('/wp-json/wp/v2/categories')
        .then(response => response.json());
}
