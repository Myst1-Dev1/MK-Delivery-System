import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request:NextRequest) {
    const token = request.cookies.get('mk-delivery.token')?.value;

    const homeURL = new URL('/', request.url);
    const signInPageUrl = new URL('/signInPage', request.url);

    if(!token) {
        if(request.nextUrl.pathname === '/signInPage') {
            return NextResponse.next();
        }

        return NextResponse.redirect(signInPageUrl);
    }

    if(request.nextUrl.pathname === 'signInPage' || request.nextUrl.pathname === 'signUpPage') {
         return NextResponse.redirect(homeURL);
    }

}

export const config = {
    matcher: ['/profile']
}