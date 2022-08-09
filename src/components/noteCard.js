import "../App.css";

function NoteCard(props) {
  return (
    <div className="newNotes">
        {/* <h2>Your Notes...</h2>
        <hr/> */}
        <div>
          <p>{props.title}</p>
          <p>{props.description}</p>
          <p>{props.date}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
    </div>
  );
}

// Default Props HIGHLY IMPORTANT
NoteCard.defaultProps = {
  title: '',
  description: '',
  date: ''
};

export default NoteCard;
