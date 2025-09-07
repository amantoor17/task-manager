import { createContext, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// context created
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [tasks, setTasks] = useLocalStorage("tasks", []);

    const addTask = useCallback((text) => {
        setTasks([...tasks, { id: crypto.randomUUID(), text, completed: false }]);
    }, [tasks, setTasks]);

    const deleteTask = useCallback((id) => {
        setTasks(tasks.filter((task) => task.id != id));
    }, [tasks, setTasks]);

   const editTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
        )
    );
    };


    const toggleTask = useCallback((id) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    }, [tasks, setTasks]);

    return (
        <AppContext.Provider value={{ tasks, setTasks, addTask, deleteTask, editTask, toggleTask }}>
            {children}
        </AppContext.Provider>
    );
};