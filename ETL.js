COPY product FROM 'data/product.csv' DELIMITER ',' CVS HEADER;

COPY features FROM 'data/features.csv' DELIMITER ',' CVS HEADER;

COPY styles FROM 'data/styles.csv' DELIMITER ',' CVS HEADER;

COPY photos FROM 'data/photos.csv' DELIMITER ',' CVS HEADER;

COPY skus FROM 'data/skus.csv' DELIMITER ',' CVS HEADER;

COPY related FROM 'data/related.csv' DELIMITER ',' CVS HEADER;