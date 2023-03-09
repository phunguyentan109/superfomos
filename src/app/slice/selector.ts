import { RootState } from '@/redux'

export const selectCreateSocial = (state: RootState) => ({
  ...state.createSocial,
})
