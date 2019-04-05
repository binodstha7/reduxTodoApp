import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    // handleChange method will update todoText state
    handleChange(e) {
        this.setState({ todoText: e.target.value });
    }

    // addTodo  method will dispatch redux action
    // action type("type") and payload("data") is passed by redux action
    addTodo(e) {
        e.preventDefault(); //stoping to refresh page
        
        this.props.dispatch({ type: "ADD_TODO", data: this.state.todoText });
        this.setState({todoText: ""}) //clear text input field after dispatch action
    }

    render() {
        // destructure props
        const { todoData } = this.props;
        return (
            <div>
                <h1>Todo App</h1>

                {/* addTodo method is called when submit button is clicked.
                and input textbox value wiil be reset*/}
                <form onSubmit={this.addTodo}>
                    <input
                        value={this.state.todoText}
                        onChange={this.handleChange}
                        type="text" />

                    {/* submit button */}
                    <input type='Submit' />
                </form>

                {/* todoData is mapped in lists */}
                {todoData.todo.map((todo, index) => {
                    return <p
                        key={index.toString()}
                    >{index + 1} {todo}</p>
                })}

            </div>
        )
    }
}

// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.
const mapStateToProps = state => {
    return {
        todoData: state
    }
}

export default connect(
    mapStateToProps
)(Home);