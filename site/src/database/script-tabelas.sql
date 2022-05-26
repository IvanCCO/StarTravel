-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */

CREATE DATABASE StarTravel;

USE StarTravel;

CREATE TABLE Usuario (
	idUser INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR (45) NOT NULL, 
	email VARCHAR (45) NOT NULL,
	senha VARCHAR (25) NOT NULL,
	username VARCHAR(20) NOT NULL

)AUTO_INCREMENT = 022200;

CREATE TABLE Pais (
	idPais INT PRIMARY KEY AUTO_INCREMENT,
	nomePais VARCHAR(30) NOT NULL,
	capital VARCHAR(30) NOT NULL,
	nota DECIMAL (2,1) NOT NULL,
	IDH DECIMAL (4,3) NOT NULL, 
	precoMoeda DECIMAL (3,2) NOT NULL

) AUTO_INCREMENT = 551100;

CREATE TABLE GrupoPaises (
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUser),
	fkPais INT,
	FOREIGN KEY (fkPais) REFERENCES Pais (idPais),
	qntdUsuario INT NOT NULL,
	PRIMARY KEY (fkUsuario, fkPais),
	salario DECIMAL (8,2) NOT NULL,
	custoDeVida DECIMAL (7,2) NOT NULL

);

CREATE TABLE Hostel (
	idHostel INT PRIMARY KEY,
	fkPais INT,
	FOREIGN KEY (fkPais) REFERENCES Pais (idPais),
	nome VARCHAR (20) NOT NULL,
	diariaDolar DECIMAL (6,2) NOT NULL

);

-- Está tabela talvez será removida.

CREATE TABLE Post (
	fkUsuario INT,
	idPost INT,
	mensagem VARCHAR (80),
	qntdLikes INT,
	qntdComments INT,
	qntdShare INT,
	FOREIGN KEY (fkusuario) REFERENCES Usuario (idUser)

);

	


/* para sql server - remoto - produção */
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);
