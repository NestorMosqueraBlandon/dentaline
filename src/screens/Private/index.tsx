import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, NotFound } from "..";
import { Layout } from "@/components";
import { PrivateRoutes } from "@/constant-definitions";

const Private = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
};

export default Private;