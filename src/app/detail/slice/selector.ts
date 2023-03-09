import { RootState } from '@/redux'

export const selectSocialDetail = (state: RootState) => ({
  ...state.socialDetail,
})
