import React from 'react'
import styled from 'styled-components'
import { DynamicForm } from '../../components/dynamicForm'
import { Contact } from '../Contact'
import { Video } from '../Video'
import { Summary } from '../Summary'

const DynamicStyle = styled.section.attrs({
  className: 'flex flex-col items-center p-8'
})``
const TitleStyle = styled.section.attrs({
  className: 'text-primary font-bold text-xl'
})``

const Dynamic = () => {
  return (
    <DynamicStyle>
      <TitleStyle>Dynamic input components</TitleStyle>
      <Contact />
      <DynamicForm />
      <Video />
      <Summary />
    </DynamicStyle>
  );
}

export { Dynamic };
