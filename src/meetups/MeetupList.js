import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

// this will hold the collection of cards
function MeetupList(props) {
    // always check if you are returning something 
    // from the function
  return(
    <ul className={classes.list}>
    {/* each meetup item is a list item */}
    {props.meetups.map((meetup) => (
      <MeetupItem
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
      />
    ))}
  </ul>
  );
  
}

export default MeetupList;
