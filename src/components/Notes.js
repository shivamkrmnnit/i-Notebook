import React, { useContext, useEffect, useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote ,editNote} = context;
  let navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token){
      
      getNote()

    }
    else{
      navigate("/login")
    }
    // eslint-disable-next-line
  }, [getNote,navigate]);

  const [note, setnotes] = useState({id: "",etitle: "" , edescription: "", etag: ""})

  const ref = useRef(null)
  const refClose = useRef(null)


  const updateNote = (currentNote) => {
    ref.current.click()
    setnotes({id:currentNote._id, etitle: currentNote.title , edescription: currentNote.description,etag: currentNote.tag})

  }

  const handleClick= (e)=>{
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click()

}
const onChange = (e)=>{
    setnotes({...note , [e.target.name]: e.target.value})

}

  

  return (
    <>
      <AddNote />

      
<button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="form-group  my-3">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" placeholder="etitle" onChange={onChange}/>
        </div>
        <div className="form-group  my-3">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} placeholder="edescription" onChange={onChange} />
        </div>
        <div className="form-group  my-3">
          <label htmlFor="tag">Tag</label>
          <input type="text" className="form-control" id="etag" name="etag"  value={note.etag} placeholder="etag" onChange={onChange} />
        </div>
        
      </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick= {handleClick}type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  );
}

export default Notes;
