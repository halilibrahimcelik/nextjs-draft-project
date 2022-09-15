import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg/1024px-Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg",
    address: "	1801 Eastchase Pkwy #117",
    description: "this is our first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Palacio_de_Sch%C3%B6nbrunn%2C_Viena%2C_Austria%2C_2020-02-02%2C_DD_28.jpg",
    address: "		177 Rosemount Pl Aberdeen",
    description: "this is our second meetup",
  },
  {
    id: "m1",
    title: "Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Aberdeen-Harbour-Skyline.jpg",
    address: "	96 Market Pl Romford UK",
    description: "this is our third meetup",
  },
];
const Homepage = () => {
  return (
    <section>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </section>
  );
};

export default Homepage;
