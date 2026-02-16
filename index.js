const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1;

//path - /test
app.get('/test', (req, res) => {
    let user = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    };
    res.json(user);
});

//path - POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter++;
    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user
    });
});

//path - PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id
    let updatedUser = req.body;
    //หา user จาก id
    let selectedIndex = users.findIndex(user => user.id == id)
    //update users นั้น
    if (updatedUser.name ) {

    }

    users[selectedIndex].name = updatedUser.name || users[selectedIndex].name
    //ส่ง response กลับไปว่า update สำเร็จ

    res.json({
        message: 'User updated successfully',
        data : {
            user: updatedUser,
            indexUpdated: selectedIndex
        }
    })
})

//Path - DELETE /user/:id
app.delete('/user/:id', (req, res) => {
    let id = req.params.id
    let selectedIndex = users.findIndex(user => user.id == id)
    if (selectedIndex !== -1) {
        res.json({
            message: 'User deleted successfully',
            data: {
                IndexDeleted: selectedIndex
            }
        })
    } else {
        res.status(404).json({
            message: 'User not found'
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});