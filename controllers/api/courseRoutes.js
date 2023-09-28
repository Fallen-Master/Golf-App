const express = require('express');
const router = express.Router();
const { CourseInfo, Comment } = require('../../models');
const { courseCheck } = require('../../utils/courseCheck');

router.post('/add-course', async (req, res) => {
  try {
    const { courseName, websiteAddress, contactInfo, hoursOfOperation } = req.body;

    const courseId = await courseCheck(courseName);

    const newCourse = await CourseInfo.create({
      name: courseName,
      website: websiteAddress,
      contact: contactInfo,
      hours: hoursOfOp,
    });

    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
