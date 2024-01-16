const quizController = require('../controllers/quiz');
const quiz = require('../models/quiz');
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:id', quizController.gfindOne);
router.put('/:id', quizController.update);
router.delete('/:id', quizController.delete);
router.get('/category/:id', quizController.getByCategoryId);
router.get('/level/:id', quizController.getByLevelId);

module.exports = router ;