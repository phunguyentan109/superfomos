import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SocialPost } from '@/interface/socialPost'

type InitType = {
  loading: boolean
  detail: { [key: string]: any }
}

const createDetailSocialSlice = createSlice({
  name: 'socialDetail',
  initialState: { loading: false, detail: {} } as InitType,
  reducers: {
    getDetailAction: (
      state,
      action: PayloadAction<{ cb: (value: any) => void }>
    ) => {
      state.loading = true
    },
    getDetailActionSuccess: (state, action: PayloadAction<SocialPost>) => {
      state.loading = false
      state.detail = action.payload
    },
  },
})

export const { getDetailAction, getDetailActionSuccess } =
  createDetailSocialSlice.actions

export default createDetailSocialSlice.reducer
