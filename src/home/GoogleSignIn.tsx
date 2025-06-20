import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebaseConfig"; // Asegúrate de importar Firebase correctamente
import '../home-style/home-style.css';

const GoogleSignIn: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserName(user.displayName);
      console.log("Usuario autenticado:", user);
    } catch (error) {
      console.error("Error en la autenticación:", error);
    }
  };

  return (
      <div className="google-signin-container">
        {!userName ? (
          <button id="customBtn" onClick={handleSignIn}>
            <span className="icon"></span>
            <span className="buttonText">Google</span>
          </button>
        ) : (
          <p className="user-info">Conectado como: {userName}</p>
        )}
      </div>
  );
};

export default GoogleSignIn;