const express = require('express')
const { json } = require('express/lib/response')

const app = express()
const port = 3000

//allow this app to receive incoming json request
//Create app.use for express.json here
app.use(express.json())

let todos = [
    {
        id: 1,
        title: "Cuci tangan",
        isDone: true
    },
    {
        id: 2,
        title: "Jaga jarak",
        isDone: false
    },
]

//GET list route: simply send arr of obj todos on your user screen
// Create method GET here
app.get('/todos', (req, res) => { //untuk menagmbil semua data
    res.send({
        data: todos,
    });
});

//GET detail route: send the todo obj, by received id request params
// Create method GET by received id here
app.get('/todo/:id', (req, res) => {
    const id = req.params.id; //untuk mengambil data berdasarkan id
    
    const data = todos.find((item) => item.id == id); //kondisi berdasarkan id

    if(!data){
        return res.send({
            error: {
                message: `Todo with id: ${id} not found`,
            },
        });
    }
    res.send({
        data,
    }); //respon akan mengirim id 
});

//POST route: receive json body request, from user input, then push to todos array
// Create method POST here
// app.post("/todo", (req, res) => {
//     todos = [...todos, req.body];
//     res.send({ data: todos });
// }); 
app.post('/todo', (req, res) => {
    const data = req.body;

    todos.push(data);

    res.send({
        data: {
            message: 'insert data todo finished',
        },
    });
});

//PATCH route: receive json body request, from user input, then push to todos array
//by object id
// Create method PATCH here
// app.patch("/todo/:id", (req, res) => {
//     const { id } = req.params; //menangkap id dari req
//     todos[id - 1] = { ...todos[id - 1], ...req.body };
//     res.send({ data: todos[id - 1] });
// });
app.patch('/todo/:id', (req, res) =>{
    const id = req.params.id;
    const data = req.body;

    todos = todos.map((item) => {
        if (item.id == id) {
            return data;
        } else {
            return item;
        }
    });

    res.send({
        data: {
            message: 'Update data todo finished',
        },
    });
});

//DELETE route: delete the todo obj, by received id request params
// Create method DELETE here
app.delete("/todo/:id", (req, res) => {
    const { id } = req.params; //menangkap id dari req
    todos = todos.filter((todo) => todo.id != id);
    
    res.send({
        data: {
            message: 'Delete data todo finished',
        },
    });
});

//pathnya/route gapapa sama yang pernting methodnya berbeda 
//membuat pathnya/route jangan menggunakan kata kerja
app.listen(port, () => console.log(`Listening on port ${port}!`))