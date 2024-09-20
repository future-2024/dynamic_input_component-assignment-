import React from 'react'
import styled from 'styled-components'
import { FormControl } from '../FormControl'

const FormStyle = styled.section.attrs({
    className: 'pt-4 w-1/2'
  })``

const DynamicForm = () => {
  return (
    <FormStyle><FormControl /></FormStyle>
  );
}

export { DynamicForm };
