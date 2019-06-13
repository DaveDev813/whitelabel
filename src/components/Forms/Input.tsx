import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input, { InputProps } from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
// import styled from "styled-components";
import { Field } from "formik";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";

// const StyledLabel = styled(InputLabel)({
//   textTransform: "capitalize"
// });

export const InputField: React.FC<
  InputProps & { name: string; label?: string }
> = ({ type, name, label, ...props }) => {
  return (
    <Field
      name={name}
      render={({ form: { errors, handleChange } }: any) => {
        const hasError = errors[name] ? true : false;
        return (
          <FormControl error={hasError} fullWidth>
            <InputLabel style={{ textTransform: "capitalize" }}>
              {label ? label : name}
            </InputLabel>
            <Input
              {...props}
              name={name}
              id={`${name}`}
              onChange={handleChange}
              aria-describedby="component-error-text"
              type={type ? type : "input"}
              autoComplete={name}
            />
            {errors[name] && (
              <FormHelperText id="component-error-text">
                {errors[name]}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    />
  );
};

export const CheckBox: React.FC<
  Partial<FormControlLabelProps> & { name: string; label?: string }
> = ({ name, label, ...props }) => {
  return (
    <Field
      name={name}
      render={({ form: { errors, handleChange } }: any) => {
        const hasError = errors[name] ? true : false;
        return (
          <FormControl error={hasError} fullWidth>
            <FormControlLabel
              onChange={handleChange}
              control={<Checkbox color="secondary" name="terms" value="" />}
              label={label ? label : name}
            />
            {errors[name] && (
              <FormHelperText
                id="component-error-text"
                style={{ marginTop: "-5px" }}
              >
                {errors[name]}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    />
  );
};
