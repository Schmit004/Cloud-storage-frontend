import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from '@/core/axios';
import * as Api from '@/api';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  axios.defaults.headers.common = {
    'Authorization': `Bearer ${token}`
  };

  try {
    await Api.auth.getMe();
    return NextResponse.next();
  } catch (err) {
    console.error('Auth error:', err);
    return NextResponse.redirect(new URL('/auth', req.url));
  }
}

export const config = {
  matcher: '/dashboard/:path*',
}
