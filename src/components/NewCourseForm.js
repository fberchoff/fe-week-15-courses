import React, {useState} from 'react';

// This returns a form used to add a new course

export const NewCourseForm = (props) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name) {
            // Sending the name typed into the input field as an object (a course only has one property of name)
            props.addNewCourse({name});
            setName('');
        }
        else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <div className="row mt-6">
                <h5>Add a new course</h5>
            </div>
            <div className="row">
            <form onSubmit={onSubmit}>
                <input
                    className="form-control"
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button type='submit' className="btn btn-primary mt-3">Add Course</button>
            </form>
            </div>
        </div>
    )
}