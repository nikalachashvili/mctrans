import { Route, Routes } from "react-router";
import Adminpanel from './adminpanel/Adminpanel';
import Page from "./page/Page";
import "./i18n/i18n";
import { useEffect } from "react";
import i18n from "./i18n/i18n";
import { useSelector } from "react-redux";

function App() {
  let { language } = useSelector(state => state.translate)

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <Routes>
      <Route path={'adminpanel/*'} element={<Adminpanel />} />
      <Route path={'/*'} element={<Page />} />
    </Routes>
  );
}

export default App;
