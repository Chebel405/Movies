import axios from "axios";

const apiMovie = axios.create({
    baseURL:'https://api.themoviedb.org/4', 
})

apiMovie.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDFkZGEyMzZjYWRmNGU4MmZiOWNhYzcwYTcyYTM4YiIsInN1YiI6IjYwNjU4ZjI2YzI4MjNhMDA1Nzc3NThiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HYbyLyhXCYzAmuAfvwii9eiykZa8wAZTyKI5uzLAoHk'
    return req;
})


export default apiMovie;