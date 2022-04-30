<?php

// $conn = new mysqli("localhost", "root", "", "student_marks");
// $conn = new PDO("mysql:host=127.0.0.1;dbname=student_marks", "root", "");

// if ($conn->connect_errno) {
//     echo "Connection Error " . $conn->connect_error;
//     exit();
// }

try {
    $conn = new PDO("mysql:host=127.0.0.1;dbname=student_marks", "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    exit();
}

if (isset($_POST['submitBtn'])) {
    $name = $_POST["name"];
    $experience = $_POST["experience"];
    $salary = $_POST["salary"];

    $sql = $conn->prepare("INSERT INTO employee (empName, empWorkExperience, empSalary) VALUES(:empName,:empWorkExperience,:empSalary)");
    // $sql->bindParam("sdd", $name, $experience, $salary);
    $sql->bindParam(":empName", $name, PDO::PARAM_STR);
    $sql->bindParam(":empWorkExperience", $experience, PDO::PARAM_INT);
    $sql->bindParam(":empSalary", $salary, PDO::PARAM_INT);
    $sql->execute();
    if ($sql->rowCount() > 0) {
        Header("Location: ./employee.php");
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Form</title>
    <h1>Employee Form</h1>
    <hr>
    <a href="./giveBonus.php" id="giveBonus">Give Bonus</a>

    <form action="./employee.php" method="post">
        <table>
            <tr>
                <td>
                    Name:
                </td>
                <td>
                    <input type="text" name="name" id="name" required="required">
                </td>
            </tr>
            <tr>
                <td>
                    Work Experience:
                </td>
                <td>
                    <input type="number" name="experience" id="experience" required="required">
                </td>
            </tr>
            <tr>
                <td>
                    Salary:
                </td>
                <td>
                    <input type="number" name="salary" id="salary" required="required">
                </td>
            </tr>
            <tr>
                <td></td>
                <td><button type="submit" name="submitBtn">Submit</button></td>
            </tr>
        </table>
    </form>
</head>

<body>

</body>

</html>