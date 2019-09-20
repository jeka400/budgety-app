import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm, reset } from 'redux-form';
import './styles/AddForm.css';
 
class AddForm extends React.Component {
    renderFieldSelect = ({ input, label, type, meta: { touched, error }}) => (
          <div className="mx-sm-3 mb-2">
            <select className="custom-select" {...input}>
                <option></option>
                <option value="income">+</option>
                <option value="expense">-</option>
            </select>
            <div className="errorMessage">{touched && (error && <span>{error}</span>) }</div>
          </div>
    )

    renderFieldInput = ({ input, placeholder, type, meta: { touched, error }}) => (
          <div className="form-group mx-sm-3 mb-2">
            <input {...input} placeholder={placeholder} type={type} className="form-control" />
            <div className="errorMessage">{touched && (error && <span>{error}</span>) }</div>
          </div>
    )

    onSubmit = (formValues, dispatch) => {
        this.props.onSubmit(formValues);
        dispatch(reset('addForm'));
    }

    render() {
        return (
            <form onSubmit={ this.props.handleSubmit(this.onSubmit) } className="form-inline row">
                <Field
                    name="category" 
                    className="form-group mb-2 custom-select mr-sm-2 col-12 col-lg-1"
                    component={this.renderFieldSelect}
                />
                <Field 
                    component={this.renderFieldInput}
                    type="text" 
                    name="description" 
                    className="col-12 col-lg-6" 
                    placeholder="Add description"
                />
                <Field 
                    component={this.renderFieldInput} 
                    type="number" 
                    name="value" 
                    className="col-12 col-lg-4" 
                    placeholder="Value" 
                />
                <div className="col-12 col-lg-1 text-center">
                    <button type="submit" className="btn btn-primary submitButton mb-2 ">
                        <FontAwesomeIcon icon={faCheck} />
                    </button>   
                </div>                 
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.category) {
        errors.category = 'Please choose a category'
    } 
    if (!formValues.description) {
        errors.description = 'Description is required'
    } 
    if (!formValues.value) {
        errors.value = 'Required'
    } else if (isNaN(Number(formValues.value))) {
        errors.value = 'Must be a number'
    } else if (Number(formValues.value) < 1) {
        errors.value = 'It must be greatter or equal than 1'
    }
    return errors
}

export default reduxForm({ form: 'addForm', validate })(AddForm);