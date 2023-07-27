import React, { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderAuth from "./HeaderAuth";
import HeaderItem from "./HeaderItem";
import Search from "./Search";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [auth, setAuth] = useState(false);

  return (
    <header>
      <div className="header">
        <HeaderLogo />
        <nav>
          <HeaderSearch search={search} setSearch={setSearch} />
          <HeaderItem />
        </nav>
        <HeaderAuth auth={auth} setAuth={setAuth} />
      </div>
      <Search search={search} setSearch={setSearch} />
    </header>
  );
};

export default Header;
