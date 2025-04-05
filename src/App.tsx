import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import WorkflowBuilder from "./pages/workflow/WorkflowBuilder";
import CreateProcess from "./pages/workflow/CreateProcess";
// import SimpleHeader from "./pages/workflow/savePanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<WorkflowBuilder />} />
        <Route path="/createProcess" element={<CreateProcess />} />
        {/* <Route path="/save" element={<SimpleHeader />} /> */}
      </Routes>
    </Router>
    // <LoginForm />
  );
}

export default App;
