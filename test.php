<?php
$filename = 'data.xml'; // Replace this with your actual file path

// Check if the file exists
if (file_exists($filename)) {
    // Get the file permissions
    $perms = fileperms($filename);

    // Convert the file permissions to a human-readable format
    $humanPerms = substr(sprintf('%o', $perms), -4);

    // Print the file permissions
    echo "File Permissions: $humanPerms";
} else {
    echo "File not found: $filename";
}
?>
