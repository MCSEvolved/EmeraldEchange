import TopNavbar from "../Components/TopNavbar"
import App from "./App"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="flex flex-col bg-MCS-DarkBlue h-screen">
      <TopNavbar />
      <App />
      <Footer />
    </div>
  )
}