use springvuejs;

-- insert role
insert into role(name, code) values("admin", "admin");
insert into role(name, code) values("user", "user");

-- insert user 
insert into user(username, password, fullname, email, status, roleid, address, phone)
values("admin", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6", "Admin", "admin@gmail.com", 1, 1, "Việt Nam", "0989989989");

insert into user(username, password, fullname, email, status, roleid, address, phone)
values("duongnv", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6", "Nguyễn Văn Đương", "duongnv@rabiloo.com", 1, 2, "Vinh - Nghệ An", "0522081512");

-- insert category
INSERT INTO `springvuejs`.`category` (`name`, `code`) VALUES ('Giày dép', 'giaydep');
INSERT INTO `springvuejs`.`category` (`name`, `code`) VALUES ('Quần áo', 'quanao');
INSERT INTO `springvuejs`.`category` (`name`, `code`) VALUES ('Cặp sách', 'capsach');
INSERT INTO `springvuejs`.`category` (`name`, `code`) VALUES ('Tủ lạnh', 'tulanh');

-- insert product
INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660021130837-download_(2).jpg', 'Quần áo', '12', '13', '1');
INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660021130837-download_(2).jpg', 'Giày dép', '13', '14', '2');
INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660024951853-download.jpg', 'Cặp sách', '14', '15', '3');
INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660024951853-download.jpg', 'Tủ lạnh', '15', '16', '4');

INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660021130837-download_(2).jpg', 'Quần áo mới tinh', '12', '13', '1');
INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660021130837-download_(2).jpg', 'Dép giầy', '13', '14', '2');
INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660024951853-download.jpg', 'Sách vở', '14', '15', '3');
INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660024951853-download.jpg', 'Tủ mới tinh', '15', '16', '4');

INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660021130837-download_(2).jpg', 'Áo quần', '12', '13', '1');
INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660021130837-download_(2).jpg', 'Dép quai', '13', '14', '2');

INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660021130837-download_(2).jpg', 'Áo dài', '12', '13', '1');
INSERT INTO `springvuejs`.`product` (`thumbnail`, `name`, `oldprice`, `newprice`, `categoryid`) 
VALUES ('https://s3.ap-southeast-1.amazonaws.com/duongnv/1660021130837-download_(2).jpg', 'Dép cao su', '13', '14', '2');

-- insert product statususer
 insert into product_status(name) values("Trong giỏ hàng");
 insert into product_status(name) values("Chờ xác nhận");
 insert into product_status(name) values("Đang giao");
 insert into product_status(name) values("Đã nhận hàng");

-- insert user_product_status
INSERT INTO `springvuejs`.`user_product_status` (`productid`, `userid`, `statusid`) VALUES ('1', '2', '1');
INSERT INTO `springvuejs`.`user_product_status` (`productid`, `userid`, `statusid`) VALUES ('2', '2', '2');
INSERT INTO `springvuejs`.`user_product_status` (`productid`, `userid`, `statusid`) VALUES ('3', '2', '3');
INSERT INTO `springvuejs`.`user_product_status` (`productid`, `userid`, `statusid`) VALUES ('4', '2', '4');

