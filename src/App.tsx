import Header from "./Header/header";
import Navbar from "./Navbar/navbar";
import Introduce from "./Introduce/introduce";
import Wapper from "./Wapper/wapper";
import images from "./Wapper/data";
import Main from "./Main/main";
import Footer from "./Footer/footer";
import End from "./End/last";

function App() {
  return (
    <div className="h-full w-full relative">
      <Header />
      <Navbar />
      <Introduce />
      <Wapper Images={images} />
      <Main />
      <Footer />
      <End />
    </div>
  );
}

export default App;
