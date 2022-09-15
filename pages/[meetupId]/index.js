import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const data = {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg/1024px-Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg",
    address: "	1801 Eastchase Pkwy #117",
    description: "this is our first meetup",
  };
  return (
    <Fragment>
      <MeetupDetail {...data} />
    </Fragment>
  );
};

export default MeetupDetails;
