import React from 'react';

export default class NavMenu extends React.Component {
  render(){
    let lista = this.props.menu.map(function(obj){
      return(
        <li key = {obj.titulo}><a href={obj.link}>{obj.titulo}</a></li>
      );
    });
    return(
      <ul id="nav-mobile" className = "right hide-on-med-and-down">
        {lista}
      </ul>
    );
  }

}
