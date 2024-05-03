import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/politica-de-privacidade',
    '/termos-de-servico',
    '/api/course/(.*)',
    '/api/courses',
    '/api/user',
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
