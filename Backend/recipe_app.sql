/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `comments` (
  `id_comment` int(11) NOT NULL AUTO_INCREMENT,
  `recipe_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  PRIMARY KEY (`id_comment`),
  KEY `fk_comments_users` (`user_id`),
  KEY `fk_comments_recipes` (`recipe_id`),
  CONSTRAINT `fk_comments_recipes` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id_recipe`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_comments_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `recipes` (
  `id_recipe` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `ingredients` text DEFAULT NULL,
  `steps` text DEFAULT NULL,
  `rating` float DEFAULT 0,
  PRIMARY KEY (`id_recipe`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

INSERT INTO `comments` (`id_comment`, `recipe_id`, `user_id`, `comment`) VALUES
(1, 1, 1, 'test');
INSERT INTO `comments` (`id_comment`, `recipe_id`, `user_id`, `comment`) VALUES
(2, 1, 1, 'test2');
INSERT INTO `comments` (`id_comment`, `recipe_id`, `user_id`, `comment`) VALUES
(3, 1, 1, 'test3');
INSERT INTO `comments` (`id_comment`, `recipe_id`, `user_id`, `comment`) VALUES
(6, 1, 1, 'test for reload'),
(8, 1, 1, 'abcdef');

INSERT INTO `recipes` (`id_recipe`, `user_id`, `name`, `description`, `ingredients`, `steps`, `rating`) VALUES
(1, NULL, 'Name of recipe1', 'description', 'ingredient1 \r\ningredient2\r\ningredient3', 'step1\r\nstep2\r\nstep3', 4.2);
INSERT INTO `recipes` (`id_recipe`, `user_id`, `name`, `description`, `ingredients`, `steps`, `rating`) VALUES
(2, NULL, 'name2', 'desc2', 'ingr2\r\n', 'step2', 2.6);
INSERT INTO `recipes` (`id_recipe`, `user_id`, `name`, `description`, `ingredients`, `steps`, `rating`) VALUES
(3, NULL, 'example asd', 'asdfgasdf', 'assdfasfasdfasd', 'sdaasdfasdfasdfasdf', 3.3);
INSERT INTO `recipes` (`id_recipe`, `user_id`, `name`, `description`, `ingredients`, `steps`, `rating`) VALUES
(4, NULL, 'asdfasdf', 'asdfesfdasd', 'sdfsdfased', 'dsafsdfasasdsdafsdsad', 2.6),
(5, NULL, 'dsfsdfd', 'dfsretgrteg', 'ertgrtgrfdcx', 'gdfgerdxcfgtvfxrctfge', 4.3),
(17, 1, 'helllooooooooo', 'oooooooooooooooooo', 'ooooooooooooooooo', 'ooooooooooooooooooo', 0),
(18, 1, 'helllooooooooo', 'oooooooooooooooooo', 'ooooooooooooooooo\nbbbbbbbbbbbbbbbbb\nccccccccccccccccc', 'ooooooooooooooooooo\nbbbbbbbbbbbbbbbbbbb\ncccccccccccccccccc', 0),
(19, 1, 'fdsgsdg', 'dfgdg', 'dffgddfgdfg', 'dfgdfgdf', 0),
(20, 1, 'dfggfd', 'fdfddfdf', 'dfdfdfdf', 'dfdfdfdf', 0);

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'guest', 'abcd@123.com', '12345');
INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(2, 'user2', 'user2@gmail.com', '$2y$10$UjOJhgabu/pfted3EIcusexL.kFHGKUu4RRjx/Kokr7LEb.WLHYR6');
INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(4, 'user3', 'user3@gmail.com', '$2y$10$MIyMwu2zIg4UO7zCvGcyjOlaha9t8NU.ZZTtGi6UhkKcrh/Z93vra');
INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(8, 'user5', 'user5@gmail.com', '$2y$10$hHv8.ROBuK//Uogtj/Z6yOWTmKet6/v1C4yFBJLIXS31D6GAKelk2');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;