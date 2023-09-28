const CourseInfo = require('../models/courseInfo');

async function courseCheck(courseName) {
    const existingCourse = await CourseInfo.findOne({ where: { name: courseName } });

    if (existingCourse) {
        return existingCourse.id;
    } else {
        const newCourse = await CourseInfo.create({ name: courseName });
        return newCourse.id;
    }
}

module.exports = {
    courseCheck
};
