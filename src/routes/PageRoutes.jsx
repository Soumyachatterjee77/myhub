import { Route, Routes } from "react-router"
import LandingPage from "../pages/landing/LandingPage"

const PageRoutes = () => {
  return (
<Routes>
    <Route path="/" element={<LandingPage />} />
</Routes>
  )
}

export default PageRoutes