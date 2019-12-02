import React from "react";
import './form-input.styles.scss';

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label.toUpperCase()}
      </label>
    ) : null}
  </div>
);
