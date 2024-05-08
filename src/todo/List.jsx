import React, { Component } from "react";
import UserInfor from "./UserInfor";
import Display from "./Display";

export default class List extends Component {
  state = {
    listUsers: [
      { id: 1, name: "mina", age: 15 },
      { id: 2, name: "take", age: 26 },
      { id: 3, name: "fuko", age: 19 },
    ],
    // nextId: 4,
  };
  // Add User
  addNewUser = (userObj) => {
    this.setState({
      listUsers: [...this.state.listUsers, userObj],
    });
  };
  // addNewUser = (userObj) => {
  //   this.setState((prevState) => ({
  //     listUsers: [...prevState.listUsers, { ...userObj, id: prevState.nextId }],
  //     nextId: prevState.nextId + 1, // Tăng giá trị id cho user kế tiếp
  //   }));
  // };
  deleteUser = (userId) => {
    let listCurrent = this.state.listUsers.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listCurrent,
    });
    alert("Delete success");
  };
  render() {
    return (
      <>
        <div>
          <UserInfor addNewUser={this.addNewUser}></UserInfor>
          <br></br>
          <br></br>
          <Display
            listUsers={this.state.listUsers}
            deleteUser={this.deleteUser}
          ></Display>
        </div>
      </>
    );
  }
}
