import React from "react";
import RemindeeItem from "./RemindeeItem";

const RemindeeList = props => {
  const { items, clearList, handleDelete, handleEdit } = props;

  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">Reminder List</h3>

      {items.length > 0 ? (
        items.map(item => {
          return (
            <RemindeeItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })
      ) : (
        <h6 className="text-center">No reminder added.</h6>
      )}
      <button
        type="button"
        className="btn btn-danger btn-block text-uppercase mt-5"
        onClick={clearList}
      >
        Clear List
      </button>
    </ul>
  );
};
export default RemindeeList;
