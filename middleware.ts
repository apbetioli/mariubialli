import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/course', '/privacy', '/terms', '/api/course/(.*)'],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
