import React from 'react'
import { Formik, ErrorMessage, Form, Field } from 'formik'
import Error from './Error'
import * as Yup from 'yup'
import auth from "../../auth"
import { DisappearedLoading } from 'react-loadingg'
import '../../Styles.css'
import logo from "../../dritix.jpg"
import { users } from "../../services";

const SignInForm = ({ history }) => {

  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (values, actions) => {
    setLoading(true)
    setTimeout(() => {
      const  filterUser = users.find(user => user.email === values.email && user.password === values.password)
      if (filterUser) {
        auth.login(() => {
          history.push("/welcome", filterUser)
        })
      } else {
        console.log('salio')
      }
      actions.setSubmitting(false);
      setLoading(false)
    }, 2000);
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Dirección de email inválida').required('Debe introducir un email'),
    password: Yup.string().required('Por favor ingresar una contraseña')
  })

  if (loading) {
    return <DisappearedLoading />
  }

  return (
    <div>
      <img src={logo} alt="logo" className="App-logo"/>
      <div className="login-text">
        <h1>DRIXIT</h1>
        <p>TECHNOLOGIES</p>
      </div>
      <div className="container-sign-in card text-left form-group">
        <Formik initialValues={{email: '', password: ''}} validationSchema={validationSchema} onSubmit={handleSubmit} >
          <Form className='form-group p-5'>
            <div className="form-group">
              <label>Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Ingresar email"
                className="form-control"
              />
              <ErrorMessage component={Error} name="email" />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <Field
                name="password"
                type="password"
                placeholder="Ingresar Contraseña"
                className="form-control"
              />
              <ErrorMessage component={Error} name="password" />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Ingresar</button>
              <div><a href="/">Olvidé mi contraseña</a></div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}



export default SignInForm
