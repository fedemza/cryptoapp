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
      .string("Ingrese su email")
      .email("Ingrese un mail valido")
      .required("su email es requerido"),
    telefono: yup
      .number("tiene que ser un numero")
      .typeError("eso no parece un numero de telefono")
      .positive("No se pueden numeros negativos")
      .integer("No se pueden decimales")
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
