const express = require('express')
const app = express()
const authorRouter = require('./routes/author')
const blogRouter = require('./routes/blogs')

app.use(express.json()) 

app.use('/api/authors',authorRouter)
app.use('/api/blog',blogRouter)


app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})

