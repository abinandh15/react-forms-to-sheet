import React from 'react'
import { useFormik } from 'formik'
import './FormComponent-style.scss'
import appeadRowToSpreadsheet from '../GoogleSheetsService'

const FormComponent = () => {
    const detailsForm = useFormik({
        initialValues:{
            name: '',
            email: ''
        },onSubmit: values=>{ 
            console.log(values)
            appeadRowToSpreadsheet(values)
        }
    })
    return (
        <form onSubmit={detailsForm.handleSubmit} className="DetailsForm">
            <label htmlFor="name" className="mt-2">Name</label>
            <input type="text" id="name" name="name" className="mt-1" onChange={detailsForm.handleChange}></input>
            <label htmlFor="email" className="mt-2">Email</label>
            <input type="email" id="email" name="email"  className="mt-1" onChange={detailsForm.handleChange}></input>
            <button type="submit" className="mt-3 submit-button">Submit</button>
        </form>
    )
}

export default FormComponent
