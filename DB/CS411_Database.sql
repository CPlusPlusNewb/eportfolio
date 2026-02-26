-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 12, 2026 at 04:11 AM
-- Server version: 8.4.7
-- PHP Version: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs411`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookmarks`
--

DROP TABLE IF EXISTS `bookmarks`;
CREATE TABLE IF NOT EXISTS `bookmarks` (
  `bookmark_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `date_saved` date NOT NULL COMMENT 'The order of bookmarks',
  PRIMARY KEY (`bookmark_id`),
  KEY `user_id` (`user_id`),
  KEY `fk_post_id` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bookmarks`
--

INSERT INTO `bookmarks` (`bookmark_id`, `user_id`, `post_id`, `date_saved`) VALUES
(1, 1, 51, '2026-02-11');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_date` date NOT NULL DEFAULT (curdate()),
  `post_time` time NOT NULL DEFAULT (curtime()),
  `likes` int NOT NULL DEFAULT '0',
  `bookmarks` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`post_id`),
  KEY `fk_user_id2` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_id`, `user_id`, `description`, `post_date`, `post_time`, `likes`, `bookmarks`) VALUES
(51, 1, 'Watched an great basketball game tonight.', '0000-00-00', '12:22:00', 14, 6),
(52, 1, 'Went hiking in the mountains this weekend.', '0000-00-00', '01:05:00', 22, 10),
(53, 1, 'Rewatched my favorite sci-fi movie.', '0000-00-00', '01:40:00', 18, 7),
(54, 1, 'Played soccer for two hours straight.', '0000-00-00', '02:15:00', 11, 4),
(55, 1, 'Planning a road trip adventure.', '0000-00-00', '02:45:00', 9, 3),
(56, 1, 'That action movie had insane stunts.', '0000-00-00', '03:10:00', 25, 12),
(57, 1, 'Morning run by the river felt great.', '0000-00-00', '03:35:00', 16, 5),
(58, 1, 'Camping under the stars tonight.', '0000-00-00', '04:00:00', 19, 8),
(59, 1, 'Watched the playoffs with friends.', '0000-00-00', '04:30:00', 21, 9),
(60, 1, 'Finally tried rock climbing.', '0000-00-00', '05:00:00', 17, 6),
(61, 1, 'That movie plot twist was wild.', '0000-00-00', '05:25:00', 28, 14),
(62, 1, 'Long bike ride through the trails.', '0000-00-00', '05:50:00', 13, 4),
(63, 1, 'Training for a marathon starts today.', '0000-00-00', '06:20:00', 20, 7),
(64, 1, 'Classic movie night never disappoints.', '0000-00-00', '06:45:00', 15, 5),
(65, 1, 'Kayaking was harder than expected.', '0000-00-00', '07:10:00', 12, 4),
(66, 1, 'Picked up a new basketball today.', '0000-00-00', '07:30:00', 10, 3),
(67, 1, 'Sunset hike was worth the climb.', '0000-00-00', '07:55:00', 18, 7),
(68, 1, 'Movie soundtrack is stuck in my head.', '0000-00-00', '08:20:00', 16, 6),
(69, 1, 'Pickup football game after work.', '0000-00-00', '08:45:00', 14, 5),
(70, 1, 'Exploring a new trail tomorrow.', '0000-00-00', '09:10:00', 11, 4),
(71, 1, 'That thriller movie was intense.', '0000-00-00', '09:35:00', 23, 11),
(72, 1, 'Snowboarding all day was exhausting.', '0000-00-00', '10:00:00', 26, 13),
(73, 1, 'Rewatching a classic sports movie.', '0000-00-00', '10:25:00', 19, 8),
(74, 1, 'Weekend adventure plans are set.', '0000-00-00', '10:45:00', 17, 6),
(75, 1, 'Stadium atmosphere was electric.', '0000-00-00', '11:00:00', 30, 15);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_hash` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password_hash`) VALUES
(1, 'test', 'password');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD CONSTRAINT `fk_post_id` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `fk_user_id2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
