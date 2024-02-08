import React, { useState } from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
    const [items, setItems] = useState([]);
    const [itemsToShow, setItemsToShow] = useState("all");
    const [id, setId] = useState(uuid());
    const [item, setItem] = useState('');
    const [editItem, setEditItem] = useState(false);

    const handleChange = event => { setItem(event.target.value)};

    const handleSubmit = event => { event.preventDefault();

        if (item.trim() === "") return;

        const newItem = {
            id: id,
            title: item,
            completed: false
        };

        setItems([...items, newItem]);
        setId(uuid());
        setItem('');
        setEditItem(false);
    };

    const handleDoneTask = (id, completed) => {
        setItems(items.map(item => item.id === id ? { ...item, completed: !completed } : item ));
    };

    const handleDelete = id => {setItems(items.filter(item => item.id !== id));
    };

    const handleEdit = id => { const selectedItem = items.find(item => item.id === id);
    const newValue = prompt("Enter the new value:", selectedItem.title);

        if (newValue === null || newValue.trim() === '')  return;
            setItems(items.map(item => item.id === id ? { ...item, title: newValue } : item ));
    };

    const handleDeleteDoneTasks = () => { setItems(items.filter(item => !item.completed)) };

    const clearList = () => { setItems([]) };

    const updateTodosToShow = string => { setItemsToShow(string) };

    const filteredItems = itemsToShow === "all" ? 
     items : itemsToShow === "todo" ?
     items.filter(item => !item.completed) :
     items.filter(item =>  item.completed) ;

    return (

        <div className="container">
            <div className="row">
                <div className="col-10 col-md-8 mx-auto mt-4">
                    <h3 className="text-capitalize text-center">Our daily task update </h3>
                    
                    <TodoInput  item={item} handleChange={handleChange} handleSubmit={handleSubmit} />

                    <TodoList
                        items={filteredItems}
                        updateTodosToShow={updateTodosToShow}
                        clearList={clearList}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handleDoneTask={handleDoneTask}
                        handleDeleteDoneTasks={handleDeleteDoneTasks}
                    />
                </div>
            </div>
        </div>
        
    );
};

export default App;
