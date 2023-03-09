import { all } from 'redux-saga/effects'
import createSocialSaga from '@/app/slice/saga'
import socialDetailSaga from '@/app/detail/slice/saga'

export default function* rootSaga() {
  // View saga
  yield all([createSocialSaga(), socialDetailSaga()])
}
