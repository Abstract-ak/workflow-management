import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import WorkflowBuilder from "./pages/workflow/WorkflowBuilder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<WorkflowBuilder />} />
      </Routes>
    </Router>
    // <LoginForm />
  );
}

export default App;
