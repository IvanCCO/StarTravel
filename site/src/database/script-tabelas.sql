CREATE DATABASE StarTravel;

USE StarTravel;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR (45) NOT NULL, 
	email VARCHAR (45) NOT NULL UNIQUE,
	senha VARCHAR (25) NOT NULL,
	username VARCHAR(14) NOT NULL UNIQUE,
    paisOne VARCHAR(30),
    paisTwo VARCHAR(30),
    paisThree VARCHAR(30)

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


CREATE TABLE Post (
	fkUsuario INT,
	idPost INT primary key AUTO_INCREMENT,
	mensagem VARCHAR (80),
	imagem VARCHAR(1900),
	FOREIGN KEY (fkusuario) REFERENCES Usuario (idUsuario)
)AUTO_INCREMENT = 9900;

-- Inserindo os dados dos paises

INSERT INTO Pais VALUES
						(null, 'Netherlands', 'Amsterdan', 5372, 1234, '0.967', 'Euro', '2394.00', '1234.00'),
						(null, 'France', 'Paris', 4300, 983, '0.821', 'Euro', '2338.00', '940.00'),
						(null, 'Italy', 'Rome', 3700, 840, '0.812', 'Euro', '1943.00', '649.00'),
                        (null, 'UK', 'London', 6900, 1839, '0.929', 'Libra', '3350.00', '2300.00'),
                        (null, 'Cuba', "Havana", 3500, 948, '0.689', "Peso Cubano", '230.00', '80.00'),
                        (null, 'EUA', 'Washington', 8949, 3648, '0.820', 'Dolar', '2434.00', '2100.00'),
                        (null, 'Brazil', 'Brasilia', 3589, 993, '0.743', 'Real', '2830.00', '1100.00'),
                        (null, 'Nigeria', 'Lagos', 109, 34, '0.589', 'Niger', '1239.00', '1120.00'),
                        (null, 'Spain', 'Madrid', 2394, 559, '0.831', 'Euro', '1203.00', '820.00'),
                        (null, 'South Africa', 'South', 3819, 1193, '0.872', 'Dolar', '1679.00', '781.00'),
                        (null, 'Belgica', 'Brussels', 4382, 938, '0.972', 'Euro', '1879.00', '820.00'),
						(null, 'Ukraine', 'Kyiv', 1938, 530, '0.772', 'Hryvnia', '1079.00', '620.00'),
						(null, 'China', 'Beijing', 3382, 938, '0.972', 'Renminbi', '1879.00', '820.00'),
                        (null, 'Afghanistan', 'Kabul', 2382, 938, '0.972', 'Afghani', '1879.00', '820.00'),
                        (null, 'Austria', 'Vienna', 5382, 2038, '0.972', 'Euro', '1879.00', '820.00'),
                        (null, 'Canada', 'Ottawa', 4482, 938, '0.972', 'C.Dolar', '1879.00', '820.00'),
                        (null, 'Israel', 'Jerusalem', 2382, 698, '0.972', 'Shekel', '1879.00', '820.00'),
                        (null, 'Jamaica', 'Kingston', 2382, 830, '0.972', 'J.Dolar', '1879.00', '820.00'),
                        (null, 'Japan', 'Tokyo', 4382, 1523, '0.972', 'Yen', '1879.00', '820.00');
                        




-- Inserindo Meus Usu??rios Ficticios 
	
-- Select para mostrar os paises com as maiores notas

SELECT nomePais, totalAvaliacao/qntVotos as Media FROM Pais ORDER BY Media DESC;

SELECT nomePais, ROUND(totalAvaliacao/qntVotos, 1) as Media FROM Pais ORDER BY Media DESC;

SELECT nomePais, qntVotos, totalAvaliacao FROM Pais;

SELECT * FROM Usuario;

INSERT INTO Usuario VALUES (22200, 'Ivan Freire', 'ivanmedeiros09@gmail.com', '123456789', 'Lullyfito', 'Holand', 'Cuba', 'South Africa'),
							(22201, 'Danilo Dias', 'danilo@gmail.com', '123456789', 'Danilao', 'Holand', 'Cuba', 'South Africa'),
                            (22202, 'Pedro Fernandes', 'Pedro@gmail.com', '123456789', 'Pedrao', 'Holand', 'Cuba', 'South Africa'),
                            (22203, 'Ivan Freire', 'ios09@gmail.com', '123456789', 'Junior', 'Holand', 'Cuba', 'South Africa'),
                            (22204, 'Ivan Freire', 'ivanme9@gmail.com', '123456789', 'Alexandre', 'Holand', 'Cuba', 'South Africa'),
                            (22205, 'Ivan Freire', 'ivdeiros09@gmail.com', '123456789', 'Alezinho', 'Holand', 'Cuba', 'South Africa'),
                            (22206, 'Ivan Freire', 'anmedeiros09@gmail.com', '123456789', 'Ruan', 'Holand', 'Cuba', 'South Africa');

DESC Post;


SELECT Post.mensagem, Post.imagem, Usuario.username FROM Post, Usuario WHERE fkUsuario = idUsuario;


SELECT * FROM Post;

TRUNCATE Post;

INSERT INTO Post VALUES 
(22200, 9902, 'This Guy is Amazing', 'https://i.ytimg.com/an_webp/9BMGWY7mEhY/mqdefault_6s.webp?du=3000&sqp=CMjmp5UG&rs=AOn4CLAK6tPF_QyhLBNrVp-ZCqXHH36Kfg'),
(22202, 9903, 'Jamaicanos vencem corrida contra guepardo',  'https://pingback-prod-uploads.s3.amazonaws.com/uploads/user/images/editor/do256f.gif');
