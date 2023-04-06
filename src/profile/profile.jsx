import React from "react";
import PropTypes from "prop-types";


const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <h2 style={{ marginTop: "15px" , fontSize:"2rem"}}>{fullName}</h2>
      <p style={{ fontSize: "1.2rem" }}>{bio}</p>
      <span>
        <p style={{ fontSize: "1.4rem" }}>{profession}</p>
      </span>
      <div>{children}</div>
      <button
        
        onClick={handleName}
        style={{
          fontSize: "large",
          width: "200px",
          backgroundColor: "orange",
          borderRadius: "15px",
          height: "50px",
        }}
      >
        Show Name
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Pablo Emilio Escobar Gaviria",
  bio: "Pablo Emilio Escobar Gaviria, né le 1ᵉʳ décembre 1949 à Rionegro, Antioquia, Colombie, et mort le 2 décembre 1993 à Medellín",
  profession: " Trafiquant de cocaïne",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Profile;
