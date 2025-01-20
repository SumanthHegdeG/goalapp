const express = require('express')
const router = express.Router()
const Goal = require('../models/Goal')

// Get all goals
router.get('/', async (req, res) => {
  try {
    const goals = await Goal.find()
    res.status(200).json(goals)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Add a new goal
router.post('/', async (req, res) => {
  try {
    console.log(req.body.text, ' - added')
    const goal = await Goal.create({ text: req.body.text })

    res.status(201).json(goal)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Delete a goal
router.delete('/:id', async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' })
    }

    console.log(goal.text, ' - deleted')
    await Goal.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: 'Goal deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
