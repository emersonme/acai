import React from 'react'
import {Form, Input} from '@rocketseat/unform'
import {Link} from 'react-router-dom'

import logo from '~/assets/logo.png'

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="acai" />

      <Form>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />

        <button type="submit">{'Acessar'}</button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  )
}
