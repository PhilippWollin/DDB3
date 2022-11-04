import React from 'react'
import Navbar from './components/Navbar'
import './index.css';
import CardContainer from './components/cardContainer';
import DateTime from './components/dateTime';

export default function App() {
  return (
    <div>
      <Navbar />
      <CardContainer />
      <DateTime />
    </div>
  )
}