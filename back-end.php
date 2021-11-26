<?php
	$servername = "localhost";
	$username = "root";
	$password = "12345678";
	$dbname = "resume";
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	// Create connection
	// Opens a new connection to the MySQL server
	if ($conn->connect_error)
		die("Connection failed: " . $conn->connect_error);
	else
	echo "success connection";
	$name1 = $_POST['na'];
	$contact = $_POST['cn'];
	$address = $_POST['ad'];
	$facebook = $_POST['fb'];
	$instagram = $_POST['ig'];
	$linkedin = $_POST['li'];

	$sql = "INSERT INTO resume1 VALUES( '$name1', '$contact', '$address', '$facebook', '$instagram', '$linkedin' )";
	$result = $conn->query($sql);
	echo "<br>";
	echo "<table border='2'>";
	echo "<tr>";
	echo "<th>Name</th><th>Contact number</th><th>Address</th><th>Facebook</th><th>instagram</th><th>linkedin</th></tr>";
	$sql1 = "SELECT * FROM resume1";
	$result1 = $conn->query($sql1);
	if ($result1->num_rows >0)
	{
		// output data of each row and fetches a result row as an associative array
		while($row = $result1->fetch_assoc())
		{
			echo "<tr>";
			echo "<td>". $row["name"]."</td>";
			echo "<td>". $row["contact"]."</td>";
			echo "<td>". $row["address"]."</td></tr>";
			echo "<td>". $row["face"]."</td></tr>";
			echo "<td>". $row["linked"]."</td></tr>";
			echo "<td>". $row["instagram"]."</td></tr>";
		}
	}
	else
		echo "Table is Empty";
		echo "</table>";
		mysqli_close($conn);
?>