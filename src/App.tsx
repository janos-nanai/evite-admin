import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

import GuestList from "./components/Guests/GuestList";
import Layout from "./components/Layout/Layout";
import NewGuest from "./components/Form/NewGuest";

function App() {
  const [showCreateGuest, setShowCreateGuest] = useState(false);

  const openCreateGuestHandler = () => {
    setShowCreateGuest(true);
  };
  const closeCreateGuestHandler = () => {
    setShowCreateGuest(false);
  };

  return (
    <Layout onCreateGuest={openCreateGuestHandler}>
      <NewGuest show={showCreateGuest} onClose={closeCreateGuestHandler} />
      <Accordion defaultActiveKey="0">
        <GuestList />
      </Accordion>
    </Layout>
  );
}

export default App;
