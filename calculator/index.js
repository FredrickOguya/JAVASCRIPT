
const express = require('express');
const db = require('./database')
const app = express();

const port = 3308;

// oerforming CRUD operations
//CREATE


app.get('/createTable', (req,res)=>{
    const sql = `
    CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `
    db.query(sql, (err) => {
        if(err){
            console.log('Error creating users table:', err)
            return express.response.status(500).send('Error creating users table')
        }

        res.send('users table created successfully')
    })
})

app.get('/', (req,res ) =>{
    const sql = `
    INSERT INTO users(name,email)VALUES
    ('fred','onyangofredrickoguya@gmail.com')`
    db.query(sql,(err)=>{
        if(err){
            console.log('error creating user MediaRecorder;',err)
                return response.status(500).send('Error creating user record')
            
        }
    })
}) 

app.get('/', (req, res) => {
    res.send('Hello, you are now using the express package.')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})