import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Download, Play } from 'lucide-react'
import Link from 'next/link'
import { courses } from '../data'
import { CardMedia } from '@/components/ui/card-media'

export default function HomePage() {
  return (
    <>
      <main className="flex min-h-[calc(100%-5rem)] w-full justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 p-8 h-fit">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col overflow-hidden">
              <CardMedia src={course.image} alt={course.name} />
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="grow"></CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Link href={`/courses/${course.id}`}>
                  <Button variant="secondary">
                    <Download />
                    Moldes
                  </Button>
                </Link>
                <Link href={`/courses/${course.id}`}>
                  <Button>
                    <Play />
                    Assistir
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
