// the useHistory hook is used to trigger
// navigation automatically.

import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../meetups/NewMeetupForm";

function NewMeetupPage() {
  // navigate to a new page programmatically
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    // this function will pass the data to the...
    // firebase database.

    // fetch from api/to api
    // by default fetch is a get request

    // the fetch method returns a promise
    fetch("https://meet-747e0-default-rtdb.firebaseio.com/meet.json", {
      method: "POST", // post method
      body: JSON.stringify(meetupData), // data to be saved
      headers: {
        // makiing it crystal clear that this request...
        // carries json data.
        "Content-Type": "application/json",
      },
    }).then(() => {
      // navigate away from the add meetup form page
      navigate("/");
    });

    console.log(meetupData);
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
