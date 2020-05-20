import React from 'react'
import Header from './components/Header'
import LinkedInBadge from './components/LinkedInBadge'
import HelloProps from './components/HelloProps'
import Counter from './components/Counter'
import './App.scss'

export default function App() {
  return (
    <>
      <Header />
      <LinkedInBadge />
      <HelloProps compiler='Typescript' framework='React' />
      <Counter />
    </>
  )
}