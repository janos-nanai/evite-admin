import React from "react";

import { Accordion } from "react-bootstrap";

import GuestList from "./components/Guests/GuestList";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Accordion defaultActiveKey="0">
        <GuestList />
      </Accordion>
    </Layout>
  );
}

export default App;
