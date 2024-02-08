import React from 'react';

const TodoInput = ({ item, handleChange, handleSubmit, editItem }) => {
    return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-dark text-white">
                            <i className="fas fa-book" />
                        </div>
                    </div>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add Your Task"
                        value={item}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className={`btn btn-block mt-3 ${editItem ? 'btn-success' : 'btn-dark'}`}
                >
                    {editItem ? 'Edit task' : 'Add new task'}
                </button>
            </form>
        </div>
    );
};

export default TodoInput;
