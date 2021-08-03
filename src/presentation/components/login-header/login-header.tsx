import React, { memo } from 'react'
import Logo from '../logo/logo'
import Styles from './login-header-styles.scss'

/* memo => evitar que o componente seja renderizado quando houver mudança de estado
em outros componentes */

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4DEV - Enquete para Programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
