
import { Routes, Route } from "react-router-dom";
import IconPage from "./views/IconPage";
import CardPage from "./views/CardPage";

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<IconPage />} />
     <Route path="/card" element={<CardPage />} />
    </Routes>
  );
};

export default App;
