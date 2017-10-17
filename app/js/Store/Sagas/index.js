import 'regenerator-runtime/runtime'
import Articles from './Articles';
import Categories from './Categories';

export default function* rootSaga() {
    yield [
        Articles(),
        Categories()
    ];
}
