import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/courses',
    '/assets',
    '/cart',
    '/politica-de-privacidade',
    '/termos-de-uso',
    '/api/courses/(.*)',
    '/api/courses',
    '/api/user',
    '/api/stripe/webhook',
  ],
})

// TODO protect admin pages and api routes

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
