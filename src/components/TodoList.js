import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({
    items, clearList, handleDelete, handleEdit, handleDoneTask, handleDeleteDoneTasks })
     {
       
    const [filter, setFilter] = useState("all");
    const filteredItems = items.filter(item => {
        if (filter === "all") return true;
        if (filter === "done") return item.completed;
        if (filter === "todo") return !item.completed;
        return true;
    });

    return (
        <>
            <h3 className="text-center">Task status</h3>
            <div className="row">

                <div className="col-md-4">
                    <button type="button"className="btn btn-dark btn-block mt-1" onClick={() => setFilter("all")} >
                        All Task
                    </button>
                </div>

                <div className="col-md-4">
                    <button type="button" className="btn btn-success btn-block mt-1"onClick={() => setFilter("done")}>
                       Task Done
                    </button>
                </div>

                <div className="col-md-4">
                    <button type="button" className="btn btn-dark btn-block mt-1" onClick={() => setFilter("todo")}>
                       Incomplete Tak
                    </button>
                </div>

            </div>

            {/* {items.length === 0 ? ( "" ) : ( */}
                <ul className="list-group my-5">
                    {filteredItems.map(item => (
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            completed={item.completed}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                            handleDoneTask={handleDoneTask} />
                    ))}
                    <div className="row mt-4">
                        <div className="col-md-6">

                            <button type="button" className="btn btn-warning btn-block mt-1" onClick={handleDeleteDoneTasks}>
                                Delete done tasks
                            </button>
                        </div>

                        <div className="col-md-6">
                            <button type="button" className="btn btn-danger btn-block mt-1"onClick={clearList}>
                                Delete all tasks
                            </button>
                        </div>

                    </div>
                </ul>
            {/* )} */}
        </>
    );
}

export default TodoList;
