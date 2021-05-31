import { AuthProvider } from "./context/authContext";
import RouterComponent from "./router/RouterComponent";

function MessagesApp() {
  return (
    <AuthProvider>
      <RouterComponent/>
    </AuthProvider>
  );
}

export default MessagesApp;
