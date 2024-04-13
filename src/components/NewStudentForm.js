import React, {useState} from 'react';

export const NewStudentForm = (props) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            props.addNewStudent({firstName, lastName});
            setfirstName('');
            setlastName('');
        }
        else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <div className="row mt-3">
                <h6>Add a new student</h6>
            </div>
            <div className="row">
            <form onSubmit={onSubmit}>
                <input
                    className="form-control"
                    type='text'
                    placeholder='first name'
                    onChange={(e) => setfirstName(e.target.value)}
                    value={firstName}
                />
                <input
                    className="form-control"
                    type='text'
                    placeholder='last name'
                    onChange={(e) => setlastName(e.target.value)}
                    value={lastName}
                />
                <button type='submit' className="btn btn-primary mt-3">Add Student</button>
            </form>
            </div>
        </div>
    )
}