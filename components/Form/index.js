import React, {PropTypes} from 'react'
import TextField from '../TextField'
import Button from '../Button'

if (typeof window !== 'undefined') {
  require('./index.css')
}

function Form(props) {
  const {title, fields, tip, button, footer, error, ...others} = props
  return (
    <form className="z-form" {...others}>
      <div className="z-form__title">{title}</div>
      <div className="z-form__fields">
        {fields.map((field, idx) => <div key={idx} className="z-form__field">{field}</div>)}
      </div>
      <div className="z-form__tip">{tip}</div>
      <div className="z-form__button">{button}</div>
      {error && <div className="z-form__error">{error}</div>}
      <div className="z-form__footer">{footer}</div>
    </form>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.shape({type: PropTypes.oneOf([TextField])})).isRequired,
  button: PropTypes.shape({type: PropTypes.oneOf([Button])}).isRequired,
  tip: PropTypes.node,
  footer: PropTypes.node,
  error: PropTypes.node
}

export default Form
