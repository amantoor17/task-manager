import React, { useState, useEffect } from "react";

const EditTaskModal = ({ task, onClose, onSave }) => {
  const [taskText, setTaskText] = useState("");

  // preload task data when modal opens
  useEffect(() => {
    if (task) {
      setTaskText(task.text || ""); // using text instead of title/desc
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task.id, { text: taskText });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Edit your task"
            className="w-full border rounded-lg px-3 py-2"
            required
          />

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: "#7B1A84" }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
