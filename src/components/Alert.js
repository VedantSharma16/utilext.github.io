import React from "react";

function Alert(props) {
//Capitalize the first letter of the warning , i.e. 'S' of success
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);

  }

  return (
    props.alert && <div   //if props.alert is not null then do the thing written after &&
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
