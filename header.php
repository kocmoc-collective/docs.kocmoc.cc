<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo $page; ?> - DOCS.KOCMOC.CC</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="src/css/normalize.css?ver=1.0.0" />
    <link rel="stylesheet" href="src/css/app.css?ver=1.0.1" />
</head>

<body>

    <div class="site">

        <header class="site-header">

            <nav class="main-nav">

                <h1 class="site-title">
                    <a href="/">DOCS.KOCMOC.CC</a>
                </h1>

                <ul class="main-menu">
                    <li><a href="proposal">Radio Show Proposal</a></li>
                    <li><a href="submit">Submitting Shows</a></li>
                    <li><a href="schedule">Program Schedule</a></li>
                    <li><a href="tools">Tools</a></li>
                    <li><a href="donate">Donate</a></li>
                </ul>

            </nav>

            <div class="marquee" data-speed="0.25" data-pausable="true">
                <h1><?php echo $page; ?></h1>
            </div>

        </header>