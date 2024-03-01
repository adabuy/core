CREATE DATABASE service_gate;


create table if not exists slots(
  id varchar(20) not null,
  status varchar(20) default "created",
  mode varchar(20) not null,
  wallet_id varchar(100) not null,
  instance_id varchar(100) not null,
  status_start mediumtext,
  status_locking mediumtext,
  status_delivered mediumtext,
  status_received mediumtext,
  seller_id varchar(20) not null,
  seller_pkh varchar(100) default "unset",
  buyer_id varchar(20) default "unset",
  buyer_pkh varchar(100) default "unset",
  product_id varchar(20) not null,
  product_price int unsigned not null,
  product_collateral int unsigned not null,
  product_discount int unsigned not null,
  product_units int unsigned not null,
  created_at timestamp default current_timestamp,
  schema_t timestamp default current_timestamp,
  schema_v int unsigned not null,
  primary key(id),
  unique (instance_id)
) ENGINE=InnoDB;





