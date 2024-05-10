"use client"

import { log } from "console"
import { cpf } from "cpf-cnpj-validator"
import { Form, Field, Formik, ErrorMessage } from "formik"
import * as yup from "yup"

export default function Cadastro() {
  const initialFieldValues = {
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    cep: "",
  }

  const validationFieldSchema = yup.object({
    nome: yup
      .string()
      .min(2, "Preencha com no mínimo 2 caracteres")
      .required("Campo obrigatório"),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Campo obrigatório"),
    senha: yup
      .string()
      .min(6, "A senha deve conter no mínimo 6 caracteres")
      .required("Campo obrigatório"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .test((value) => cpf.isValid(value)),
    cep: yup.string().required("Campo obrigatório"),
  })

  const handleSave = (data) => {
    console.log(data)
  }

  return (
    <Formik
      initialValues={initialFieldValues}
      validationSchema={validationFieldSchema}
      onSubmit={(values) => {
        handleSave(values)
      }}
    >
      <Form>
        <label htmlFor="nome">nome</label>
        <br />
        <Field type="text" name="nome" id="nome" />
        <br />
        <ErrorMessage component="span" name="nome" />
        <br />
        <br />
        <label htmlFor="email">email</label>
        <br />
        <Field type="text" name="email" id="email" />
        <br />
        <ErrorMessage component="span" name="email" />
        <br />
        <br />
        <label htmlFor="senha">senha</label>
        <br />
        <Field type="password" name="senha" id="senha" />
        <br />
        <ErrorMessage component="span" name="senha" />
        <br />
        <br />
        <label htmlFor="cpf">cpf</label>
        <br />
        <Field type="text" name="cpf" id="cpf" />
        <br />
        <ErrorMessage component="span" name="cpf" />
        <br />
        <br />
        <label htmlFor="cep">cep</label>
        <br />
        <Field type="text" name="cep" id="cep" />
        <br />
        <ErrorMessage component="span" name="cep" />
        <br />
        <br />
        <label htmlFor="mensagem">mensagem</label>
        <br />
        <Field component="textarea" name="mensagem" id="mensagem" />
        <br />

        <br />
        <button type="submit">Cadastrar</button>
      </Form>
    </Formik>
  )
}
