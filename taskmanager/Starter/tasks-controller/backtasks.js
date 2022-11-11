const Tasks = require("../models/tasks")
const asyncWrapper = require("../middleware/asyncWrapper")
const {CreateCustomError} = require('../error/CustomError')

const getTasks = asyncWrapper(async (req, res) => {
  const task = await Tasks.find({})
  res.status(200).json({ task })
})

const postTasks = asyncWrapper(async (req, res) => {
 const {name} = req.body
  const task = await Tasks.create({name})
  res.status(201).json({task}) 
 
})


const getSingleTasks = asyncWrapper(async (req, res, next) => {
  const { id } = req.params
  const task = await Tasks.findById({ _id: id })
  if (!task){
    return next(CreateCustomError(`no tasks with id : ${id}`, 404))
  }
  res.status(200).json({ task })
})

const updateTasks = asyncWrapper(async (req, res, next) => {
  const { id } = req.params
  const task = await Tasks.findOneAndUpdate({ _id: id }, req.body, {
    runValidators: true,
    new: true,
  })
  if(!task){
    return next(CreateCustomError(`no tasks with id : ${id}`, 404))
  }
  
  res
    .status(201)
    .json({ success: true, msg: "Successfully created", data: { task } })
})

const deleteTasks = asyncWrapper(async (req, res, next) => {
  const { id } = req.params
  const task = await Tasks.findByIdAndDelete({ _id: id })
  if(!task){
    return next(CreateCustomError(`no tasks with id : ${id}`, 404))
  }
  res.status(204).json({ success: true, msg: "Deleted successfully" })
})

module.exports = {
  getTasks,
  postTasks,
  updateTasks,
  deleteTasks,
  getSingleTasks,
}
