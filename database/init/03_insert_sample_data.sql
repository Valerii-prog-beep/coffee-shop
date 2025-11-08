-- Очистим старые данные (если есть)
DELETE FROM products;
DELETE FROM categories;

-- Добавим категории
INSERT INTO categories (name, description, display_order, is_active) VALUES
('Coffee', 'Various coffee drinks', 1, 1),
('Tea', 'Aromatic teas', 2, 1),
('Desserts', 'Sweet treats', 3, 1),
('Breakfast', 'Morning delights', 4, 1);

-- Добавим продукты с картинками
INSERT INTO products (name, description, price, category_id, calories, ingredients, is_featured, image_url) VALUES
-- Coffee
('Espresso', 'Strong and rich Italian coffee', 3.50, 1, 5, 'Premium coffee beans', TRUE, '/images/espresso.png'),
('Cappuccino', 'Perfect balance of coffee and steamed milk', 4.25, 1, 120, 'Espresso, Steamed milk, Foam', TRUE, '/images/cappuccino.png'),
('Latte', 'Smooth and creamy coffee delight', 4.50, 1, 180, 'Espresso, Steamed milk', TRUE, '/images/latte.png'),
('Americano', 'Espresso with hot water', 3.75, 1, 15, 'Espresso, Hot water', FALSE, '/images/americano.png'),
('Mocha', 'Chocolate and coffee combination', 5.00, 1, 250, 'Espresso, Chocolate, Milk', TRUE, '/images/mocha.png'),

-- Tea
('Green Tea', 'Refreshing green tea', 3.00, 2, 0, 'Green tea leaves', FALSE, '/images/green-tea.png'),
('Earl Grey', 'Classic bergamot flavored tea', 3.25, 2, 0, 'Black tea, Bergamot oil', FALSE, '/images/earl-grey.png'),
('Chai Latte', 'Spiced tea with steamed milk', 4.75, 2, 180, 'Black tea, Spices, Milk', TRUE, '/images/chai-latte.png'),

-- Desserts
('Chocolate Cake', 'Rich chocolate dessert', 5.50, 3, 350, 'Chocolate, Flour, Eggs, Butter', TRUE, '/images/chocolate-cake.png'),
('Croissant', 'Buttery French pastry', 3.25, 3, 280, 'Flour, Butter, Yeast', FALSE, '/images/croissant.png'),
('Blueberry Muffin', 'Fresh blueberry muffin', 3.75, 3, 320, 'Flour, Blueberries, Eggs, Sugar', TRUE, '/images/blueberry-muffin.png'),

-- Breakfast
('Avocado Toast', 'Smashed avocado on artisan bread', 7.50, 4, 420, 'Avocado, Bread, Olive oil, Seasonings', TRUE, '/images/avocado-toast.png'),
('Greek Yogurt Bowl', 'Yogurt with honey and granola', 6.25, 4, 280, 'Yogurt, Honey, Granola, Berries', FALSE, '/images/yogurt-bowl.png');