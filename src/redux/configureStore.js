import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './ducks/counter';
import userReducer from './ducks/user';
import { watcherSaga } from './sagas/rootSaga';

//trabalhando na estrutura de ducks, criamos vários arquivos para organizar os reducers. então é necessário fazer um combine para unir todos na store
const reducer = combineReducers({
	counter: counterReducer,
	user: userReducer,
});

//função de inicialização do saga
const sagaMiddleware = createSagaMiddleware();

//caso haja muitos middlewares você colocar em um array
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

//setup do listener
sagaMiddleware.run(watcherSaga);

export default store;
