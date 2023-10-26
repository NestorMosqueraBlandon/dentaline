import { Layout } from "./components";
import Agenda from "./screens/Agenda";
import Dashboard from "./screens/Dashboard";
import Historial from "./screens/Historial";
import Register from "./screens/Register";
import Signin from "./screens/Signin";
import Info from "./screens/Historial/Forms/Info";
import InfoData from "./screens/Historial/FormsData/InfoData";
import InfoDataAnt from "./screens/Historial/FormsAnt/InfoDataAnt";
import Signup from "./screens/Signup";
import { Routes, Route } from 'react-router-dom'
const Application = () => {

  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route element={<Layout />} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="register" element={<Register />} />
        <Route path="history" element={<Historial />} />
        <Route path="setting" element={<Dashboard />} />
        <Route path="info" element={<Info />} />
        <Route path="info-data" element={<InfoData />} />
        <Route path="info-data-ant" element={<InfoDataAnt />} />
        
      </Route>

    </Routes>
  )
}

export default Application;
