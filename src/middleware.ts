import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname is exactly the root path
  if (pathname === '/') {
    // Get the Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    // Determine the locale based on Accept-Language header
    const locale = acceptLanguage.toLowerCase().includes('zh') ? 'zh' : 'en';
    
    // Redirect to the appropriate locale
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  
  // For all other paths, continue normally
  return NextResponse.next();
}

export const config = {
  // Only run middleware on the root path
  matcher: ['/']
}; 