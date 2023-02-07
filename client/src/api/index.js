import axios from 'axios';

const API = axios.create({ baseURL:"http://localhost:5000"})

export const logIn =  (authData) => API.post('/user/login',authData,{headers:{"Content-Type" : "application/json"}})
export const signUp =  (authData) => API.post('/user/signup',authData,{headers:{"Content-Type" : "application/json"}})

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get');