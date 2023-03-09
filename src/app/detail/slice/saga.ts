import { call, put, takeLatest } from 'redux-saga/effects'
import { getDetailAction, getDetailActionSuccess } from './index'
import { PayloadAction } from '@reduxjs/toolkit'
import { fetchApi } from '@/helpers/fetch'
import { SocialPost } from '@/interface/socialPost'

function* hdGetDetailSocial({
  payload,
}: PayloadAction<{ cb: (value: any) => void }>) {
  try {
    const rs: SocialPost = yield call(fetchApi, 'GET', '/api/social')

    payload.cb(rs)

    yield put(getDetailActionSuccess(rs))
  } catch (e) {
    payload.cb(null)
    console.error(`hdGetDetailSocial => ${e}`)
  }
}

export default function* socialDetailSaga() {
  yield takeLatest(getDetailAction, hdGetDetailSocial)
}
