const COURSES_ENDPOINT = 'https://661abd2765444945d04e6523.mockapi.io/api/courses';

class CoursesApi {
    get = async () => {
        try {
            const resp = await fetch(COURSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('Oops, looks like fetchCourses had an issue.', e);
        }
    }

    put = async(course) => {
        try {
            const resp = await fetch(`${COURSES_ENDPOINT}/${course.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(course)
            });
            return await resp.json();
        } catch (e) {
            console.log('Oops, looks like updating courses had an issue.', e);    
        }
    }

    post = async(course) => {
        try {
            const resp = await fetch(`${COURSES_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(course)
            });
            return await resp.json();
        } catch (e) {
            console.log('Oops, looks like adding a course had an issue.', e);    
        }
    }

    delete = async(course) => {
        try {
            const resp = await fetch(`${COURSES_ENDPOINT}/${course.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await resp.json();
        } catch (e) {
            console.log('Oops, looks like deleting a course had an issue.', e);    
        }
    }
}

export const coursesApi = new CoursesApi();