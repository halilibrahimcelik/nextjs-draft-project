import React, { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const data = {
  id: "m1",
  title: "First Meetup",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg/1024px-Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg",
  address: "	1801 Eastchase Pkwy #117",
  description: "this is our first meetup",
};

const MeetupDetails = ({ meetupData }) => {
  return (
    <Fragment>
      <MeetupDetail {...meetupData} />
    </Fragment>
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://halocan:ZLKRHlgF2z3aY2gl@myfirstclustor.ts2f5.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId); //we see this in the terminal
  const client = await MongoClient.connect(
    "mongodb+srv://halocan:ZLKRHlgF2z3aY2gl@myfirstclustor.ts2f5.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  console.log(selectedMeetup);
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}
export default MeetupDetails;
