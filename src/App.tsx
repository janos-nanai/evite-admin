import React from "react";

import { Accordion } from "react-bootstrap";

import GuestList from "./components/Guests/GuestList";
import Layout from "./components/Layout/Layout";
import NewGuest from "./components/Form/NewGuest";

function App() {
  return (
    <Layout>
      <NewGuest />
      <Accordion defaultActiveKey="0">
        <GuestList />
      </Accordion>
    </Layout>
  );
}

export default App;
