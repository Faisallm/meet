function Todo(props) {

  function deleteHandler() {
    
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        {/* you just want to point to 
        the function, you do not want to 
        execute it */}
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;

// according to convention, custom components
// should start with a capital letter
