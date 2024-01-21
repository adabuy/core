create table if not exists seller(
  seller_id varchar(20) not null,
  nickname varchar(50) not null,
  email varchar(100) not null,
  password_hash varchar(255) not null,
  verified boolean default false,
  country int unsigned not null,
  completed_sales int unsigned default 0,
  uncompleted_sales int unsigned default 0,
  terms varchar(1000) not null,
  avatar_base varchar(255) not null,
  avatar_path varchar(255) not null,
  public_ip varchar(50) not null,
  created_at timestamp default current_timestamp,
  last_login timestamp default current_timestamp,
  schema_t timestamp default current_timestamp,
  schema_v int unsigned not null,
  primary key(seller_id),
  unique(email)
) ENGINE=InnoDB;