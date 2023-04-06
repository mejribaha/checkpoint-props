import React from "react";
import Profile from "./profile/profile";
import "./App.css";

function App() {
  const handleName = () => {
    alert("Pablo Emilio Escobar Gaviria");
  };
  return (
    <div className="App">
      <Profile
        fullName="Pablo Emilio Escobar Gaviria"
        bio="Pablo Emilio Escobar Gaviria, né le 1ᵉʳ décembre 1949 à Rionegro, Antioquia, Colombie, et mort le 2 décembre 1993 à Medellín."
        profession="Trafiquant de cocaïne"
        handleName={handleName}
      >
        <img
          src="./assets/pablo.jpg"
          alt="profile"
          style={{ width: "500px",height: "300px" , borderRadius:"15px"}}
        />
      </Profile>
    </div>
  );
}

export default App;
