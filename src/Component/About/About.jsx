import React, { useState } from 'react'

export default function About() {
  const [name, setName] = useState('safa')

  const changeName = () => {
    setName('sara') // هذا هو الطريقة الصحيحة لتغيير الحالة
    console.log('Name changed to:', 'sara')
  }

  return (
    <div className='container-fluid bg-danger text-center'>
      <h1>About {name}</h1>
      <button className='btn btn-light' onClick={changeName}>Change Name</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam accusamus et?</p>
    </div>
  )
}
