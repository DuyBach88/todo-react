import React, { Component } from "react";
import "./User.css";
export default class UserInfor extends Component {
  state = {
    name: "",
    age: "",
  };

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnsubmit = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.age) {
      alert("Please enter both name and age.");
      return;
    }

    this.props.addNewUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: this.state.name,
      age: this.state.age,
    });
    this.setState({
      name: "",
      age: "",
    });
  };

  render() {
    const { listUsers } = this.props;
    return (
      <>
        <div className="container">
          Hello World với BoBo<br></br> My name is {this.state.name} and I'm{" "}
          {this.state.age}
          <form
            onSubmit={(event) => {
              this.handleOnsubmit(event);
            }}
          >
            <label>
              Name:
              <input
                onChange={(event) => {
                  this.handleChangeName(event);
                }}
                type="text"
                value={this.state.name}
              />
            </label>
            <label>
              Age:
              <input
                onChange={(event) => {
                  this.handleChangeAge(event);
                }}
                type="text"
                value={this.state.age}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}
