import { BrowserRouter as Router, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
