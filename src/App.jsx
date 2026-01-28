import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import ResellerPage from "./pages/ResellerPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import PrivacyPolicy from "./pages/PrivacyPolicy"

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/reseller" element={<ResellerPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
