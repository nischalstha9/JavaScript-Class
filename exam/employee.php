<?php

$conn = new mysqli("localhost", "root", "", "student_marks");

if ($conn->connect_errno) {
    echo "Connection Error " . $conn->connect_error;
    exit();
}

if (isset($_POST['submitBtn'])) {
    $name = $_POST["name"];
    $experience = $_POST["experience"];
    $salary = $_POST["salary"];

    $sql = $conn->prepare("INSERT INTO employee (empName, empWorkExperience, empSalary) VALUES(?,?,?)");
    $sql->bind_param("sdd", $name, $experience, $salary);
    $sql->execute();
    if ($sql->affected_rows > 0) {
        Header("Location: ./employee.php");
    }
    $sql->close();
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