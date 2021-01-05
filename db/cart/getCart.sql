SELECT * FROM cart c
JOIN product p ON p.product_id = c.product_id
WHERE c.user_id = $1;