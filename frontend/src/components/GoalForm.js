import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const GoalForm = ({ addGoal }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
      addGoal(text)
      setText('')
    }
  }

  return (
    <Form onSubmit={handleSubmit} className='mb-3'>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Enter your goal'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
      <Button variant='primary' type='submit' className='mt-2'>
        Add Goal
      </Button>
    </Form>
  )
}

export default GoalForm
