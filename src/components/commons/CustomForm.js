import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { TextField, Container } from "@mui/material";

const CustomForm = ({ fields, handleSubmit, validationSchema }) => {
  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container maxWidth="sm" sx={{ mt: "10px", minHeight: "650px" }}>
      <form onSubmit={formik.handleSubmit}>
        {fields.map((field, index) => (
          <TextField
            key={index}
            fullWidth
            id={field}
            name={field}
            label={field}
            value={formik.values.field}
            onChange={formik.handleChange}
            error={formik.touched[field] && Boolean(formik.errors[field])}
            helperText={formik.touched[field] && formik.errors[field]}
          />
        ))}

        <Button color="primary" variant="contained" fullWidth type="submit">
          Enviar
        </Button>
      </form>
    </Container>
  );
};

CustomForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

CustomForm.defaultProps = {
  validationSchema: yup.object({}),
};

export default CustomForm;
