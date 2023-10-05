import React from 'react'
import BestSeller from '../BestSeller'
import Books from '../Books'

export default function Home() {
  return (
    <section className='homepage'>
        <Books />
        <BestSeller />
    </section>
  )
}
