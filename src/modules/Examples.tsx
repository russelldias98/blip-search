import React from 'react'
import ExampleItem from '@/components/ExampleItem'
import { EXAMPLES } from '@/config/constants'

interface Props {}

const Examples: React.FC<Props> = () => {
  return (
    <div className="space-y-2 my-2 bg-purple-50 rounded-xl p-3">
      <p className="uppercase text-xs text-muted-foreground">Examples</p>
      {EXAMPLES.map((example, index) => (
        <ExampleItem content={example} key={index} />
      ))}
    </div>
  )
}

export default Examples
