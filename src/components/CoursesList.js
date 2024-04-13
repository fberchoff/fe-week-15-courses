import React from 'react';
import {Course} from './Course.js';
import {NewCourseForm} from './NewCourseForm.js'
import {coursesApi} from '../rest/CoursesApi.js';

// This class shows the webpage title and a list of courses

export class CoursesList extends React.Component {
    state = {
        // A property to hold the contents of a new course 
        newCourse : {name: ''},

        // Array of courses
        courses : []
    };

    componentDidMount() {
        this.fetchCourses();
    };

    fetchCourses = async () => {
        const courses = await coursesApi.get();
        this.setState({courses});
    };

    updateCourse = async (updatedCourse) => {
        await coursesApi.put(updatedCourse);
        this.fetchCourses();
    };

    addCourse = async (addedCourse) => {
        await coursesApi.post(addedCourse);
        this.fetchCourses();
    };

    deleteCourse = async (courseToDelete) => {
        await coursesApi.delete(courseToDelete);
        this.fetchCourses();
    };

    render() {
        return (
            <div>
                <div className="h1 mb-5">Course Rosters</div>                
                <NewCourseForm addNewCourse={this.addCourse} />
                {this.state.courses.map((course) => (
                    <Course
                        course={course}
                        key={course.id}
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                    />
                ))}
            </div>
        )
    }

}