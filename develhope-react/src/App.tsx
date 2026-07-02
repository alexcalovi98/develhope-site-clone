import { AreaPage } from "./pages/area-page/AreaPage"
import { HomePage } from "./pages/home-page/HomePage"
import { LoginPage } from "./pages/login-page/LoginPage"

function App() {
  return (
    <>
    <div className="container-full-width">
      <div className="container full-width">
        {/* <HomePage /> */}
        <AreaPage />
        {/* <LoginPage /> */}
      </div>
    </div>
    </>
  )
}

export default App
