const express = require('express');
const router = express.Router();
const { CourseInfo, Comment } = require('../../models');
const { courseCheck } = require('../../utils/courseCheck');

// Add a golf course and associate comments
router.post('/add-course', async (req, res) => {
  try {
    const { courseName, websiteAddress, contactInfo, hoursOfOperation } = req.body;

    // Check if the course already exists in the database
    const courseId = await courseCheck(courseName);

    // Create a new golf course
    const newCourse = await CourseInfo.create({
      name: courseName,
      website: websiteAddress,
      contact: contactInfo,
      hours: hoursOfOperation,
    });

    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
