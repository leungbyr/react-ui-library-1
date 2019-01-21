import React          from 'react';
import styled         from 'styled-components';
import {PRIMARY_FONT, PRIMARY_COLOUR} from "../variables";
import PropTypes      from 'prop-types';

const FormTitle = styled.label`
    margin-top: 10px;
`;

const InformationMessage = styled.p`
    margin: 5px 0 0;
    font-size: 0.8rem;
    color: rgba(0,0,0,0.5);
`;

const FormInputField = styled.input`
    font-weight: bold;
    box-sizing: border-box;
    font-family: ${PRIMARY_FONT};
    background-color: rgba(0,0,0,0.05);
    border-radius: 10px;
    border: none;
    outline: none;
    width: 100%;
    padding: 10px 20px 10px 20px;
    margin: 10px 0;
    opacity: 0.8;
    transition: opacity ease-in-out 300ms;
    &:focus, &:hover {
        opacity: 1;
    }
`;

const ErrorMessage = styled.p`
    font-weight: bold;
    padding-left: 5px;
    font-size: 0.8rem;
    transform: translate3d(0, -100%, 0);
    margin-top: -5px;
    pointer-events: none;
    opacity: 0;
    color: ${PRIMARY_COLOUR};
    transition:
        transform 300ms ease-in-out,
        opacity 300ms ease-in-out
    ;
    ${ ({ error }) => error? `
        transform: translate3d(0,0,0);
        opacity: 1;
    `: '' }
`;

const InputGroup = styled.div`
    font-family: ${PRIMARY_FONT};
    padding-right: 40px;
    font-weight: bold;
    font-size: 1rem;
`;

export const Input = ({
        title,
        type = 'text',
        placeholder,
        name,
        information,
        error,
        onChange,
        onKeyPress,
        value,
        className
    }) => {
    return (
        <InputGroup className={className}>
            <FormTitle htmlFor={name}>{title}</FormTitle>
            {information ? <InformationMessage>{information}</InformationMessage> : null}
            <FormInputField
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                onKeyPress={onKeyPress}
                value={value}
                aria-describedby={name}
            />
            <ErrorMessage id={name} error={error}>{error || ''}</ErrorMessage>
        </InputGroup>
    )
};

Input.propTypes = {
    title: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    /** Managed by SC */
    className: PropTypes.string,
    type: PropTypes.string,

    placeholder: PropTypes.string,
    information: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string
};
