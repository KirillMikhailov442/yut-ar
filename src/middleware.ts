import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
  const userCookie = req.cookies.get('user')?.value;

  if (!userCookie) {
    const url = new URL('/login', req.url);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
};
export const config = {
  matcher: ['/editor', '/projects'],
};
