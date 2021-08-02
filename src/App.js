import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/HomePages/Home";

import { grey } from "@material-ui/core/colors";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            marginTop: "70px",
            marginLeft: "235px",
            background: grey[500],
          }}
        >
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
