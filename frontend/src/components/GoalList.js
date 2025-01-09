import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'

const GoalList = ({ goals, deleteGoal }) => {
  return (
    <ListGroup>
      {goals.map((goal) => (
        <ListGroup.Item
          key={goal._id}
          className='d-flex justify-content-between align-items-center'
        >
          {goal.text}
          <Button variant='danger' onClick={() => deleteGoal(goal._id)}>
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default GoalList
