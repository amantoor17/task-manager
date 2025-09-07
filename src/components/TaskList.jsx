import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import TaskItem from './TaskItem';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import "../App.css";

const TaskList = () => {
    const { tasks, setTasks } = useContext(AppContext);
    const [filter, setFilter] = useState("All");
    const [tasksToDisplay, setTasksToDisplay] = useState(tasks);
    // console.log(tasks)

    useEffect(() => {
        if (filter === "Completed") {
            setTasksToDisplay(tasks.filter(task => task.completed));
        } else if (filter === "Pending") {
            setTasksToDisplay(tasks.filter(task => !task.completed));
        } else {
            setTasksToDisplay(tasks);
        }
    }, [tasks, filter]);

    const onDragEnd = (result) => {
        if (!result.destination || filter !== "All") return;

        const { source, destination } = result;
        const reorderedTasks = [...tasks];
        const [movedTask] = reorderedTasks.splice(source.index, 1);
        reorderedTasks.splice(destination.index, 0, movedTask);
        console.log("reorderedTasks", tasks, reorderedTasks, result, movedTask)
        setTasks(reorderedTasks);
    };

    return (

        <div>


            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="tasks" isDropDisabled={filter !== "All"}>
                    {(provided) => (
                        <div className="tasks" ref={provided.innerRef} {...provided.droppableProps}>
                            {tasksToDisplay.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <div
                                            className='m-2'
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <TaskItem task={task} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default TaskList;