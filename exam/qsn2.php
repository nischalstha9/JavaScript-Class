<?php
$conn = new mysqli("127.0.0.1", "root", "", "student_marks");
if ($conn->connect_errno) :
    echo "DB conn failed " . $conn->$connect_error;
    exit();
endif;

$top_5_sql = $conn->prepare("SELECT StudentName,percentage from marks ORDER BY percentage DESC LIMIT 5");
$top_5_sql->execute();
$top_5_students = $top_5_sql->get_result();

if (isset($_POST['submitBtn'])) {
    $name = $_POST['name'];
    $roll = $_POST['roll'];
    $mark1 = $_POST['mark1'];
    $mark2 = $_POST['mark2'];
    $mark3 = $_POST['mark3'];
    $mark4 = $_POST['mark4'];

    $percentage = $mark1 + $mark2 + $mark3 + $mark4 / 400 * 100;

    $post_stu_sql = $conn->prepare("INSERT INTO marks (StudentName,RollNo,mark1,mark2,mark3,mark4,percentage) VALUES(?,?,?,?,?,?,?)");
    $post_stu_sql->bind_param("sdddddd", $name, $roll, $mark1, $mark2, $mark3, $mark4, $percentage);
    $post_stu_sql->execute();
    if ($post_stu_sql->affected_rows > 0) {
        header("Location: ./qsn2.php");
    }
    $post_stu_sql->close();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Students Marks</title>
</head>

<body>
    <h1>Top 5 Students</h1>
    <table border="1">
        <thead>
            <tr>
                <th>
                    Rank
                </th>
                <th>
                    Student Name
                </th>
                <th>
                    Percentage
                </th>
            </tr>
        </thead>
        <tbody>
            <?php
            $rank = 1;
            while ($row = $top_5_students->fetch_assoc()) :
            ?>
                <tr>
                    <td>
                        <?= $rank ?>
                    </td>
                    <td>
                        <?= $row["StudentName"] ?>
                    </td>
                    <td>
                        <?= $row["percentage"] ?>
                    </td>
                </tr>
            <?php
                $rank++;
            endwhile;
            ?>
        </tbody>
    </table>

    <hr>
    FORM

    <form action="./qsn2.php" method="post">
        <label for="name">name: </label>
        <input type="text" id="name" name="name"><br>

        <label for="roll">roll: </label>
        <input type="number" id="roll" name='roll'><br>

        <label for="mark1">mark1: </label>
        <input type="number" min="0" max="100" id="mark1" name='mark1'><br>

        <label for="mark2">mark2: </label>
        <input type="number" min="0" max="100" id="mark2" name='mark2'><br>

        <label for="mark3">mark3: </label>
        <input type="number" min="0" max="100" id="mark3" name='mark3'><br>

        <label for="mark4">mark4: </label>
        <input type="number" min="0" max="100" id="mark4" name='mark4'><br>

        <button type="submit" name="submitBtn">Submit</button><br>
    </form>

</body>

</html>