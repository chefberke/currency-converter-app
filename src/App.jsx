import { useState } from "react";
import Currency from "./components/currency";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="w-full h-[100vh] bg-gray-100 flex-col items-center justify-center">
      <Header />
      <Currency />
      <Footer />
    </div>
  );
}

export default App;
