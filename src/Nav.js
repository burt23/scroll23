import React from 'react';

export default class Nav extends React.PureComponent{
  render(){
    return(
      <nav
      style={{
        position: "fixed",
        height: "5vh",
        top: 0,
        left: 0,
        width: "100vw",
        background: "rgba(0,0,0,0.8)",
        zIndex: 888,
        color: "white"
      }}
    >
      <ul
        style={{
          display: "flex",
          top: 0,
          justifyContent: "flex-end",
          fontSize: "1em",
          listStyle: "none",
          width: "100%"
        }}
      >
        <li
          style={{
            fontSize: "2em",
            flex: "1",
            alignContent: "start",
            textAlign: "left"
          }}
        >
          michaelBurton
        </li>
        <li
          style={{ flex: "0 1 auto", justifySelf: "end", padding: "0em 2em" }}
        >
          weddings
        </li>
        <li style={{ flex: "0", justifySelf: "end", padding: "0em 2em" }}>
          fineArt
        </li>
        <li style={{ flex: "0", justifySelf: "end", padding: "0em 2em" }}>
          privateList
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          wizardsChess
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          furnature
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          electronics
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          music
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          testimonials
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          about
        </li>
      </ul>
    </nav>
    )
  }
}
