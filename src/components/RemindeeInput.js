import React from "react";

const RemindeeInput = props => {
  const { item, handleChange, handleSubmit, editItem } = props;

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend"></div>
          <input
            type="text"
            value={item}
            onChange={handleChange}
            className="form-control"
            placeholder="Type a reminder.."
          />
        </div>

        <button
          disabled={item ? false : true}
          type="submit"
          className={
            editItem
              ? "btn btn-block btn-success mt-3"
              : "btn btn-block btn-primary mt-3"
          }
        >
          {editItem ? "EDIT REMINDER" : "ADD A REMINDER"}{" "}
        </button>
      </form>
    </div>
  );
};

export default RemindeeInput;
