import express from 'express';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'John Doe', email: 'johndoe@example.com'},
    {id: 2, name: 'Bob Smith', email: 'bobsmith@example.com'},
    {id: 3, name: 'Alice Johnson', email: 'alicejohnson@example.com'},
    {id: 4, name: 'Charlie Brown', email: 'charliebrown@example.com'},
    {id: 5, name: 'Diana Prince', email: 'dianaprince@example.com'},
]


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    
    console.dir(req.body);
    res.json(req.body);
    
    
    res.send({
        success: true,
        message: 'User added successfully'
    })
    
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});