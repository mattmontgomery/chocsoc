export const Constants = {
    fetchStart: 'CATEGORIES_FETCH_START',
    fetchDone: 'CATEGORIES_FETCH_DONE'
}

export function fetchStart() {
    return {
        type: Constants.fetchStart
    }
}
