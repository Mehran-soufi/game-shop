import React from 'react'

const HeaderSearch = ({search,setSearch}) => {
  return (
    <div>
        <div className="search" onClick={()=>setSearch(!search)}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <span>Search for something ...</span>
        </div>
    </div>
  )
}

export default HeaderSearch