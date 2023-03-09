import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {},
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: { ignoredActionPaths: ['payload.cb'] },
    }).concat(sagaMiddleware),
}) as any

function createReducer(asyncReducers: any) {
  return combineReducers({
    ...asyncReducers,
  })
}

store.asyncReducers = {}

store.injectReducer = (key: string | number, asyncReducer: any) => {
  store.asyncReducers[key] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers as any))
}

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga)

// export const wrapper = createWrapper(makeStore, { debug: true })
