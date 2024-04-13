import React from 'react';
import {NewStudentForm} from './NewStudentForm';

export const Course = (props) => {
    const {course, updateCourse, deleteCourse} = props;

    const deleteStudent = (studentId) => {
        const updatedCourse = {
            ...course,
            students: course.students.filter((x) => x.firstName + x.lastName !== studentId)
        };
        updateCourse(updatedCourse);
    }

    const addNewStudent = (student) => updateCourse({...course, students: [...course.students, student]});

    const deleteTheCourse = (course) => deleteCourse(course);

    const students = () => (
        <div>
            {course.students.map((student, index) => (
                <div className="row" key={index}>
                        <div className="col">
                            <p> {`${student.lastName}, ${student.firstName}`} </p>
                        </div>
                        <div className="col" key={index}>
                            <button className="btn btn-primary" onClick={(e) => deleteStudent(student.firstName + student.lastName)}>Delete</button>
                        </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="col mt-5">
                    <h2> {course.name} </h2>
                </div>
                <div className="col">
                <button type='submit' className="btn btn-primary mt-3" onClick={() => deleteTheCourse(course)}>Delete Course</button></div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mt-4 mb-2">
                    <h5>Students</h5>
                </div>
            </div>            
            {students({students, courseId: course.id, deleteStudent})}
            <NewStudentForm addNewStudent={addNewStudent} />
        </div>
    );
    
};