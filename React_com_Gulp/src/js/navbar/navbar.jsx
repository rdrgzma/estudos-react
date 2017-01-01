import React from 'react';

import NavMenu from './nav-menu';

export default class Navbar extends React.Component {
  render(){

    let menu = [
      {titulo: "Home", link: "#home"},
      {titulo: "Contato", link: "#contato"},
      {titulo: "Sobre", link: "#sobre"}
    ]

    let corNav = "nav-wrapper "+this.props.cor;

    return (

      <nav>
         <div className = {corNav}>
            <div className = "container">
               <a href="#" className = "brand-logo">{this.props.titulo}</a>
               <NavMenu menu = {menu=menu}/>
            </div>
         </div>
       </nav>
     );
  }
}
