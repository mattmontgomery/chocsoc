import { Constants } from 'Store/Actions/Categories';
const initialState = {};

export default function Categories(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case Constants.fetchStart:
            return {};
        case Constants.fetchDone:
            return payload.reduce((acc, article) => {
                acc[article.id] = article;
                return acc;
            }, {});
        default:
            return state;
    }
}
