import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../Components/Welcome/Welcome";
import { CustomerNav } from "../Components/Nav/CustomerNav";

export const CustomerViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
      </Route>
    </Routes>
  );
};
