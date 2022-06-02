-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */

CREATE DATABASE StarTravel;

USE StarTravel;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR (45) NOT NULL, 
	email VARCHAR (45) NOT NULL,
	senha VARCHAR (25) NOT NULL,
	username VARCHAR(14) NOT NULL UNIQUE

)AUTO_INCREMENT = 022200;

CREATE TABLE Pais (
	idPais INT PRIMARY KEY AUTO_INCREMENT,
	nomePais VARCHAR(30) NOT NULL UNIQUE,
	capital VARCHAR(30) NOT NULL,
	nota DECIMAL (2,1) NOT NULL,
	IDH DECIMAL (4,3) NOT NULL, 
	Moeda VARCHAR(20) NOT NULL,
    salario DECIMAL (8,2) NOT NULL,
	custoDeVida DECIMAL (7,2) NOT NULL

) AUTO_INCREMENT = 551100;

CREATE TABLE GrupoPaises (
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
	fkPais INT,
	FOREIGN KEY (fkPais) REFERENCES Pais (idPais),
	PRIMARY KEY (fkUsuario, fkPais)
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
	FOREIGN KEY (fkusuario) REFERENCES Usuario (idUsuario)

);


INSERT INTO Usuario VALUES (null, 'Ivan Freire de Medeiros', 'ivanmedeiros0903@outlook.com',
'Mimoso009@', 'Lullyfito');

-- Inserindo os dados dos paises

INSERT INTO Pais VALUES (null, 'Holanda', 'Amsterdan', '4.4', '0.967', 'Euro', '2394.00', '1234.00');

INSERT INTO Pais VALUES (null, 'Franca', 'Paris', '4.1', '0.821', 'Euro', '2338.00', '940.00'),
						(null, 'Italia', 'Roma', '3.3', '0.869', 'Euro', '1943.00', '649.00'),
                        (null, 'UK', 'London', '4.5', '0.920', 'Libra', '3350.00', '2300.00'),
                        (null, 'Cuba', "Havana", "3.2", '0.689', "Peso Cubano", '230.00', '80.00'),
                        (null, 'EUA', 'Washington', '4.1', '0.820', 'Dolar', '2434.00', '2100.00'),
                        (null, 'Brazil', 'Brasilia', '3.8', '0.743', 'Real', '2830.00', '1100.00'),
                        (null, 'Nigeria', 'Lagos', '4.1', '0.589', 'Niger', '1239.00', '1120.00'),
                        (null, 'Spain', 'Madrid', '4.2', '0.831', 'Euro', '1203.00', '820.00');
                        
INSERT INTO Pais VALUES (null, 'South Africa', 'South', '3.7', '0.872', 'Dolar', '1679.00', '781.00');

-- Deixando os selects prontos
SELECT * from Usuario;

-- Inserindo Meus Usuários Ficticios 

INSERT INTO Usuario VALUES (null, 'Lui Bonjevi de la Jean', 'luiBnjv@gmail.com', '123456789', 'Luijean'),
						   (null, 'Pedro Fernandes Freitter', 'pedroFFreitter@outlook.com', '123456789', 'PedroFern4ands'),
                           (null, 'Italo Rodrigues', 'italoRodrigues@hotmail.com', '123456789', 'WilsonRodger'),
                           (null, 'Vicenzo de La Rossi', 'vicenzo1999@yahoo.com', '123456789', 'VicenzoRossi'),
                           (null, 'Hillary SmallWood', 'hillarySmw00d@gmail.com', '123456789', 'HillaryWood'),
                           (null, 'Mohammed Set John', 'mohammedJhon@outlook.com', '123456789', 'MohammedJohn'),
                           (null, 'Gabrielly Fernandes', 'gabriellyFernandes@gmail.com', '123456789', 'Gabrielly'),
                           (null, 'Rudson Louds', 'rudsonLLOUD@outlook.com', '123456789', 'RudsonLouds');
                           





/* para sql server - remoto - produção */
/*CREATE TABLE usuario (
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




