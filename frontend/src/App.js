import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import GoalForm from './components/GoalForm'
import GoalList from './components/GoalList'

function App() {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    const fetchGoals = async () => {
      const { data } = await axios.get('http://localhost:5000/api/goals')
      setGoals(data)
    }

    fetchGoals()
  }, [])

  const addGoal = async (text) => {
    const { data } = await axios.post('http://localhost:5000/api/goals', { text })
    setGoals([...goals, data])
  }

  const deleteGoal = async (id) => {
    await axios.delete(`http://localhost:5000/api/goals/${id}`)
    setGoals(goals.filter((goal) => goal._id !== id))
  }

  return (
    <Container className='my-4'>
      <h1 className='text-center'>Goal Setter❤️❤️❤️❤️</h1>
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} deleteGoal={deleteGoal} />
    </Container>
  )
}

export default App
