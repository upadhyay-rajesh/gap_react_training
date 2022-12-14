
import {delay,takeEvery,put} from 'redux-saga/effects';

export function* incrementneeneratorfunction(){
    yield delay(5000);
    yield put({type:'increment'})
}

export default function* rootsagageneratorfunction(){




    yield takeEvery('INCREMENT_ASYNC',incrementneeneratorfunction)
   // yield takeEvery('INC_ASYNC',incrementneeneratorfunction)
   // yield takeEvery('ASYNC',incrementneeneratorfunction)
}