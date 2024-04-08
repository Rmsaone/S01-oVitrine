import express from 'express'
import { dashboardView } from '../controllers/dashboardController'
import { projectDetailView } from '../controllers/projectDetailController'

// Utilisation du router d'express
const router = express.Router()

router.get('/', dashboardView)
router.get('/project/:id', projectDetailView)

export default router