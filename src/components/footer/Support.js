import React from "react";
import * as yup from "yup";
import CustomForm from "../commons/CustomForm";

const Support = () => {
  const fields = ["nombre", "email", "telefono", "mensaje"];

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = yup.object({
    nombre: yup.string("Ingrese su nombre").required("su nombre es requerido"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    telefono: yup
      .number("tiene que ser un numero")
      .required("su numero de telefono es requerido"),
    mensaje: yup
      .string("Ingrese su mensaje")
      .required("su mensaje es requerido"),
  });

  return (
    <div>
      <CustomForm
        fields={fields}
        handleSubmit={handleSubmit}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default Support;
