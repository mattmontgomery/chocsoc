import { Constants } from 'Store/Actions/Articles';

const initialState = {};

export default function Articles(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case Constants.fetchDone:
            return payload.reduce((acc, article) => {
                acc[article.id] = article;
                return acc;
            }, state);
        case Constants.fetchSingleDone:
            return {
                ...state,
                [payload.id]: payload
            };
        default:
            return state;
    }
}
