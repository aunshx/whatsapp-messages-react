import SendMessages from "./components/SendMessage";
import Footer from "./components/layout/Footer";
import CreatorLink from "./components/layout/CreatorLink";

import "./App.css";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }} className='flex_middle'>
      <CreatorLink />
      <SendMessages />
      <Footer />
    </div>
  );
}

export default App;
