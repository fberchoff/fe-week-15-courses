import React from 'react';
import {NewStudentForm} from './NewStudentForm';

export const Course = (props) => {
    const {course, updateCourse} = props;

    const deleteStudent = (studentId) => {
        const updatedCourse = {
            ...course,
            students: course.students.filter((x) => x._id !== studentId)
        };
        updateCourse(updatedCourse);
    }

    const addNewStudent = (student) => updateCourse({...course, students: [...course.students, student]});

    const students = () => (
        <ul>
            {course.students.map((student, index) => (
                <li key={index}>
                        <div>
                            <label> {`Name: ${student.lastName}, ${student.firstName}`} </label>
                        </div>
                        <div>
                            <button onClick={(e) => deleteStudent(student._id)}>Delete</button>
                        </div>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2> {course.name} </h2>
                </div>
            </div>
            <div className="row">
                <div className="col mt-4 mb-2">
                    <h5>Students</h5>
                </div>
            </div>            
            {students({students, courseId: course.id, deleteStudent})}
            <NewStudentForm addNewStudent={addNewStudent} />
        </div>
    );
    
};