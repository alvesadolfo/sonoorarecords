<?php
    include ("config.php");
    //$data = [ 'a', 'b', 'c' ];
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
        $_POST = json_decode(file_get_contents('php://input'), true);
 
    $acao = $_POST['acao'];
    $id = 0;
    $params = "";

    if(isset($_POST['id'])){
        $id = $_POST['id'];
    }

    if(isset($_POST['list'])){
        $list = $_POST['list'];
    }

    if(isset($_POST['params'])){
        $params = $_POST['params'];
    }

    if($acao == "get-all-artists"){
        $query = "SELECT * FROM artist ORDER BY name ASC";
        $result = pg_query($query);
        $linha = pg_fetch_all($result);
        $rows = pg_num_rows($result);
        for($i = 0; $i < $rows; $i++){
            $linha[$i]['bio'] = html_entity_decode($linha[$i]['bio'], ENT_QUOTES);
        }
        echo json_encode($linha);
    }
    if($acao == "get-artist"){
        $query = "SELECT * FROM artist WHERE codigo = {$id}";
        $result = pg_query($query);
        $linha = pg_fetch_all($result);
        $rows = pg_num_rows($result);
        for($i = 0; $i < $rows; $i++){
            $linha[$i]['bio'] = html_entity_decode($linha[$i]['bio'], ENT_QUOTES);
        }
        echo json_encode($linha);
    }
    if($acao == "get-all-releases"){
        $query = "SELECT r.codigo, r.album_title, r.album_bio, r.link_soundcloud, r.link_beatport, r.cod_artist, p.name_picture FROM release r LEFT JOIN pictures p ON r.codigo = p.cod_release";
        $result = pg_query($query);
        $linha = pg_fetch_all($result);
        $rows = pg_num_rows($result);
        for($i = 0; $i < $rows; $i++){
            $linha[$i]['album_bio'] = html_entity_decode($linha[$i]['album_bio'], ENT_QUOTES);
        }
        echo json_encode($linha);
    }
    if($acao == "get-release"){
        $query = "SELECT * FROM release WHERE codigo = {$id}";
        $result = pg_query($query);
        $linha = pg_fetch_all($result);
        $rows = pg_num_rows($result);
        for($i = 0; $i < $rows; $i++){
            $linha[$i]['album_bio'] = html_entity_decode($linha[$i]['album_bio'], ENT_QUOTES);
        }
        echo json_encode($linha);
    }
    if($acao == "get-perfil-picture"){
        $query = "SELECT name_picture FROM pictures WHERE cod_artist = {$id} AND perfil";
        $result = pg_query($query);
        $linha = pg_fetch_all($result);
        $rows = pg_num_rows($result);
        echo json_encode($linha);
    }
    if($acao == "get-perfil-picture-by-list"){
        $list = implode( ", ", $list );
        $query = "SELECT cod_artist, name_picture FROM pictures WHERE cod_artist in ({$list}) AND perfil";
        $result = pg_query($query);
        $linha = pg_fetch_all($result);
        $rows = pg_num_rows($result);
        echo json_encode($linha);
    }
    if($acao == "get-release-picture-by-list"){
        $list = implode( ", ", $list );
        $query = "SELECT cod_release, name_picture FROM pictures WHERE cod_release in ({$list})";
        $result = pg_query($query);
        $linha = pg_fetch_all($result);
        $rows = pg_num_rows($result);
        echo json_encode($linha);
    }
    if($acao == "get-artist-picture"){
        $query = "SELECT name_picture FROM pictures WHERE cod_artist = {$id} AND perfil != true";
        $result = pg_query($query);
        $linha = pg_fetch_all($result);
        $rows = pg_num_rows($result);
        echo json_encode($linha);
    }
    if($acao == "get-release-picture"){
        $query = "SELECT name_picture FROM pictures WHERE cod_release = {$id}";
        $result = pg_query($query);
        $linha = pg_fetch_all($result);
        $rows = pg_num_rows($result);
        echo json_encode($linha);
    }
    if($acao == "new-artist"){
        $query  = "INSERT INTO artist(name, bio, country, link_facebook, link_instagram, link_youtube, link_soundcloud, link_beatport, link_presskit) ";
        $query .= "VALUES ('".htmlentities($params['name'], ENT_QUOTES)."', '".htmlentities($params['biografia'], ENT_QUOTES)."', '{$params['country']}', '{$params['link_facebook']}', '{$params['link_instagram']}', '{$params['link_youtube']}', '{$params['link_soundcloud']}', '{$params['link_beatport']}', '{$params['link_presskit']}')";
        $result = pg_query($query);
        $linha = pg_affected_rows($result);
        echo json_encode($linha);
    }
    if($acao == "new-release"){
        $query  = "INSERT INTO release(album_title, album_bio, link_soundcloud, link_beatport, cod_artist)";
        $query .= "VALUES ('".htmlentities($params['album_title'], ENT_QUOTES)."', '".htmlentities($params['album_bio'], ENT_QUOTES)."', '{$params['link_soundcloud']}', '{$params['link_beatport']}', {$params['cod_artist']})";
        $result = pg_query($query);
        $linha = pg_affected_rows($result);
        echo json_encode($linha);
    }
    if($acao == "edit-artist"){
        $query  = "UPDATE artist SET name = '".htmlentities($params['name'], ENT_QUOTES)."', bio = '".htmlentities($params['biografia'], ENT_QUOTES)."', country = '{$params['country']}', link_facebook = '{$params['link_facebook']}', link_instagram = '{$params['link_instagram']}', link_youtube = '{$params['link_youtube']}', link_soundcloud = '{$params['link_soundcloud']}', link_beatport = '{$params['link_beatport']}', link_presskit = '{$params['link_presskit']}', exclusive = '{$params['exclusive']}' ";
        $query .= "WHERE codigo = '{$params['codigo']}'";
        $result = pg_query($query);
        $linha = pg_affected_rows($result);
        echo json_encode($linha);
    }
    if($acao == "edit-release"){
        $query  = "UPDATE release SET album_title = '".htmlentities($params['album_title'], ENT_QUOTES)."', album_bio = '".htmlentities($params['album_bio'], ENT_QUOTES)."', link_soundcloud = '{$params['link_soundcloud']}', link_beatport = '{$params['link_beatport']}'";
        $query .= "WHERE codigo = '{$params['codigo']}'";
        $result = pg_query($query);
        $linha = pg_affected_rows($result);
        echo json_encode($linha);
    }
    if($acao == "delete-artist"){
        $query  = "DELETE FROM artist ";
        $query .= "WHERE codigo = {$params['codigo']}";
        $result = pg_query($query);
        $linha = pg_affected_rows($result);
        echo json_encode($linha);
    }
    if($acao == "delete-release"){
        $query  = "DELETE FROM release ";
        $query .= "WHERE codigo = {$params['codigo']}";
        $result = pg_query($query);
        $linha = pg_affected_rows($result);
        echo json_encode($linha);
    }
    if($acao == "upload-perfil-photo"){

        $upload_dir = 'img/';
        $response = array();
        
        $avatar_name = $_FILES["image"]["name"];
        $avatar_tmp_name = $_FILES["image"]["tmp_name"];
        $error = $_FILES["image"]["error"];
        
        $random_name = "perfil-".rand(1000,1000000)."-".$avatar_name;
        $upload_name = $upload_dir.strtolower($random_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);

        if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $upload_name
              );
        }else{
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
        
        $_query  = "UPDATE pictures SET perfil = false WHERE cod_artist = '{$_POST['cod_artist']}'";
        $_result = pg_query($_query);

        $query  = "INSERT INTO pictures (cod_artist, name_picture, perfil) ";
        $query .= "VALUES ('{$_POST['cod_artist']}', '{$upload_name}', true)";
        $result = pg_query($query);
        $linha = pg_affected_rows($result);
        echo json_encode($linha);
    }
    if($acao == "upload-artist-photo"){

        $upload_dir = 'img/';
        $response = array();
        
        $avatar_name = $_FILES["image"]["name"];
        $avatar_tmp_name = $_FILES["image"]["tmp_name"];
        $error = $_FILES["image"]["error"];
        
        $random_name = "artist-".rand(1000,1000000)."-".$avatar_name;
        $upload_name = $upload_dir.strtolower($random_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);

        if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $upload_name
              );
        }else{
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }

        $query  = "INSERT INTO pictures (cod_artist, name_picture, perfil) ";
        $query .= "VALUES ('{$_POST['cod_artist']}', '{$upload_name}', false)";
        $result = pg_query($query);
        $linha = pg_affected_rows($result);
        echo json_encode($linha);
    }
    if($acao == "upload-release-photo"){
        $upload_dir = 'img/';
        $response = array();
        
        $avatar_name = $_FILES["image"]["name"];
        $avatar_tmp_name = $_FILES["image"]["tmp_name"];
        $error = $_FILES["image"]["error"];
        
        $random_name = "release-".rand(1000,1000000)."-".$avatar_name;
        $upload_name = $upload_dir.strtolower($random_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);

        if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $upload_name
              );
        }else{
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
        
        $_query  = "INSERT INTO pictures (cod_release, name_picture, perfil) ";
        $_query .= "VALUES ('{$_POST['cod_release']}', '{$upload_name}', false)";
        $_result = pg_query($_query);
        $_linha = pg_affected_rows($_result);
        echo json_encode($_linha);
    }
    if($acao == "send-mail"){

        $assunto = "";
        $mensagemHTML = "" ;

        if($params['assunto'] == "DEMO"){
            $assunto = "DEMO RECEIVE";
            $mensagemHTML .= "NAME: ".$params['name']."\n";
            $mensagemHTML .= "COUNTRY: ".$params['country']."\n";
            $mensagemHTML .= "SOUNDCLOUD: ".$params['soundcloud']."\n";
            $mensagemHTML .= "INSTAGRAM: ".$params['instagram']."\n";
            $mensagemHTML .= "ABOUT YOU: ".$params['aboutyou']."\n";
            $mensagemHTML .= "EMAIL: ".$params['email']."\n";
            $mensagemHTML .= "YOUTUBE: ".$params['youtube']."\n";
            $mensagemHTML .= "FACEBOOK: ".$params['facebook']."\n";
            $mensagemHTML .= "YEARS MUSIC PRODUCTION: ".$params['yearsmusicproduction']."\n";
            $mensagemHTML .= "SOMETHING SPECIAL".$params['somethingspecial']."\n";
        }else{
            $assunto = "CONTATO SITE";
            $mensagemHTML .= "NAME: ".$params['name']."\n";
            $mensagemHTML .= "PHONE: ".$params['phone']."\n";
            $mensagemHTML .= "EMAIL: ".$params['email']."\n";
            $mensagemHTML .= "FACEBOOK: ".$params['facebook']."\n";
            $mensagemHTML .= "MESSAGE: ".$params['message']."\n";
        }

        $headers = "MIME-Version: 1.1\n";
        $headers .= "Content-type: text/plain; charset=UTF-8\n";
        $headers .= "From: Contact Sonoora Records <felipe@sonoorarecords.com.br>\n";

        $emaildestinatario = "felipe@sonoorarecords.com.br";
        
        $emailsender = "felipe@sonoorarecords.com.br";
        $quebra_linha = "\n";

        if(!mail($emaildestinatario, $assunto, $mensagemHTML, $headers ,"-r".$emailsender)){
            $headers .= "Return-Path: " . $emailsender . $quebra_linha;
            mail($emaildestinatario, $assunto, $mensagemHTML, $headers );
        }
        echo "1";
    }
?>