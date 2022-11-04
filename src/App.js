import React from 'react'
import Navbar from './components/Navbar'
import './index.css';
import CardContainer from './components/cardContainer';
import DateTime from './components/dateTime';
import TaskBoard from './components/taskboard';
import Attendances from './components/attendences';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='card--container'>
        <CardContainer />
        <DateTime />
        <TaskBoard />
        <TaskBoard />
        <Attendances />
      </div>
    </div>
  )
}