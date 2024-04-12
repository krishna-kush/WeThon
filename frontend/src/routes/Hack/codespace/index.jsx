import sdk from '@stackblitz/sdk';
import React from 'react'

const CodeSpace = () => {
    async function onclickbtn(){
        console.log("in")
        await sdk.openProject(
            {
            files: {
                'index.html': `<h1>Hello world!</h1>`,
                'index.js': `alert('Woohoo! We can start documenting!')`,
            },
            template: 'javascript',
            title: `My First react !`,
            description: `This is an example of my first doc!`,
            },
        
            {
            newWindow: false
            }
        );
    }
    async function onclickgithubbtn(){
        console.log("in")
        const githubusername=prompt("Username")
        window.location.href=`https://stackblitz.com/github/${githubusername}/repo`
    }
  return (
    <div>
      <button onClick={()=>onclickbtn()} className='p-3 m-5 border-2 shadow-md rounded-md'>Click</button>
      <button onClick={()=>onclickgithubbtn()} className='p-3 m-5 border-2 shadow-md rounded-md'>Github Click</button>
      
    </div>
  )
}

export default CodeSpace
