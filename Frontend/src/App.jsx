import { RouterProvider } from "react-router";
import { router } from "./app.route";
import { AuthProvider } from "./features/auth/auth.context";

function App() {
<AuthProvider>  
  return <RouterProvider router={router} />
</AuthProvider>
}

export default App;
