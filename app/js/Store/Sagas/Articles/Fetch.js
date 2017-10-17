import { Constants } from 'Store/Actions/Articles';
import { call, put, take } from 'redux-saga/lib/effects';
import { fetchSingle, fetchArticles } from 'Store/Requests/Articles';

export function* FetchSaga() {
    while(true) {
        const { payload } = yield take(Constants.fetchStart);
        const response = yield call(fetchArticles, payload);
        yield put({
            type: Constants.fetchDone,
            payload: response
        });
    }
}

export function* FetchSingleSaga() {
    while(true) {
        const { payload } = yield take(Constants.fetchSingleStart);
        const response = yield call(fetchSingle, payload);
        yield put({
            type: Constants.fetchSingleDone,
            payload: response
        });
    }
}
