import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import React from "react";
import Layout from "../layout/Layout.tsx";
import Client from "../pages/AutoExtinguishing/Clients/Client.tsx";
import { DateNow } from "../components/DateNow/DateNow.tsx";
import WorkingOrNot from "../components/WorkingOrNot/WorkingOrNot.tsx";
import UserSettings from "../pages/UserSettings/UserSettings.tsx";

const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout topbarTitle={"Главная"} today active>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/clients"
          element={
            <Layout
              topbarTitle={"Автопогашение"}
              today={<DateNow />}
              active={<WorkingOrNot />}
              icon={"/src/assets/images/UserIconProfile.png"}
            >
              <Client />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout topbarTitle={"Профиль"} today active>
              <UserSettings />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
