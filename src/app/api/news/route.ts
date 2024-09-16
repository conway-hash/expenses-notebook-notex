import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.MEDIA_STACK_API_KEY;
  const country = 'sk'
  const q = 'electricity'

  const url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=sk`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}