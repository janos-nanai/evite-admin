import { AppState } from "./types/store-types";

import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { restoreAuthState } from "./store/auth-slice";
import Layout from "./components/Layout/Layout";
import Summary from "./pages/Summary";
import EditGuest from "./pages/EditGuest";

function App() {
  const dispatch = useDispatch();
  const authState = useSelector((state: AppState) => state.auth);

  useEffect(() => {
    let localAuthData;
    const localAuthDataRaw = localStorage.getItem("localAuthData");
    if (localAuthDataRaw) {
      localAuthData = JSON.parse(localAuthDataRaw);
    }
    if (localAuthData && localAuthData.isLoggedIn === true) {
      console.log("auth restore");
      console.log("localAuthData:", localAuthData);

      dispatch(restoreAuthState(localAuthData));
    }
  }, [dispatch]);

  useEffect(() => {
    if (authState.isLoggedIn === true) {
      console.log("saving auth to localstorage");

      localStorage.setItem("localAuthData", JSON.stringify({ ...authState }));
    }
  }, [authState]);

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authState.isLoggedIn && <Summary />} />
          <Route path="/:voucherId" element={<EditGuest />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
