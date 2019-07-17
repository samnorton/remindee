import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import logo from "./remindee_logo.png";
import RemindeeInput from "./RemindeeInput";
import RemindeeList from "./RemindeeList";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handlechange");
  };

  handleSubmit = e => {
    console.log("handleSubmit");
  };

  clearList = () => {
    console.log("clearList");
  };

  handleDelete = id => {
    console.log("handleDelete");
  };

  handleEdit = id => {
    console.log("handleEdit");
  };

  render() {
    return (
      <div>
        <div class="header">
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <RemindeeInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <RemindeeList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
