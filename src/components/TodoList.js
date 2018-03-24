import React, { Component } from "react";
import Todo from "./Todo";

function TodoList1(props) {
    return (
        <p>todolist {props.name}</p>
    );
}

const TodoList2 = (props) => {
    return (
        <p>todolist {props.name}</p>
    );
}

class TodoList3 extends Component {

    render() {
        return (
            <p>todolist {this.props.name}</p>
        );
    }
}

class TodoList4 extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };

        this.increase = this.increase.bind(this);
    }

    render() {
        console.log(this.state);
        return (
            <p onClick={this.increase}>todolist {this.props.name} {this.state.count}</p>
        );
    }

    increase() {
        this.setState({ count: this.state.count + 1 });
    }
}

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                { id: 1, text: "str1", completed: false },
                { id: 2, text: "str2", completed: true },
                { id: 3, text: "str3", completed: false }
            ]
        };

        this.changemode = this.changemode.bind(this);
    }

    render() {
        console.log(this.state);
        const list = this.state.todos.map(t => <Todo key={t.id} todo={t} done={() => this.changemode(t.id)}/>);
        console.log(list);
        return (
            <section>
                <ul>
                    {list}
                </ul>
            </section>
        );
    }

    changemode(id) {
        const ts = this.state.todos.map(t => {
            if (t.id !== id)
                return t;
            return { ...t, completed: !t.completed };
        });
        this.setState({ todos: ts });
    }
}


export default TodoList;