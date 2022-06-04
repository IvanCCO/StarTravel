CREATE DATABASE StarTravel;

USE StarTravel;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR (45) NOT NULL, 
	email VARCHAR (45) NOT NULL,
	senha VARCHAR (25) NOT NULL,
	username VARCHAR(14) NOT NULL UNIQUE,
    paisOne VARCHAR(20),
    paisTwo VARCHAR(20),
    paisThree VARCHAR(20)

)AUTO_INCREMENT = 022200;


CREATE TABLE Pais (
	idPais INT PRIMARY KEY AUTO_INCREMENT,
	nomePais VARCHAR(30) NOT NULL UNIQUE,
	capital VARCHAR(30) NOT NULL,
    totalAvaliacao INT NOT NULL,
    qntVotos INT NOT NULL,
	IDH DECIMAL (4,3) NOT NULL, 
	Moeda VARCHAR(20) NOT NULL,
    salario DECIMAL (8,2) NOT NULL,
	custoDeVida DECIMAL (7,2) NOT NULL

) AUTO_INCREMENT = 551100;

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



-- Inserindo os dados dos paises

INSERT INTO Pais VALUES (null, 'Holanda', 'Amsterdan', 5372, 1234, '0.967', 'Euro', '2394.00', '1234.00');

INSERT INTO Pais VALUES (null, 'Franca', 'Paris', 4300, 983, '0.821', 'Euro', '2338.00', '940.00');

INSERT INTO Pais VALUES
						(null, 'Italia', 'Roma', 3700, 840, '0.812', 'Euro', '1943.00', '649.00'),
                        (null, 'UK', 'London', 6900, 1339, '0.929', 'Libra', '3350.00', '2300.00'),
                        (null, 'Cuba', "Havana", 3500, 948, '0.689', "Peso Cubano", '230.00', '80.00'),
                        (null, 'EUA', 'Washington', 8949, 3648, '0.820', 'Dolar', '2434.00', '2100.00'),
                        (null, 'Brazil', 'Brasilia', 3589, 793, '0.743', 'Real', '2830.00', '1100.00'),
                        (null, 'Nigeria', 'Lagos', 109, 34, '0.589', 'Niger', '1239.00', '1120.00'),
                        (null, 'Spain', 'Madrid', 2394, 559, '0.831', 'Euro', '1203.00', '820.00');
                        
UPDATE Pais set nomePais = 'Italy' WHERE nomePais = 'Italia';

UPDATE Pais SET qntVotos = qntVotos + 1 WHERE nomePais = 'Nigeria';
UPDATE Pais SET totalAvaliacao = totalAvaliacao + 3 WHERE nomePais = 'Nigeria';

                        
INSERT INTO Pais VALUES (null, 'South Africa', 'South', 3819, 1193, '0.872', 'Dolar', '1679.00', '781.00');

INSERT INTO Pais VALUES (null, 'Belgica', 'bruxelas', 4382, 938, '0.972', 'Euro', '1879.00', '820.00');


-- Deixando os selects prontos
SELECT * from Usuario;

-- Inserindo Meus Usuários Ficticios 


SELECT * FROM Usuario;

SELECT * FROM Pais WHERE nomePais = 'Nigeria';


-- Select para mostrar os paises com as maiores notas

SELECT nomePais, nota FROM Pais ORDER BY nota DESC;

SELECT nomePais, totalAvaliacao/qntVotos as Media FROM Pais ORDER BY Media DESC;

SELECT nomePais, ROUND(totalAvaliacao/qntVotos, 1) as Media FROM Pais ORDER BY Media DESC;

SELECT nomePais, qntVotos, totalAvaliacao FROM Pais;














