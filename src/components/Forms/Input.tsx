import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input, { InputProps } from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import uniqid from "uniqid";
import styled from "styled-components";
import { Field } from "formik";

const StyledLabel = styled(InputLabel)({
  textTransform: "capitalize"
});

const InputField: React.FC<InputProps & { name: string; label?: string }> = ({
  type,
  name,
  label,
  ...props
}) => {
  const formId: string = uniqid();
  return (
    <Field
      name={name}
      render={({ form: { errors, handleChange } }: any) => {
        const hasError = errors[name] ? true : false;
        return (
          <FormControl error={hasError} fullWidth>
            <StyledLabel htmlFor={formId}>{label ? label : name}</StyledLabel>
            <Input
              {...props}
              name={name}
              id={`${name}_${formId}`}
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

export default InputField;
