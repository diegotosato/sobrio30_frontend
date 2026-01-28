import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import ResellerPage from "./pages/ResellerPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import CookiePolicy from "./pages/CookiePolicy"
import TermsConditions from "./pages/TermsConditions"

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/reseller" element={<ResellerPage />} />
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/termini-e-condizioni" element={<TermsConditions />} />
      </Routes>
    </Router>
  )
}

export default App
