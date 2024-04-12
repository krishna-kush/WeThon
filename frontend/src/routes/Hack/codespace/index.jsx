import {sdk } from "@stackblitz/sdk"
import React from 'react'

const CodeSpace = () => {
    sdk.openProject(
        // Payload
        {
          files: {
            'index.html': `<h1>Hello world!</h1>`,
            'index.js': `alert('Woohoo! We can start documenting!')`,
          },
          template: 'javascript',
          title: `My First Docs!`,
          description: `This is an example of my first doc!`,
        },
      
        // Options
        {
          newWindow: true
        }
      );
  return (
    <div>
      
    </div>
  )
}

export default CodeSpace
