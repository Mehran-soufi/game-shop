import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderRegister = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="register">
        <button onClick={() => navigate("/auth")}>signup | signin</button>
      </div>
    </div>
  );
};

export default HeaderRegister;
