drop schema if exists springvuejs;
create schema springvuejs;
use springvuejs;

drop table if exists role;
create table role(
	id bigint not null primary key auto_increment,
    name varchar(255) not null,
    code varchar(255) not null,
    createddate timestamp null,
    createdby varchar(255) null,
    modifieddate timestamp null,
    modifiedby varchar(255)
);

drop table if exists user;
create table user (
	id bigint not null primary key auto_increment,
    username varchar(255) not null unique,
    password varchar(255) not null,
    fullname varchar(255) not null,
    email varchar(255) not null unique,
    status int null,
    roleid bigint null,
    address varchar(255) null,
    phone varchar(255) null,
    createddate timestamp null,
    createdby varchar(255) null,
    modifieddate timestamp null,
    modifiedby varchar(255)
);

alter table user add constraint fk_user_role foreign key(roleid) references role(id);

drop table if exists category;
create table category (
	id bigint not null primary key auto_increment,
    name varchar(255) not null,
    code varchar(255) not null,
    createddate timestamp null,
    createdby varchar(255) null,
    modifieddate timestamp null,
    modifiedby varchar(255)
);

drop table if exists product;
create table product (
	id bigint not null primary key auto_increment,
    thumbnail varchar(5000) not null,
    name varchar(255) not null,
    oldprice int not null,
    newprice int not null,
    rate int null,
    categoryid bigint not null,
    createddate timestamp null,
    createdby varchar(255) null,
    modifieddate timestamp null,
    modifiedby varchar(255)
);

alter table product add constraint fk_product_category foreign key(categoryid) references category(id);

drop table if exists user_product;
create table user_product (
	id bigint not null primary key auto_increment,
    productid bigint not null,
    userid bigint not null,
    statusid bigint not null,
    createddate timestamp null,
    createdby varchar(255) null,
    modifieddate timestamp null,
    modifiedby varchar(255)
);

drop table if exists product_status;
create table product_status (
 	id bigint not null primary key auto_increment,
	name varchar(255) not null,
    createddate timestamp null,
    createdby varchar(255) null,
    modifieddate timestamp null,
    modifiedby varchar(255)
);

alter table user_product add constraint fk_user_product_status foreign key(statusid) references product_status(id);
alter table user_product add constraint fk_user_product_user foreign key(userid) references user(id);
alter table user_product add constraint fk_user_product_product foreign key(productid) references product(id);

drop table if exists user_rating;
create table user_rating (
	id bigint not null primary key auto_increment,
    userid bigint not null,
    productid bigint not null,
    rate int not null
);

alter table user_rating add constraint fk_user_rating_user foreign key(userid) references user(id);
alter table user_rating add constraint fk_user_rating_product foreign key(productid) references product(id);








