import React, { useState } from 'react';

function HookCounter3() {

    const [name, setName] = useState({ firstName: '', lastname: '' })
    return (
        <form>
            <label>Name </label>
            <input type='text'
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value})}/>

            <input type='text'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value})}/>

            <h1>First Name={name.firstName}</h1>
            <h1>Last Name={name.lastName}</h1>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCounter3;
