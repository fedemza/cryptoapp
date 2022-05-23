import React from "react";
import * as yup from "yup";
import CustomForm from "../commons/CustomForm";

const Contact = () => {
  const fields = ["nombre", "email", "mensaje"];

  const urlFetch = "https://jsonplaceholder.typicode.com/posts";
  const urlNavigate = "/";

  const validationSchema = yup.object({
    nombre: yup.string("Ingrese su nombre").required("su nombre es requerido"),
    email: yup
      .string("Ingrese su email")
      .email("Ingrese un email valido")
      .required("Su mail es requerido"),
    mensaje: yup
      .string("Ingrese su mensaje")
      .required("su mensaje es requerido"),
  });

  return (
    <div>
      <CustomForm
        fields={fields}
        validationSchema={validationSchema}
        urlNavigate={urlNavigate}
        urlFetch={urlFetch}
      />
    </div>
  );
};

export default Contact;
