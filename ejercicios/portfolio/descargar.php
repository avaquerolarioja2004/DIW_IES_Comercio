<?php
$rutaArchivo = './Curriculum_Angel_Vaquero.pdf';

if (file_exists($rutaArchivo)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="' . basename($rutaArchivo) . '"');
    header('Content-Length: ' . filesize($rutaArchivo));
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Expires: 0');
    
    readfile($rutaArchivo);
    exit;
}

if (isset($_SERVER['HTTP_REFERER'])) {
    header('Location: ' . $_SERVER['HTTP_REFERER']);
} else {
    header('Location: index.html');
}
?>