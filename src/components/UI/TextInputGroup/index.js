import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = (
    {
        label,
        name,
        value,
        placeholder,
        type,
        onChange,
        error
    }
) => {
    return (
        <div className={'form-group'}>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                type={type}/>
            {error && <div className={'invalid-feedback'}>{error}</div>}
        </div>
    );
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string
};

TextInputGroup.defaultProps = {
    type : 'text'
};

export default TextInputGroup;