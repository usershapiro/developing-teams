-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2023 at 08:53 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `development-teams`
--
CREATE DATABASE IF NOT EXISTS `development-teams` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `development-teams`;

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetingCode` int(11) NOT NULL,
  `teamCode` int(11) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `description` varchar(150) NOT NULL,
  `room` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingCode`, `teamCode`, `startDate`, `endDate`, `description`, `room`) VALUES
(1, 1, '2023-05-10 09:00:00', '2023-05-10 10:30:00', 'openning session', 'first room'),
(2, 3, '2023-05-10 10:00:00', '2023-05-10 11:30:00', ' displaying new methods', 'second room'),
(3, 2, '2023-05-11 13:00:00', '2023-05-10 14:30:00', 'presenting new software extentions', 'third room'),
(4, 4, '2023-05-11 12:00:00', '2023-05-11 13:30:00', ' How to handle errors?', 'first room'),
(5, 2, '2023-05-11 11:00:00', '2023-05-10 12:30:00', 'installing new system', 'third room'),
(8, 3, '2023-05-15 10:30:00', '2023-05-15 12:00:00', 'Is Iran a head of us?', 'second room'),
(9, 4, '2023-05-21 12:00:00', '2023-05-21 13:30:00', 'installing new system', 'second room');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `teamCode` int(11) NOT NULL,
  `team` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`teamCode`, `team`) VALUES
(1, 'React Team'),
(2, 'Backend Team'),
(3, 'Cyber Team'),
(4, 'Q.A Team');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingCode`),
  ADD KEY `teamCode` (`teamCode`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`teamCode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `teamCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`teamCode`) REFERENCES `teams` (`teamCode`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
