// import React from 'react'
// import showResults from './showResults'
// import { reduxForm, Field } from 'redux-form'
// // var validator = require("email-validator");
//
// const validate = values => {
//   const errors = {}
//   if(!values.firstName){
//     errors.firstName = 'Required'
//   }
//   if(!values.lastName) {
//     errors.lastName = 'Required'
//   }
//   if(!values.email){
//     errors.email = 'Required'
//   }
// }
//
//
//
// // <pre>{JSON.stringify(meta, 0, 2)}</pre>
// const createRenderer = render = ({input, meta, label}) =>
// //below is for styling supposed to be all red if error the whole input field
// //below if active the whole field turns green
// <div className=
// {[
//   meta.error && meta.touched? 'error' : '',
//   meta.active ? 'active' : ''
// ].join(' ')}
// >
// <label>{label}</label>
// {render(input, label)}
// <input {...input} placeholder={label}/>
// {meta.error &&
//   meta.touched &&
//    <span>
//     {meta.error}
//    </span>}
// </div>
//
// //...input above, using redux form gives us all the functions of an input field
//
//
//
// //handlesubmit passed in from reduxform prop at the bottom
// // injects submitting know that we are submitting and waiting and cant press submit button twice
// const RenderInput = createRenderer((input, label) =>
//   <input {...input} placeholder={label} />
// )
//
// const RenderSelect = createRenderer((input, label) =>
//   <select {...input} placeholder={label} />
// )
//
// let DemoForm = ({handleSubmit, submitting}) =>
// <form onSubmit={handleSubmit(showResults)}>
//   <Field name="firstName" label="First Name" component={renderInput} />
//   <Field name="lastName" label="Last Name" component={renderInput} />
//   <Field name="email" label="Email" component={renderInput} />
//   <Field name='province' label='Province' component={renderInput} />
//   <button type="submit" disabled={submitting}>Submit</button>
// </form>
//
// DemoForm = reduxForm({
//   form: 'demo',
//   destroyOnUnmount: false,
//   validate
// })(DemoForm)
// export default DemoForm
//
// //redux form when your form unmounts like when you have a multipage form and you hit next for the next page, you do not want the previous form data to be destroyed so we use destroyunmount false this way it is kept until submit
//
// //every key is dispatching an action which is updating the state of just that input


import React from 'react'
import { reduxForm, Field } from 'redux-form'
import showResults from './showResults'
import isValidEmail from 'sane-email-validation'
import provinces from '../data/provinces'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid Email'
  }
  if (!values.province) {
    errors.province = 'Required'
  }
  return errors
}

const createRenderer = render => ({ input, meta, label, ...rest }) =>{
//<pre>{JSON.stringify(meta, 0,2)}</pre>
  return <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    <label>
      {label}
    </label>
    {render(input, label, rest)}
    {meta.error &&
      meta.touched &&
      <span>
        {meta.error}
      </span>}
  </div>
}

const RenderInput = createRenderer((input, label) =>{
  debugger
  return <input {...input} placeholder={label} />
}
)

const RenderSelect = createRenderer((input, label, { children }) =>
  <select {...input}>
    {children}
    //the children here is taken from createRenderer
  </select>
)

let DemoForm = ({ handleSubmit, submitting }) =>
  <form onSubmit={handleSubmit(showResults)}>
    <Field name="firstName" label="First Name" component={RenderInput} />
    <Field name="lastName" label="Last Name" component={RenderInput} />
    <Field name="email" label="Email" component={RenderInput} />
    <Field name="province" label="Province" component={RenderSelect}>
      <option />
      {provinces.map(province =>
        <option key={province} value={province}>
          {province}
        </option>
      )}
    </Field>
    <button type="submit" disabled={submitting}>
      Submit
    </button>
  </form>

DemoForm = reduxForm({
  form: 'demo',
  destroyOnUnmount: false,
  validate
})(DemoForm)
export default DemoForm
