<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // // Validate.
  // if ((int)$request->id < 1 || trim($request->number) == '' || (float)$request->amount < 0) {
  //   return http_response_code(400);
  // }

  // Sanitize.
  $EmpId = mysqli_real_escape_string($con, (int)trim($request->EmpId));
  $FirstName = mysqli_real_escape_string($con, trim($request->FirstName));
  $LastName = mysqli_real_escape_string($con, trim($request->LastName));
  $Email = mysqli_real_escape_string($con, trim($request->Email));
  $Password = mysqli_real_escape_string($con, trim($request->Password));
  $Designation = mysqli_real_escape_string($con, trim($request->Designation));

  // Update.
  $sql = "UPDATE `user` SET `FirstName`='$FirstName',`LastName`='$LastName',`Email`='$Email',`Password`='$Password',`Designation`='$Designation' WHERE `EmpId` = '{$EmpId}' LIMIT 1";
  
  print $sql;

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}

?>