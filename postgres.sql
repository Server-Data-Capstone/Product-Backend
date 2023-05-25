create database Products;

use Products;

CREATE TABLE product {
  id serial INT PRIMARY KEY,
  product_id INT UNIQUE,
  name VARCHAR ( 50 ) UNIQUE NOT NULL,
  slogan VARCHAR ( 50 ) NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  default_price TEXT NOT NULL
}

CREATE TABLE features {
  id serial INT PRIMARY KEY,
  product_id INT UNIQUE,
  feature TEXT,
  value TEXT
}

CREATE TABLE styles {
   id serial INT PRIMARY KEY,
  productId INT UNIQUE,
  name VARCHAR ( 50 ) UNIQUE NOT NULL,
  sale_price INT,
  original_price INT NOT NULL,
  default_style BOOLEAN
}

CREATE TABLE photos {
   id serial INT PRIMARY KEY,
  styleId INT NOT NULL,
  url TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
}

CREATE TABLE skus {
  id serial INT PRIMARY KEY,
  styleId INT NOT NULL,
  size TEXT NOT NULL,
  quantity INT NOT NULL,
}

CREATE TABLE related {
   id serial INT PRIMARY KEY,
  current_product_id INT NOT NULL,
  related_product_id INT NOT NULL,

}
