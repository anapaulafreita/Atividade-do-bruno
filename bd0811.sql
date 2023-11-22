create database campana;
use campana;

create table usuario(
id int auto_increment not null,
login varchar(60) null,
senha varchar(60) null,
nome varchar(200) null,
idade int null,
email varchar(60) null,
primary key(id)
);
create table produto(
id int auto_increment not null,
nomeproduto varchar(60) null,
marca varchar(600) null,
ano int null,
qtd int null,
preco double null,
total double null,
usuario int null,
primary key(id),
foreign key(usuario) references usuario(id)
);

#Meus comandos sql de teste#

#inserir dados na tabela#
 insert into usuario(login, senha, nome, idade, email) values (1, 'sapo', 'sapo@123' , 'Sapo' , '22', 'sapo@gmail.com');
 
 #verifica na tabela se inseriu#
  select * from usuario;

#segunda forma#
insert into usuario values
(2, 'coelho','co@g123','roger','20','roger@gmail.com');

#explicação do usuario login
select * from usuario where login ='coelho' and senha ='co@123';
#select * from usuario where 

