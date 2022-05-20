import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext.js';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context; 
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">

                    </div>
                    <h5 className="card-title">{note.title}</h5>
                    <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully", "danger");}}> </i>
                    <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}> </i>
                    <p className="card-text">{note.description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Noteitem
