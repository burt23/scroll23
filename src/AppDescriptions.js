import React from "react";

const descriptorWrapper = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
};

const flexItem = {
  flex: "auto"
};

const flexColumn = {
  listStyle: "none",
  display: "flex",
  flexDirection: "column"
};

const Items = items => {
  return (
    <li style={flexItem}>
      <h3>
        <a href={items.list[1]}>{items.list[0]}</a>
      </h3>
      <h3>
        <a href={items.list[3]}>{items.list[2]}</a>
      </h3>
    </li>
  );
};

export default class AppDescriptions extends React.PureComponent {
  render() {

    return (
      <div style={descriptorWrapper}>
        {this.props.descriptors.map(el => (
          <div style={flexItem}>
          <ul style={flexColumn}>
            <h2>{el.header}</h2>
            <Items list={el.links} />
          </ul>
          </div>
        ))}
      </div>
    );
  }
}

