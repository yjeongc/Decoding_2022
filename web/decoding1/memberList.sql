creat table t_member(
    id varchar(10) primary key,
    pwd varchar(10),
    name varchar(50),
    email varchar(50),
    joinDate date default sysdate
);

insert into t_member values('jeff','1212','Our Jeff', "test@gamil.com",sysdate)
