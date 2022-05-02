import { takeLatest } from 'redux-saga/effects';
import { handleGetUser } from './handlers/user';
import { GET_USER } from '../ducks/user';

//função que acompanha qualquer ação que seja disparada pelo store e lida com as chamadas API
export function* watcherSaga() {
	yield takeLatest(GET_USER, handleGetUser);
}
