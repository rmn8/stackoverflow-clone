import express from "express";
import {AskQuestion, getAllQuestions, deleteQuestion} from "../controllers/Questions.js";
import auth from '../middleware/auth.js'

// import 

const router = express.Router()

router.post('/Ask', auth, AskQuestion)
router.get("/get",getAllQuestions)
router.delete("/delete/:id",auth, deleteQuestion)

export default router