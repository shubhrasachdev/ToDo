import './Task.css';
const Task = (props) => {
    return <div className="task">
        <div>{props.task}</div>
        <button>Delete</button>
    </div>
}

export default Task;