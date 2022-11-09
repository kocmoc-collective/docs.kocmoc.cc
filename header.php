<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kocmoc - <?php echo $page_title; ?></title>

    <link rel="stylesheet" href="src/css/normalize.css?ver=1.0.0" />
    <link rel="stylesheet" href="src/css/app.css?ver=1.0.0" />
</head>

<body>
    <div class="site">
        <header class="site-header">
            <nav class="main-nav">
                <h1 class="site-title">
                    <a href="index">Kocmoc Collective</a>
                    <a href="about">About</a>
                    <a href="proposal">Proposal</a>
                    <a href="submit">Submit</a>
                </h1>
            </nav>

            <div class="marquee" data-speed="0.25" data-pausable="true">
                <h1><?php echo $page_title; ?></h1>
            </div>
        </header>