import express from 'express';
import upload from '../configs/multer.js';
import { addCourse, getEducatorCourses, updateRoleToEducator , getEnrolledStudentsData, educatorDashboardData
} from '../controllers/educatorController.js';
import { protectEducator } from '../middlewares/authMiddleware.js';

const educatorRouter = express.Router();

// Add Educator role
educatorRouter.get('/update-role', updateRoleToEducator)
educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse);
educatorRouter.get('/courses', protectEducator, getEducatorCourses);
educatorRouter.get('/dashboard', protectEducator, educatorDashboardData);
educatorRouter.get('/enrolled-students', protectEducator, getEnrolledStudentsData);


// Export the router

export default educatorRouter;