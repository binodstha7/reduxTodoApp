import React from 'react';
import { connect } from "react-redux";

function TodoLists(props) {
    const { todoData } = props;
    return (
        <div>
            <h1>Todo Lists:</h1>

            {/* todoData is mapped in lists */}
            {todoData.todo.map((todo, index) => {
                return <p
                    key={index.toString()}
                >{index + 1} {todo}</p>
            })}
        </div>
    )
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
)(TodoLists);