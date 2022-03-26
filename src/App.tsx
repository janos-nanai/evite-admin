import { GuestData } from "./types/guest-types";

import React from "react";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

import GuestList from "./components/Guests/GuestList";
import Layout from "./components/Layout/Layout";
import NewGuest from "./components/Form/NewGuest";

function App() {
const [loadedGuests, setLoadedGuests] = useState<GuestData[] | []>([]);
  
  useEffect(() => {
    fetch("http://localhost:8888/api/admin")
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setLoadedGuests(data);
      });
  }, []);

  return (
    <Layout>
      <NewGuest />
      <Accordion defaultActiveKey="0">
        <GuestList guests={loadedGuests}/>
      </Accordion>
    </Layout>
  );
}

export default App;
