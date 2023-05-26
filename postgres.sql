DROP DATABASE IF EXISTS products;
create database products;

\c products;

CREATE TABLE product (
  id serial  PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slogan TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  default_price TEXT NOT NULL
);

CREATE TABLE features (
  id serial PRIMARY KEY,
  product_id INTEGER REFERENCES product(id),
  feature TEXT,
  value TEXT
);


CREATE TABLE styles (
   id serial PRIMARY KEY,
  product_id INTEGER REFERENCES product(id),
  name VARCHAR ( 50 ) UNIQUE NOT NULL,
  sale_price INTEGER,
  original_price INTEGER NOT NULL,
  default_style BOOLEAN
);

CREATE TABLE photos (
   id serial PRIMARY KEY,
  styleId INTEGER NOT NULL,
  url TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL
);

CREATE TABLE skus (
  id serial PRIMARY KEY,
  styleId INTEGER NOT NULL,
  size TEXT NOT NULL,
  quantity INTEGER NOT NULL
);

CREATE TABLE related (
   id serial PRIMARY KEY,
  current_product_id INTEGER REFERENCES product(id),
  related_product_id INTEGER NOT NULL

);

COPY product FROM '/Users/sahidblapped/Desktop/hackreactor/Product-Backend/data/product.csv' DELIMITER ',' CSV HEADER;

COPY features FROM '/Users/sahidblapped/Desktop/hackreactor/Product-Backend/data/features.csv' DELIMITER ',' CSV HEADER;

COPY styles FROM '/Users/sahidblapped/Desktop/hackreactor/Product-Backend/data/styles.csv' DELIMITER ',' CSV HEADER;

COPY photos FROM '/Users/sahidblapped/Desktop/hackreactor/Product-Backend/data/photos.csv' DELIMITER ',' CSV HEADER;

COPY skus FROM '/Users/sahidblapped/Desktop/hackreactor/Product-Backend/data/skus.csv' DELIMITER ',' CSV HEADER;

COPY related FROM '/Users/sahidblapped/Desktop/hackreactor/Product-Backend/data/related.csv' DELIMITER ',' CSV HEADER;