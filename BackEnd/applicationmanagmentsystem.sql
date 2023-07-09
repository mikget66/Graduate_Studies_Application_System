-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2023 at 02:18 PM
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
-- Database: `applicationmanagmentsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `application_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `faculty_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `program_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL COMMENT '0 => reJected\r\n1 => accepted\r\n2 => wating\r\n3 => wating For Update\r\n4=> accepted accepted\r\n5=> rejected accepted',
  `submission_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`application_id`, `student_id`, `faculty_id`, `department_id`, `program_id`, `status`, `submission_date`) VALUES
(53, 73, 15, 8, 12, 0, '2023-07-09'),
(54, 74, 15, 8, 14, 1, '2023-07-09'),
(55, 75, 15, 8, 12, 4, '2023-07-09'),
(56, 76, 15, 8, 12, 5, '2023-07-09');

-- --------------------------------------------------------

--
-- Table structure for table `departments_of_faculty`
--

CREATE TABLE `departments_of_faculty` (
  `department_id` int(11) NOT NULL,
  `department_name` varchar(255) NOT NULL,
  `faculty_id` int(11) NOT NULL,
  `department_name_ar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments_of_faculty`
--

INSERT INTO `departments_of_faculty` (`department_id`, `department_name`, `faculty_id`, `department_name_ar`) VALUES
(8, 'Information systems  ', 15, ''),
(9, 'Information technolgy', 15, ''),
(10, 'Computer science  ', 15, '');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `faculty_id` int(11) NOT NULL,
  `faculty_name` varchar(255) NOT NULL,
  `faculty_name_ar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`faculty_id`, `faculty_name`, `faculty_name_ar`) VALUES
(4, 'Arts', ''),
(5, 'Home Economics', ''),
(6, 'Commerce and Business Administration', ''),
(7, 'Education', ''),
(8, 'physical education (girls)', ''),
(9, 'physical education (Boys)', ''),
(10, 'Art education', ''),
(11, 'Music education', ''),
(12, 'nursing', ''),
(13, 'Nursing Institute', ''),
(14, 'Medicine', ''),
(15, 'Computers and artificial intelligence', ''),
(16, 'law', ''),
(17, 'Social Service', ''),
(18, 'Tourism and Hotel mangement', ''),
(19, 'pharmacy', ''),
(20, 'sciences', ''),
(21, 'Applied Arts', ''),
(22, 'Military College for Administrative Sciences', ''),
(23, 'Engineering (Helwan)', ''),
(24, 'Fine arts', ''),
(25, 'Technology and Education', ''),
(26, 'Engineering (matria)', ''),
(27, 'Postgraduate studies and interdisciplinary research', ''),
(28, 'The National Institute for Intellectual Property', '');

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `manager_id` int(11) NOT NULL,
  `manager_name` varchar(255) NOT NULL,
  `manager_email` varchar(255) NOT NULL,
  `faculty_id` int(11) NOT NULL,
  `password` varchar(11) NOT NULL,
  `type` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`manager_id`, `manager_name`, `manager_email`, `faculty_id`, `password`, `type`) VALUES
(3, 'manager', 'manager@info.com', 15, '123', 0),
(4, 'admin', 'admin@info.com', 15, '1234', 1);

-- --------------------------------------------------------

--
-- Table structure for table `programs_of_department`
--

CREATE TABLE `programs_of_department` (
  `program_id` int(11) NOT NULL,
  `program_name` varchar(255) NOT NULL,
  `department_id` int(11) NOT NULL,
  `level` tinyint(1) NOT NULL COMMENT '0 => diploma\r\n1 => Master''s\r\n2 => Ph.D.\r\n3 => Master''s AND Ph.D.\r\n4 => Master''s AND diploma\r\n5 => All',
  `program_name_ar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `programs_of_department`
--

INSERT INTO `programs_of_department` (`program_id`, `program_name`, `department_id`, `level`, `program_name_ar`) VALUES
(12, 'Software engineering  ', 8, 1, ''),
(13, 'Information systems ', 8, 3, ''),
(14, 'cyber security', 8, 0, ''),
(15, 'Information technology  ', 9, 3, ''),
(16, 'Computer linguistic ', 10, 1, ''),
(17, 'll', 8, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `national_id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phonenumber` int(11) NOT NULL,
  `gender` tinyint(1) NOT NULL COMMENT '0 => female\r\n1 => male',
  `level` tinyint(1) NOT NULL COMMENT '0 => diploma\r\n1 => Master''s\r\n2 => Ph.D.',
  `birthdate` date NOT NULL,
  `military_status` tinyint(1) NOT NULL COMMENT '0 => Exemption\r\n1 => postponed\r\n2 => completed',
  `img` varchar(255) NOT NULL,
  `academic_qualification` varchar(255) NOT NULL COMMENT 'صوره المؤهل الدراسي',
  `birth_certificate` varchar(255) NOT NULL COMMENT 'صوره شهاده الميلاد',
  `position_on_military` varchar(255) NOT NULL COMMENT 'موقفه من العسكريه',
  `good_conduct_form` varchar(255) NOT NULL COMMENT 'استماره حسن السيرة والسلوك',
  `approval_from_employer` varchar(255) NOT NULL COMMENT '	موافقة من جهة العمل',
  `photo_national_id` varchar(255) NOT NULL,
  `grade_statement` varchar(255) NOT NULL COMMENT 'بيان درجات',
  `masters_photo` varchar(255) NOT NULL COMMENT '	صوره الماجستير'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `student_name`, `password`, `national_id`, `email`, `phonenumber`, `gender`, `level`, `birthdate`, `military_status`, `img`, `academic_qualification`, `birth_certificate`, `position_on_military`, `good_conduct_form`, `approval_from_employer`, `photo_national_id`, `grade_statement`, `masters_photo`) VALUES
(22, 'nadermamdouh', '$2b$10$DDFEAQxZkFwzfttbPS327O1Syh335jCqANwe8uhyAQOwG85UT.MmG', 12345678912348, 'nader@dv.com', 1125257350, 1, 1, '2023-06-13', 0, 'nadermamdouh_image1_1688423374426.png', 'nadermamdouh_image4_1688423374466.png', 'nadermamdouh_image3_1688423374439.png', 'nadermamdouh_image8_1688423374495.png', 'nadermamdouh_image6_1688423374489.png', 'nadermamdouh_image7_1688423374492.png', 'nadermamdouh_image2_1688423374431.png', 'nadermamdouh_image5_1688423374470.png', 'nadermamdouh_image9_1688423374500.png'),
(37, 'nader', '$2b$10$YSpsmMhyP9Thim6v3ruaKu5W2xv0mmOAsxXUNqrrpGTXhxYzXrQKm', 12345678912348, 'nader@dv.com', 1125257350, 1, 1, '2023-06-13', 0, 'nader_image1_1688390802067.png', 'nader_image4_1688390802082.png', 'nader_image3_1688390802074.png', 'nader_image8_1688390802100.png', 'nader_image6_1688390802091.png', 'nader_image7_1688390802097.png', 'nader_image2_1688390802070.png', 'nader_image5_1688390802087.png', 'nader_image9_1688390802105.png'),
(38, 'nader', '$2b$10$WQ4SMUfGVUsTm8F7bsLt3u3SUhaeSMH6C48Jbsi0ICkMpwaVdQc/y', 12345678912348, 'nader@dv.com', 1125257350, 1, 1, '2023-06-13', 0, 'nader_image1_1688390807402.png', 'nader_image4_1688390807437.png', 'nader_image3_1688390807433.png', 'nader_image8_1688390807456.png', 'nader_image6_1688390807447.png', 'nader_image7_1688390807452.png', 'nader_image2_1688390807405.png', 'nader_image5_1688390807444.png', 'nader_image9_1688390807459.png'),
(39, 'nader', '$2b$10$ujUuumLgRMhH9q1byZz66.XEqi1DN6ZMlkPBKpSrCb2A.0zcX28Vu', 12345678912348, 'nader@dv.com', 1125257350, 1, 1, '2023-06-13', 0, 'nader_image1_1688390853069.png', 'nader_image4_1688390853078.png', 'nader_image3_1688390853075.png', 'nader_image8_1688390853101.png', 'nader_image6_1688390853089.png', 'nader_image7_1688390853094.png', 'nader_image2_1688390853072.png', 'nader_image5_1688390853081.png', 'nader_image9_1688390853106.png'),
(40, 'nader', '$2b$10$JoH.LkjjrrT8mhpYUfSGoubH5L/ct3R/imwIDAprZeeEjp8KuCnuq', 12345678912348, 'nader@dv.com', 1125257350, 1, 1, '2023-06-13', 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(41, 'nader', '$2b$10$Tf4XHlxZEqWjWQUzpM27.ehfSeDoD3pmbDr6DLrEP41.I8zVp1Qdi', 12345678912348, 'nader@dv.com', 1125257350, 1, 1, '2023-06-13', 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(42, 'nader', '$2b$10$Aidi0uw9IjddO8ed8S1Y8OqqSOa.ykTtmR4qLzBxsSpqsc3amLq0a', 12345671412348, 'nader@dv.com', 1125257350, 1, 1, '2023-06-13', 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(43, 'nader', '$2b$10$8803Pmo8vC1UYpPNUXH2tu3QlMXtIkd63EDlL8gmv0sjE/XCZ5bfK', 12345671412348, 'nader@dv.com', 1125257350, 1, 1, '2023-06-13', 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(44, 'nader', '$2b$10$Fb2QFKLyFDovdvRYmeXoMupuCM5uOAiA0mWNJAj0JueeDjbwHXhH.', 12345671412348, 'nader@dv.com', 1125257350, 1, 1, '2023-06-13', 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(45, 'dsdsd', '$2b$10$tlRsWXE6S9hYAdLrxGPGQOSvEFu2b1zm1wDQufQUF/oPUfFT9wF8.', 12345678912838, 'dcsc@cwe.com', 2147483647, 1, 2, '2023-07-09', 1, 'dsdsd_image1_1688519921056.png', 'dsdsd_image4_1688519921078.png', 'dsdsd_image3_1688519921073.png', 'dsdsd_image8_1688519921107.png', 'dsdsd_image6_1688519921095.png', 'dsdsd_image7_1688519921101.png', 'dsdsd_image2_1688519921064.png', 'dsdsd_image5_1688519921086.png', 'dsdsd_image9_1688519921118.png'),
(46, 'cecs', '$2b$10$M5dVTBLqHMGqHsFree1Tler3DprL6XtTWGyznlh1LgPXDLaNY9/zO', 12345678900000, 'dsv@cec.com', 2147483647, 1, 0, '2023-07-18', 0, 'cecs_image1_1688522126373.png', '0', '0', '0', '0', '0', 'cecs_image2_1688522126377.png', '0', '0'),
(47, 'cdd', '$2b$10$vzdQtlgG6mp54C/lv/WdJea3n6vBrEa9zA/dXMXwVuWOeLW7x6Vha', 12345678940000, 'dw@dw.dw', 2147483647, 1, 0, '2023-07-06', 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(48, 'cdd', '$2b$10$X1q6/Q75AAN.hpfQOPXln.RkmGB8mNx3UT.bA/M6lr8jx6DV94j8W', 12345678940000, 'dw@dw.dw', 2147483647, 1, 0, '2023-07-06', 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(49, 'cdd', '$2b$10$lLn.J6krdXBu/q6lbJsXs.PwwfW6wAkI3hifI5jv/P.bjLRCy3lwy', 12345678940000, 'dw@dw.dw', 2147483647, 1, 0, '2023-07-06', 0, '0', '0', '0', '0', '0', '0', '0', '0', '0'),
(73, 'Nader Mamdouhmm', '$2b$10$UBnH55YSaFIsQsJgQYPFLutd2zspcnUBVzOn3sYjti5yH9n0N4ECa', 2020, 'nadermamdouh68@gmail.com', 1125257350, 1, 1, '2023-07-14', 0, 'undefined_photo_2022-08-13_01-41-51.jpg_1688863980044.jpg', 'undefined_4.png_1688863980058.png', 'undefined_3.png_1688863980053.png', 'undefined_8.png_1688863980079.png', 'undefined_6.png_1688863980069.png', 'undefined_7.png_1688863980075.png', 'Nader Mamdouhmm_photo_2022-11-30_21-19-27.jpg_1688869251358.jpg', 'undefined_5.png_1688863980064.png', 'undefined_9.png_1688863980086.png'),
(74, 'mmmm', '$2b$10$0hYLXJIjex8rkAEfAeYLyeH4ELtEWs31IRZNXAjak.INmhGxGrf8u', 120120, 'nadermamdouh68uu@gmail.com', 1125257350, 1, 0, '2023-07-20', 2, 'mmmm_Leonardo_Creative_my_0.jpg_1688869521535.jpg', 'mmmm_3.pdf_1688869521567.pdf', 'mmmm_2.pdf_1688869521560.pdf', 'mmmm_7.png_1688869521621.png', 'mmmm_5.pdf_1688869521602.pdf', 'mmmm_6.png_1688869521618.png', 'mmmm_1.pdf_1688869521544.pdf', 'mmmm_4.pdf_1688869521585.pdf', 'mmmm_image (6).jpg_1688869623460.jpg'),
(75, 'michael anwer', '$2b$10$BODCiCbaH8lti1YxoIHF3eYM7DKH0ZotDTGrVnBOtl7tgoqjhip2W', 123456, 'mikelhfzy@gmail.com', 1225292831, 1, 1, '2023-07-07', 0, 'michael anwer_logo 3 copy.png_1688883898761.png', 'michael anwer_logo 3 copy.png_1688883898769.png', 'michael anwer_logo 3 copy.png_1688883898767.png', 'michael anwer_logo 3 copy.png_1688883898776.png', 'michael anwer_logo 3 copy.png_1688883898773.png', 'michael anwer_logo 3 copy.png_1688883898775.png', 'michael anwer_463d0a9288fdf4704631369aa08020bd.jpg_1688884089171.jpg', 'michael anwer_logo 3 copy.png_1688883898771.png', 'michael anwer_logo 3 copy.png_1688883898779.png'),
(76, 'michael llanwer', '$2b$10$Gf2NnVa.HAkPM9aoS3qqLORRljcJaVNkwwaKlYWOjZ04SH5pspImi', 807090, 'mikelhfzy@gmail.com', 1225292831, 1, 1, '2023-07-12', 0, 'michael llanwer_download.pdf_1688888873743.pdf', 'michael llanwer_1.pdf_1688888873750.pdf', 'michael llanwer_image.jpg_1688888873745.jpg', 'michael llanwer_1.pdf_1688888873758.pdf', 'michael llanwer_image (4).jpg_1688888873757.jpg', 'michael llanwer_c6ada28762f04a9dbf83e5fe9900fe01.jpg_1688888873757.jpg', 'michael llanwer_image (4).jpg_1688888873744.jpg', 'michael llanwer_3fe6587ecfd932f0069fa37160f416b9.jpg_1688888873755.jpg', 'michael llanwer_logo 3 copy.png_1688888873761.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`application_id`),
  ADD KEY `stud-app` (`student_id`),
  ADD KEY `depa-app` (`department_id`),
  ADD KEY `facu-app` (`faculty_id`),
  ADD KEY `prog-app` (`program_id`);

--
-- Indexes for table `departments_of_faculty`
--
ALTER TABLE `departments_of_faculty`
  ADD PRIMARY KEY (`department_id`),
  ADD KEY `faculty-dep` (`faculty_id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`faculty_id`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`manager_id`),
  ADD KEY `faculty-man` (`faculty_id`);

--
-- Indexes for table `programs_of_department`
--
ALTER TABLE `programs_of_department`
  ADD PRIMARY KEY (`program_id`),
  ADD KEY `program-dep` (`department_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `application_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `departments_of_faculty`
--
ALTER TABLE `departments_of_faculty`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `faculty_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `manager_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `programs_of_department`
--
ALTER TABLE `programs_of_department`
  MODIFY `program_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `application`
--
ALTER TABLE `application`
  ADD CONSTRAINT `depa-app` FOREIGN KEY (`department_id`) REFERENCES `departments_of_faculty` (`department_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `facu-app` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`faculty_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `prog-app` FOREIGN KEY (`program_id`) REFERENCES `programs_of_department` (`program_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stud-app` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `departments_of_faculty`
--
ALTER TABLE `departments_of_faculty`
  ADD CONSTRAINT `faculty-dep` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`faculty_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `manager`
--
ALTER TABLE `manager`
  ADD CONSTRAINT `faculty-man` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`faculty_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `programs_of_department`
--
ALTER TABLE `programs_of_department`
  ADD CONSTRAINT `program-dep` FOREIGN KEY (`department_id`) REFERENCES `departments_of_faculty` (`department_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
