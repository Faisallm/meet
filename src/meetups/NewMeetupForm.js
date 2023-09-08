import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
// the useRef is a hook
import { useRef } from "react";

function NewMeetupForm() {
  // will give us direct access to title input element
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  // react allows a useRef value to automatically
  // access dom elements. is this the react equivalent
  //   of document.getElementById(id).innerHTML???

  // react will automatically add an event argument
  // to the function whether it is added in the
  // declaration or not.
  function submitHandler(event) {
    // prevent form submission from
    // reloading the page
    event.preventDefault();

    // handle the submission
    // titleInputRef holds the current value

    // collect all the inputted values
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          {/* connecting label to title
          input field using htmlFor and id
            for screen readers */}
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleInputRef} required />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={imageInputRef} required />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef} required />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id="description"
            cols="30"
            rows="5"
            ref={descriptionInputRef}
            required
          ></textarea>
        </div>

        <div className={classes.actions}>
          {/* button that submits the form */}
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
