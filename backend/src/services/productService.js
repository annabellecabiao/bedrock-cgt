import db from '../config/database.js';

export async function getProducts() {
  const result = await db.query(
    'SELECT * FROM products ORDER BY created_at DESC'
  );
  return result.rows;
}

export async function getProductById(id) {
  const result = await db.query(
    'SELECT * FROM products WHERE id = $1',
    [id]
  );
  return result.rows[0];
}

export async function createProduct(data) {
  const {
    name, description, category_id, supplier_id,
    price, stock, image_url, attributes
  } = data;

  const result = await db.query(
    `INSERT INTO products
     (name, description, category_id, supplier_id, price, stock, image_url, attributes)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
     RETURNING *`,
    [name, description, category_id, supplier_id, price, stock, image_url, attributes]
  );

  return result.rows[0];
}

export async function updateProduct(id, data) {
  const {
    name, description, category_id, supplier_id,
    price, stock, image_url, attributes
  } = data;

  const result = await db.query(
    `UPDATE products SET
      name = $1,
      description = $2,
      category_id = $3,
      supplier_id = $4,
      price = $5,
      stock = $6,
      image_url = $7,
      attributes = $8,
      updated_at = NOW()
     WHERE id = $9
     RETURNING *`,
    [name, description, category_id, supplier_id, price, stock, image_url, attributes, id]
  );

  return result.rows[0];
}
