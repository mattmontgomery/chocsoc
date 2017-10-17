import { Constants } from 'Store/Actions/Categories';
const initialState = [];

export default function Navigation(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case Constants.fetchStart:
            return [];
        case Constants.fetchDone:
            return payload.map(({id}) => id);
        default:
            return state;
    }
}
