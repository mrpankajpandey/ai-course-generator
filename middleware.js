import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define protected routes
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/create-course']);

export default clerkMiddleware((auth, req) => {
  // Get the User-Agent from the request headers
  const userAgent = req.headers.get('user-agent') || '';
  
  // Check if the request is made by Googlebot
  const isGoogleBot = userAgent.includes('Googlebot');

  // Allow Googlebot to access protected routes or any non-protected routes
  if (isGoogleBot || !isProtectedRoute(req)) {
    return NextResponse.next(); // Allow access
  }

  // If the route is protected, enforce authentication
  auth().protect();
  
  // return response; // Ensure to return the response from auth().protect()
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
