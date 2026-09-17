import { Router } from 'express';
import * as productController from '../controllers/productController.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', auth.adminOnly, productController.createProduct);
router.put('/:id', auth.adminOnly, productController.updateProduct);

export default router;
