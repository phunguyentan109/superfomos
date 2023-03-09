export const imgs = Array(10)
  .fill('')
  .map(
    (v: any, i: number) =>
      `${process.env.NEXT_PUBLIC_BANNER_URL}banner_${i + 1}.jpg`
  )
