import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderLogo() {
  const navigate = useNavigate()
  return <div className="logo" onClick={()=>navigate('/')} >game shop</div>;
}

export default HeaderLogo;
