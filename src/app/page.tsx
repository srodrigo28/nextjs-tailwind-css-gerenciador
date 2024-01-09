import Login from "./login/page";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main>
        <ToastContainer />
        <Login />
    </main>
  )
}
