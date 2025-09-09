import React from 'react'
import '../App.css'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const Dashboard = () => {
  return (
    <div className='bg-richblack-800 h-screen w-screen'>
      <h1 className='text-center p-10 text-5xl text-white'>Get Started with Today's Tasks</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default Dashboard