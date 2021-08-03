import React, { memo } from 'react'
import Styles from './footer-styles.scss'

/* memo => evitar que o componente seja renderizado quando houver mudança de estado
em outros componentes */

const Footer: React.FC = () => {
  return (
    <header className={Styles.footer}>
    </header>
  )
}

export default memo(Footer)
