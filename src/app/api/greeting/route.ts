import { NextResponse } from 'next/server';

export async function GET() {

  const data = { test: 'test' };
  
  return NextResponse.json(data);
}