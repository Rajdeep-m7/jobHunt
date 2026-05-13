import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router"
import Home from "./pages/Home"
import AuthForm from "./pages/AuthForm"
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthForm />} />
      </Route>
    )
  )
  return (
     <RouterProvider router={router} />
  )
}

export default App