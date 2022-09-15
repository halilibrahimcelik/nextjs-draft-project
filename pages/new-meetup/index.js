import React, { Fragment, useState } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const [data, setData] = useState("");
  const addMeetupHandler = (enteredData) => {
    setData(enteredData);
  };

  console.log(data);
  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
