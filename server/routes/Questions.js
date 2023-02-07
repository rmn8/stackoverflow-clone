import express from "express";
import {AskQuestion, getAllQuestions} from "../controllers/Questions.js";

// import 

const router = express.Router()

router.post('/Ask', AskQuestion)
router.get("/get",getAllQuestions)

export default router