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
  const { accessToken, refreshToken } = useSelector(
    (state: AppState) => state.auth
  );
  const isLoggedIn = !!(accessToken || refreshToken);

  useEffect(() => {
    let localAuthData;
    const localAuthDataRaw = localStorage.getItem("localAuthData");
    if (localAuthDataRaw) {
      localAuthData = JSON.parse(localAuthDataRaw);
    }
    if (localAuthData) {
      dispatch(restoreAuthState(localAuthData));
    }
  }, [dispatch]);

  // useEffect(() => {
  //   console.log("saving to local");

  //   localStorage.setItem(
  //     "localAuthData",
  //     JSON.stringify({ refreshToken: authState.refreshToken })
  //   );
  // }, [authState.refreshToken]);

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn && <Summary />} />
          <Route path="/:id" element={<EditGuest />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
