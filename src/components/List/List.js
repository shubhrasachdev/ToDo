import './List.css';
import Header from './Header/Header';
import Task from './Task/Task';
const List = (props) => {
    const tasks = props.taskList;
    console.log(tasks);
    return <div className="list">
        <Header />
        {tasks.map((task, idx) => {
            return <Task key={idx} task={task}/>;
        })}
        
    </div>
}

export default List;