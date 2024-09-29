import FiddlingGroup from "./components/FiddlingGroup";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./App.css"; // Add your additional global styles here if needed

function App() {
  return (
    <div className="container-fluid bg-dark min-vh-100 text-light d-flex justify-content-center align-items-center">
      <FiddlingGroup />
    </div>
  );
}

export default App;
