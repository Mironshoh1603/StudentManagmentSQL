CREATE TABLE tuman(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
CREATE TABLE maktab(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  tuman_id BIGINT REFERENCES tuman(id)  NOT NULL
);
CREATE TABLE sinf(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  maktab_id BIGINT REFERENCES maktab(id) NOT NULL
);

CREATE TABLE uquvchi(
  id BIGSERIAL NOT NULL PRIMARY KEY ,
  name VARCHAR(50) NOT NULL,
  jinsi VARCHAR(50) NOT NULL CHECK(jinsi='ugil' or jinsi='qiz' ),
  tugulgan_kuni DATE ,
  telefon VARCHAR(20) ,
  sinf_id  BIGINT REFERENCES sinf(id) NOT NULL
)