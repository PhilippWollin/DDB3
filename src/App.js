import React from 'react'
import Navbar from './components/Navbar'
import './index.css';
import CardContainer from './components/projectCard/cardContainer';
import Attendances from './components/attendence/attendencesList';
import DateTime from './components/dateTime/dateTime';
import NewsList from './components/news/newsList';
import KitchenDuty from './components/kitchenduty/kitchenDuty';
import { BasicTable } from './components/taskboard/taskBoardTable';
import { DeliveryTable } from './components/delivery/DeliveryTable';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='card--container'>
        <CardContainer />
        <DateTime />
        <BasicTable />
        <DeliveryTable />
        <NewsList />
        <KitchenDuty />
      </div>
      <div className='card--container'>
        <Attendances />
      </div>
    </div>
  )
}