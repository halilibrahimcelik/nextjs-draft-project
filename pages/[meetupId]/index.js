import React, { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";
const data = {
  id: "m1",
  title: "First Meetup",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg/1024px-Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg",
  address: "	1801 Eastchase Pkwy #117",
  description: "this is our first meetup",
};

const MeetupDetails = () => {
  return (
    <Fragment>
      <MeetupDetail {...data} />
    </Fragment>
  );
};
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId); //we see this in the terminal
  return {
    props: {
      meetupData: {
        id: "m1",
        title: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg/1024px-Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg",
        address: "	1801 Eastchase Pkwy #117",
        description: "this is our first meetup",
      },
    },
  };
}
export default MeetupDetails;
