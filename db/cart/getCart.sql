SELECT * FROM cart c
JOIN products p ON p.product_id = c.product_id
WHERE c.user_id = $1;