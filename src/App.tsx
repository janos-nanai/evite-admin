import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Summary from "./pages/Summary";
import EditGuest from "./pages/EditGuest";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/:voucherId" element={<EditGuest />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
