

// create controller get todo by received id
exports.getTodo = async (req, res) => {
    try {
      const id = req.params.id;
      const index = id - 1;
      res.send({
        status: "success",
        data: {
          todo: todos[index],
        },
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
};

// create controller add Todo here
exports.addTodo = async (req, res) => {
    try {
      todos = [...todos, req.body];
      res.send({
        status: "success",
        data: {
          todos,
        },
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
};

// create controller update Todo here
exports.updateTodo = async (req, res) => {
    try {
      const { id } = req.params;
      todos[id - 1] = { ...todos[id - 1], ...req.body };
      res.send({
        status: "success",
        data: {
          todo: todos[id - 1],
        },
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
};

// create controller delete Todo here
exports.deleteTodo = async (req, res) => {
    try {
      const { id } = req.params;
      todos = todos.filter((todo) => todo.id != id);
      res.send({
        status: "success",
        data: {
          todos,
        },
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
};