import { Toaster } from "sonner";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        duration={5000}
        expand={true}
      />
    </>
  )
}

export default App