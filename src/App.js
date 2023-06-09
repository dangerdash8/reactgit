import React from 'react'
import Typewriter from 'typewriter-effect'
const App = () => {
  return (
    <div>
      <h1>My Name is Bhupraj Dhimal, I am</h1>
      <h1>
        <Typewriter
        const options={{
          strings: ['Web Developer', 'Web Designer', 'And SEO expert.'],
          autoStart: true,
          loop: true,
        }}
      /></h1>
    </div>
  )
}

export default App