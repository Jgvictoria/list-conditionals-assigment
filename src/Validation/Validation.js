import React from 'react';

const validation = (props) => {
    const MIN_LENGTH = 5;
    let validationMessage = "Text too short";
    if(props.text.length > MIN_LENGTH) {
        validationMessage = "Text long enough";
    }

    return (
        <p>{validationMessage}</p>
    );
}

export default validation;