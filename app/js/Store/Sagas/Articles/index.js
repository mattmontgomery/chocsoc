import { FetchSaga, FetchSingleSaga } from './Fetch';

export default function* ArticlesSaga() {
    yield [
        FetchSaga(),
        FetchSingleSaga(),
    ];
}
