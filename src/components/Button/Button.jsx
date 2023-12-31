import React from 'react'
import { motion } from 'framer-motion';
import './Button.css';


const Button = (props) => {
  const { children, className, ...rest } = props;

    return (
        <motion.button whileTap={{ scale: 0.95 }} className={`button-default ${className}`} {...rest}>
            {children}
        </motion.button>
    )
}

export default Button