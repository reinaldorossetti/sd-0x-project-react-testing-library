import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({
  className,
  children,
  disabled,
  onClick,
  dataTestId,
}) => (
  <button
    onClick={ onClick }
    data-testid={ dataTestId }
    className={ `button-text ${className}` }
    disabled={ disabled }
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  dataTestId: '',
};

export default Button;
