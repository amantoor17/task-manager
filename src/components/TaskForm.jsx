import React, { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';

const TaskForm = () => {
    const [text, setText] = useState("");
    // consume context
    const { addTask } = useContext(AppContext);

    const handleAddTask = (e) => {
        e.preventDefault();

        if (text.trim() === "") {
            return;
        } else {
            addTask(text);
            setText("");
        }
    }

    return (
        <div className='text-center flex flex-col mb-15'>
            <form onSubmit={handleAddTask}>
                <input
                    type='text'
                    placeholder='Add task'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    required
                    className='bg-gray-300 rounded-[0.5rem] text-black w-9/12 p-[12px] mx-auto '
                />
                <button type='submit' className='bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6 ml-4'>Add Task</button>
            </form>
        </div>
    )
}

export default TaskForm