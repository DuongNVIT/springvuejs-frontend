use springvuejs;

insert into role(name, code) values("admin", "admin");
insert into role(name, code) values("user", "user");

insert into user(username, password, fullname, status, roleid, address, phone)
values("admin", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6", "Admin", 1, 1, "Việt Nam", "0989989989");

insert into user(username, password, fullname, status, roleid, address, phone)
values("duongnv", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6", "Nguyễn Văn Đương", 1, 2, "Vinh - Nghệ An", "0522081512");

insert into product_status(name) values("Trong giỏ hàng");
insert into product_status(name) values("Chờ xác nhận");
insert into product_status(name) values("Đang giao");
insert into product_status(name) values("Đã nhận hàng");