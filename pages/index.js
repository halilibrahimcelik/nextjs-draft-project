import React from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg/1024px-Charles_Bridge_-_Prague%2C_Czech_Republic_-_panoramio.jpg",
//     address: "	1801 Eastchase Pkwy #117",
//     description: "this is our first meetup",
//   },
//   {
//     id: "m2",
//     title: "Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/9/9d/Palacio_de_Sch%C3%B6nbrunn%2C_Viena%2C_Austria%2C_2020-02-02%2C_DD_28.jpg",
//     address: "		177 Rosemount Pl Aberdeen",
//     description: "this is our second meetup",
//   },
//   {
//     id: "m3",
//     title: "Third Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/7/73/Aberdeen-Harbour-Skyline.jpg",
//     address: "	96 Market Pl Romford UK",
//     description: "this is our third meetup",
//   },
// ];
const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};
export async function getStaticProps() {
  //runs only in building phase
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://halocan:ZLKRHlgF2z3aY2gl@myfirstclustor.ts2f5.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(), //MongoDb produce _id in different format that's why we need to map meetups
      })),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   //fetch data from an API

//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export default Homepage;
