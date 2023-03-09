import { takeLatest, call, put } from 'redux-saga/effects'
import {
  createSocialAction,
  createSocialSuccessfully,
  getBannerAction,
  getBannerSuccessAction,
} from './index'
import { PayloadAction } from '@reduxjs/toolkit'
import { SocialPost } from '@/interface/socialPost'
import { fetchApi } from '@/helpers/fetch'

function* hdCreateSocialSaga({
  payload,
}: PayloadAction<{ values: SocialPost; cb: (value: any) => any }>) {
  try {
    const rs: ReturnType<typeof fetchApi> = yield call(
      fetchApi,
      'POST',
      '/api/social',
      payload.values
    )

    payload.cb(rs)

    yield put(createSocialSuccessfully())
  } catch (e) {
    payload.cb(null)
    yield put(createSocialSuccessfully())
    console.error(`createSocialSaga => ${e}`)
  }
}

function* hdFetchBannerAction({
  payload,
}: PayloadAction<{ cb: (value: any) => any }>) {
  try {
    const rs: { imgs: string[] } = yield call(fetchApi, 'GET', '/api/banner')

    payload.cb(rs)

    yield put(getBannerSuccessAction(rs))
  } catch (e) {
    payload.cb(null)
    yield put(getBannerSuccessAction({ imgs: [] }))
    console.error(`hdFetchBannerAction => ${e}`)
  }
}

export default function* createSocialSaga() {
  yield takeLatest(createSocialAction, hdCreateSocialSaga)
  yield takeLatest(getBannerAction, hdFetchBannerAction)
}
