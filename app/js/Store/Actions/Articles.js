export const Constants = {
    fetchStart: 'ARTICLES_FETCH_START',
    fetchDone: 'ARTICLES_FETCH_DONE',
    fetchSingleStart: 'ARTICLES_FETCH_SINGLE_START',
    fetchSingleDone: 'ARTICLES_FETCH_SINGLE_DONE',
}

export function fetchStart(id) {
    return {
        type: Constants.fetchStart,
        payload: id
    }
}

export function fetchSingle(id) {
    return {
        type: Constants.fetchSingleStart,
        payload: id
    }
}
