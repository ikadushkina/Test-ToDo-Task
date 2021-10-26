import React, { useState } from "react";
import './ItemComponent.css';
import ButtonCustom from "../ButtonCustom";

const ItemComponent = ({ task, onToggle, onDelete, onEdit }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [newName, setNewName] = useState(task.name);

    const onSave = () => {
        setIsEdit(false);
        onEdit(task.id, newName);
    }

    const onCancel = () => {
        setNewName(task.name);
        setIsEdit(false);
    }


    return (
        <div className='item'>
            {
                isEdit ?
                    <>
                        <input
                            className='editInput'
                            type='text'
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                        />
                        <div className='side'>
                            <ButtonCustom isBlue className='margin' onClick={onSave} disabled={!newName}>Save</ButtonCustom>
                            <ButtonCustom onClick={onCancel}>Cancel</ButtonCustom>
                        </div>
                    </>
                    :
                    <>
                        <div className='side'>
                            <input type='checkbox' checked={task.checked} onChange={() => onToggle(task.id)}/>
                            <span className='name'>{task.name}</span>
                        </div>
                        <div className='side'>
                            <ButtonCustom
                                disabled={task.checked}
                                isBlue
                                className='margin'
                                onClick={() => setIsEdit(true)}
                            >
                                Edit
                            </ButtonCustom>
                            <ButtonCustom onClick={() => onDelete(task.id)}>Delete</ButtonCustom>
                        </div>
                    </>
            }
        </div>
    )
}

export default ItemComponent;