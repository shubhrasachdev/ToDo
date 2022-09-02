import './Container.css';
import TextInput from '../components/TextInput/TextInput';
import Adder from '../components/Adder/Adder';
import List from '../components/List/List';


const Container = () => {
    const taskList = ["Eat", "Sleep", "Repeat", "Another Task"];

    return (
        <div className='container'>
            <TextInput />
            <Adder />
            <List taskList={taskList} />
        </div>
    )

}

export default Container;























{/* <div className="container">
        <div className="adder">
            <input type="text"></input>
            <button>Add</button>
        </div>
        <div className='list'>
            <div className='row header'>Todo List:</div>
            {taskList.map((task) => {
                return (
                    <div className='row task-row'>
                        <div>{task}</div>
                        <button>Delete</button>
                    </div> 
                ); 
            })}
        </div>
    </div> */}