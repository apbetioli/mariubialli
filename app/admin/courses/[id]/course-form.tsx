'use client'

import { UICourse, UILesson } from '@/app/types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlusCircleIcon } from 'lucide-react'
import { useState } from 'react'
import { CourseFormDetails } from './course-form-details'

export function CourseForm({ course }: { course?: UICourse }) {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="details">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="lessons" disabled={!course?.id}>
              Lessons
            </TabsTrigger>
            <TabsTrigger value="assets" disabled={!course?.id}>
              Assets
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="details">
          <CourseFormDetails course={course} />
        </TabsContent>
        <TabsContent value="lessons">
          {course && <GroupsForm course={course} />}
        </TabsContent>
        <TabsContent value="assets">TODO</TabsContent>
      </Tabs>
    </div>
  )
}

function GroupsForm({ course }: { course: UICourse }) {
  const [newGroupName, setNewGroupName] = useState('')

  return (
    <div>
      <Accordion type="multiple">
        {course.groups.map((group) => (
          <AccordionItem key={group.id} value={group.id}>
            <AccordionTrigger className="bg-slate-100 px-2">
              {group.name}
            </AccordionTrigger>
            <AccordionContent className="p-4 pl-8">
              {group.lessons.map((lesson) => (
                <LessonForm key={lesson.id} lesson={lesson} />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex items-center gap-4 p-4 bg-slate-100">
        <label className="shrink-0">New module name</label>
        <Input
          required
          onChange={(event) => setNewGroupName(event.target.value)}
        />
        <Button size="sm" className="h-8 gap-1" type="button">
          <PlusCircleIcon className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Group
          </span>
        </Button>
      </div>
    </div>
  )
}

function LessonForm({ lesson }: { lesson: UILesson }) {
  return (
    <div className="flex items-center gap-4">
      <label className="shrink-0">Lesson name</label>
      <Input value={lesson.name} required />
      <label className="shrink-0">Video URL</label>
      <Input />
    </div>
  )
}
