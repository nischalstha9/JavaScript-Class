<?php

$conn = new mysqli("localhost", "root", "", "student_marks");

if ($conn->connect_errno) {
    echo "Connection Error " . $conn->connect_error;
    exit();
}

// $sql = $conn->prepare("UPDATE employee SET `employee`.`bonus`=empSalary*.10 WHERE `employee`.`empWorkExperience`>5 OR `employee`.`empSalary`>30000");
$sql = $conn->prepare("UPDATE employee SET bonus = CASE
                        WHEN empSalary >= 30000 OR empWorkExperience >= 5 THEN empSalary*0.10
                        ELSE empSalary*0.05
                        END");

$sql->execute();
if ($sql->affected_rows > 0) {
    Header("Location: ./employee.php");
} else {
    echo "Bonus Distribution Failed!";
}

?>

<a href="./employee.php">Go home</a>