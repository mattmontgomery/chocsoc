import queryString from 'query-string';

export function fetchArticles(categoryId) {
    const params = {
        categories: [categoryId].filter(i => ['string', 'number'].indexOf(typeof i) > -1),
        per_page: 40
    };
    return fetch(`/wp-json/wp/v2/posts?${queryString.stringify(params)}`)
        .then(response => response.json());
}

export function fetchSingle(id) {
    return fetch(`/wp-json/wp/v2/posts/${id}`)
        .then(response => response.json());
}
