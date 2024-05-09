import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/politica-de-privacidade',
    '/termos-de-uso',
    '/api/course/(.*)',
    '/api/courses',
    '/api/user',
    '/api/stripe/webhook',
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
