
import {delay,put,takeEvery} from 'redux-saga/effects';
export function* incrementValueAsync(){
    yield delay(5000);
    yield put({type:'increment'})
}



export default function* rootSaga(){

    
    yield takeEvery('INCREMENT_ASYNC',incrementValueAsync)
   
    
}