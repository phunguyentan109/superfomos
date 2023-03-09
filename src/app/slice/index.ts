import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SocialPost } from '@/interface/socialPost'

type InitType = {
  loading: boolean
  loadingBanner: boolean
  banners: string[]
}

const createSocialSlice = createSlice({
  name: 'createSocial',
  initialState: {
    loading: false,
    loadingBanner: false,
    banners: [],
  } as InitType,
  reducers: {
    createSocialAction: (
      state,
      action: PayloadAction<{ values: SocialPost; cb: (value: any) => any }>
    ) => {
      state.loading = true
    },
    getBannerAction: (
      state,
      action: PayloadAction<{ cb: (value: any) => any }>
    ) => {
      state.loadingBanner = true
    },
    getBannerSuccessAction: (
      state,
      action: PayloadAction<{ imgs: string[] }>
    ) => {
      state.loadingBanner = false
      state.banners = action.payload?.imgs || []
    },
    createSocialSuccessfully: (state) => {
      state.loading = false
    },
  },
})

export const {
  createSocialAction,
  createSocialSuccessfully,
  getBannerAction,
  getBannerSuccessAction,
} = createSocialSlice.actions

export default createSocialSlice.reducer
