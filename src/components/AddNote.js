import React , {useContext, useState} from 'react';

import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext)
    const {addNote} = context;

    const [note, setnotes] = useState({title: "" , description: "", tag: ""})

    const handleClick= (e)=>{
        e.preventDefault();
        addNote(note.title , note.description, note.tag);

    }
    const onChange = (e)=>{
        setnotes({...note , [e.target.name]: e.target.value})

    }
  return (
    <div className="container my-3">
      <h1>Add a Note</h1>
      <form>
        <div className="form-group  my-3">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" placeholder="title" onChange={onChange}/>
        </div>
        <div className="form-group  my-3">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" name="description" placeholder="description" onChange={onChange} />
        </div>
        <div className="form-group  my-3">
          <label htmlFor="tag">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" placeholder="tag" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>


    </div>
  );
}

export default AddNote;
