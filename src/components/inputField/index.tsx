/* eslint-disable react/jsx-key */
import React, { ChangeEventHandler, useState } from "react";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

interface inputDataStyle {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  inputMode:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  label: string;
  value: string;
  type: string;
  options: Array<string>;
}

function InputField(props: inputDataStyle) {
  const showFieldName = (val: string) => {
    if (val === "firstName") {
      return "First Name";
    } else if (val === "lastName") {
      return "Last Name";
    } else if (val === "emailAddress") {
      return "Email Address";
    }
    {
      return val.charAt(0).toUpperCase() + val.slice(1);
    }
  };

  return (
    <div className="flex flex-col w-full mt-6 bg-white">
      {props.type === "select" ? (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            label="Gender"
            onChange={props.onChange}
          >
            {props.options &&
              props.options.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
          </Select>
        </FormControl>
      ) : (
        <TextField
          id="outlined-basic"
          variant="outlined"
          multiline={props.type === "multiline" ? true : false}
          maxRows={props.type === "multiline" ? 4 : 0}
          label={showFieldName(props.label)}
          value={props.value}
          onChange={props.onChange}
          type={props.type === "number" ? "number" : "text"}
        />
      )}
    </div>
  );
}

export default InputField;
