import React, { useState } from 'react'
import './App.css';
import ItemComponent from "./components/ItemComponent";
import ButtonCustom from "./components/ButtonCustom";

function App() {
    const [list, setList] = useState([]);
    const [task, setTask] = useState('');

    const onAddTask = () => {
        if (!task) return;
        const last = list[list.length - 1]?.id || 0
        setList([...list, {
            id: last + 1,
            name: task,
            checked: false,
        }])
        setTask('');
    }

    const onToggleItem = id => {
        setList(list.map(item => item.id === id ? {...item, checked: !item.checked} : item))
    }

    const onDeleteItem = id => {
        setList(list.filter(item => item.id !== id))
    }

    const onEditItem = (id, newName) => {
        setList(list.map(item => item.id === id ? {...item, name: newName} : item))
    }


  return (
    <div className='root'>
        <div className='taskContainer'>
            <span className='title'>To do</span>
            <input
                className='input'
                type='text'
                placeholder='Add a task'
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <div className='options'>
                <ButtonCustom
                    disabled={!task}
                    onClick={onAddTask}
                    isBlue
                    className='margin'
                >
                    Add Task
                </ButtonCustom>
                <ButtonCustom onClick={() => setTask('')}>Cancel</ButtonCustom>
            </div>
        </div>
        <div>
            {list.map(item =>
                <ItemComponent
                    task={item}
                    onToggle={onToggleItem}
                    onDelete={onDeleteItem}
                    onEdit={onEditItem}
                />
                )}
        </div>
    </div>
  );
}

export default App;
