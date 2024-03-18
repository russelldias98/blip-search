'use client'

import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { PanelBottomOpen } from 'lucide-react'
import { TRAINING_DATA } from '@/config/constants'

interface Props {}

const TrainingData: React.FC<Props> = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <PanelBottomOpen className="w-4 h-4 mr-2" />
          Training Data
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="px-40 pt-10 pb-32 h-2/3 overflow-auto">
        <SheetHeader className="mb-8">
          <SheetTitle>Training Data</SheetTitle>
          <SheetDescription>
            Data used to train the model is for a text to video SaaS platform called Fliki. Feel
            free to pick questions from the list below or ask your own questions.
          </SheetDescription>
        </SheetHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Question</TableHead>
              <TableHead>Answer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TRAINING_DATA.map((item) => (
              <TableRow key={item.question}>
                <TableCell className="font-medium">{item.question}</TableCell>
                <TableCell>{item.answer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </SheetContent>
    </Sheet>
  )
}

export default TrainingData
