import { NextResponse } from 'next/server'

export async function GET() {
  const imgs = Array(10)
    .fill('')
    .map((v: any, i: number) => `${process.env.BANNER_URL}banner_${i + 1}.jpg`)

  return NextResponse.json({ imgs })
}
