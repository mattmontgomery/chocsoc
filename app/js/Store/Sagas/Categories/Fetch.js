import { Constants } from 'Store/Actions/Categories';
import { call, put, take } from 'redux-saga/lib/effects';
import { fetchAll } from 'Store/Requests/Categories';

export default function* FetchSaga() {
    while(true) {
        yield take(Constants.fetchStart);
        const response = yield call(fetchAll);
        yield put({
            type: Constants.fetchDone,
            payload: response
        });
    }
}
