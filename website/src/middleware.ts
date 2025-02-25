import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Check if the request path starts with `/documentation`
  if (req.nextUrl.pathname.startsWith('/documentation')) {
    if (req.nextUrl.pathname === '/documentation/api/toast') {
      // Redirect to /documentation/getting-started
      return NextResponse.redirect(
        new URL('/documentation/api/toast/usage', req.url)
      );
    }
    // Redirect to /documentation/getting-started
    return NextResponse.redirect(
      new URL('/documentation/getting-started', req.url)
    );
  }

  // Return the response unchanged if the condition is not met
  return NextResponse.next();
}

// Optionally, specify the routes to match
export const config = {
  matcher: ['/documentation', '/documentation/api/toast'], // Matches any URL starting with /documentation
};
