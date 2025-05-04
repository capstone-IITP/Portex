import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This is a simple middleware to simulate authentication
// In a real app, you would verify auth tokens/cookies
export function middleware(request: NextRequest) {
  // The paths that require authentication
  const protectedPaths = ['/booking', '/dashboard'];
  const path = request.nextUrl.pathname;
  
  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(protectedPath => 
    path === protectedPath || path.startsWith(`${protectedPath}/`)
  );

  // If the path is protected but the user is not authenticated, redirect to login
  if (isProtectedPath) {
    // For demo purposes, we'll use a simulated auth cookie
    // In a real app, you would verify the token/session
    const authCookie = request.cookies.get('auth-token')?.value;
    
    // If no auth cookie is present, redirect to login
    if (!authCookie) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }
  
  return NextResponse.next();
}

// Configure the middleware to only run on specific routes
export const config = {
  matcher: ['/booking/:path*', '/dashboard/:path*'],
}; 