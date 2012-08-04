<?php

$action = isset($_GET['action']) ? $_GET['action'] : null;

if ( $action == 'next_train' ) {
  echo json_encode($_GET);
}
elseif ( $action == 'airport' ) {
  echo json_encode($_GET);
}
else {
  include 'ui/index.html';
}

?>