import { courses } from '@/app/data'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  return NextResponse.json({ data: courses })
}
