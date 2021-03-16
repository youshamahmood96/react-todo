import React from 'react';
import AllTodos from './allTodos/AllTodos';
import ControlPanel from './controlPanel/ControlPanel';
import Input from './input/Input';

const Landing = () => {
    return (
        <React.Fragment>
        <Input/>
        <AllTodos/>
        <ControlPanel/>
        </React.Fragment>
    );
};

export default Landing;