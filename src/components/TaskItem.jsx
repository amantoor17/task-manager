import React, { memo, useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import EditTaskModal from './EditTaskModal';

const TaskItem = memo(({ task }) => {
  const { toggleTask, deleteTask, editTask } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-300 rounded-[0.5rem] text-black w-9/12 p-[12px] flex items-center mx-auto">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="w-5 h-5 cursor-pointer accent-blue-500"
      />

      {/* Task Text */}
      <span
        className={`mx-4 text-center truncate ${
          task.completed ? 'line-through text-red-800' : 'text-gray-800'
        }`}
      >
        {task.text}
      </span>

      {/* Buttons */}
      <div className="ml-auto">
        {/* Edit Button */}
       <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gray-700 mr-6 text-white px-3 py-1 rounded-lg shadow-md transition hover:cursor-pointer active:scale-95"
        >
        ✏️
        </button>

        {/* Delete Button */}
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-600 text-white px-3 py-1 rounded-lg shadow-md transition hover:bg-red-700 hover:cursor-pointer active:scale-95"
        >
          Delete
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <EditTaskModal
            task={task}
            onClose={() => setIsModalOpen(false)}
            onSave={editTask}
        />
    )}
    </div>
  );
});

export default TaskItem;
