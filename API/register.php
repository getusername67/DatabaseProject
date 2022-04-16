<?php
    $inData = getRequestInfo();

    $serverName = "localhost";
    $dBUsername = "root";
    $dBPassword = "1234";
    $dbName = "database";

    // Create account fields
    $regFirstname = $inData["regFirstname"];
    $regLastname = $inData["regLastname"];
    $regUsername = $inData["regUsername"];
    $regPassword = $inData["regPassword"];
    $regPhone = $inData["regPhone"];
    $regEmail = $inData["regEmail"];
    $regPerm = $inData["regPerm"];
    
    $conn = new mysqli($serverName, $dBUsername, $dBPassword, $dbName);
    
    if ($conn->connect_error) 
    {
        returnWithError( $conn->connect_error );
    }
    else
    {
        // Check if username already exists
        $sql = "SELECT * FROM person WHERE USERNAME='$regUsername'";
        $result = $conn->query($sql);
        if($result->num_rows > 0)
        {
            returnWithError("Username already taken");
        }
        else
        {
            $size = "SELECT * from person;";
            $length = mysqli_num_rows(mysqli_query($conn, $size));

            $sql = "INSERT INTO person (`pid`, `username`, `password`, `first_name`, `last_name`, `phone`, `email`, `access`) VALUES
            ('" . $length . "', '" . $regUsername . "', '" . $regPassword . "', '" . $regFirstname . "', '" . $regLastname . "', '" . $regPhone . "', '" . $regEmail . "', '" . $regPerm . "')";

            if ($result = $conn->query($sql) != TRUE) {
                returnWithError($conn->error);
            }
            else
            {
                // Return with empty error, to signal account creation successful
                returnWithError("");
            }
            }
        $conn->close();
    }

    function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}

    function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}
	
	function returnWithError($err)
	{
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson($retValue);
	}
