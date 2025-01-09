const express = require('express')
const router = express.Router()
const Goal = require('../models/Goal')

// Get all goals
router.get('/', async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
})

// Add a new goal
router.post('/', async (req, res) => {
  console.log(req.body.text)
  const goal = await Goal.create({ text: req.body.text })

  res.status(201).json(goal)
})

// Delete a goal
router.delete('/:id', async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id)
  res.status(200).json({ message: 'Goal deleted' })
})

module.exports = router
