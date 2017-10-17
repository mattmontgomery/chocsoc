import Fetch from './Fetch';

export default function* CategoriesSaga() {
    yield [
        Fetch()
    ];
}
