import './FormValidationMessage.css';
import React from 'react';

export const FormValidationMessage = ({message}) => {
  return (
    <div className="text-danger" aria-invalid="true">{message}</div>
  )
}
