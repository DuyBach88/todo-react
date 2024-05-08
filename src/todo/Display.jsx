import React, { Component } from "react";
import "./display.css";
export default class Display extends Component {
  state = {
    status: true,
  };
  toggleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  deleteUser = (userId) => {
    // Gọi hàm xử lý xóa user được truyền từ parent component
    this.props.deleteUser(userId);
  };
  render() {
    const { listUsers } = this.props;
    const { status } = this.state;
    return (
      <>
        <div className="content">
          <div>
            {" "}
            <button onClick={this.toggleStatus}>
              {status === true ? "Hide Users" : "Show Users"}
            </button>
          </div>
          {status === true ? (
            <>
              {listUsers &&
                listUsers.length > 0 &&
                listUsers.map((user, index) => {
                  return (
                    <div
                      key={user.id}
                      className={user.age > 18 ? "blue" : "red"}
                    >
                      <div>Id: {user.id}</div>
                      <div>My name 's {user.name}</div>
                      <div>My age's {user.age} </div>
                      <button onClick={() => this.deleteUser(user.id)}>
                        Delete
                      </button>
                      <hr></hr>
                    </div>
                  );
                })}
            </>
          ) : (
            <div>No users to display</div>
          )}
        </div>
      </>
    );
  }
}
