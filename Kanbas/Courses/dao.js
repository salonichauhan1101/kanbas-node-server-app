import CourseModel from './model.js';

export const createCourse = async (course) => {
  try {
    return await CourseModel.create(course);
  } catch (error) {
    console.error(`Error creating course: ${error.message}`);
    throw error;
  }
};

export const deleteCourse = async (courseId) => {
  try {
    return await CourseModel.deleteOne({ _id: courseId });
  } catch (error) {
    console.error(`Error deleting course: ${error.message}`);
    throw error;
  }
};

export const findAllCourses = async () => {
  try {
    return await CourseModel.find();
  } catch (error) {
    console.error(`Error finding all courses: ${error.message}`);
    throw error;
  }
};

export const findCourseById = async (courseId) => {
  try {
    return await CourseModel.findById(courseId);
  } catch (error) {
    console.error(`Error finding course by ID: ${error.message}`);
    throw error;
  }
};

export const updateCourse = async (courseId, course) => {
  try {
    console.log(`Updating course with ID: ${courseId}`);
    console.log(`Course data: ${JSON.stringify(course)}`);

    const existingCourse = await CourseModel.findById(courseId);
    if (!existingCourse) {
      console.log(`Course with ID: ${courseId} not found`);
      return { matchedCount: 0, modifiedCount: 0 };
    }

    console.log(`Existing course data: ${JSON.stringify(existingCourse)}`);
    const result = await CourseModel.updateOne({ _id: courseId }, { $set: course });
    console.log(`Update result: ${JSON.stringify(result)}`);
    return result;
  } catch (error) {
    console.error(`Error updating course: ${error.message}`);
    throw error;
  }
};