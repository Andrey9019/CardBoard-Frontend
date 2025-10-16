import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('auth-token')?.value;
    // ||  request.headers.get("Authorization")?.replace("Bearer ", "")
    if (!token) {
      console.log('Middleware: No token found, redirecting to sign');
      return NextResponse.redirect(new URL('/sign', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
