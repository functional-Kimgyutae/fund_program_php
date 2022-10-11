<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="app.css">
    <link rel="stylesheet" href="css/bootstrap.css">
</head>

<body>
    <header class="p-a w-100">
        <div class="con d-f j-b a-l m-a h-100">
            <nav class="w-10 d-f a-l j-c h-100">
                <a href="/"><img src="images/logo.png" alt=""></a>
                <p>ick Starter</p>
            </nav>
            <nav class="w-40 d-f a-l j-b h-100">
                <a href="/">메인페이지</a>
                <a href="/enrollment">펀드등록</a>
                <a href="/fundList">펀드보기</a>
                <a href="/invList">투자자목록</a>
            </nav>
            <nav class="w-10 d-f a-l j-b h-100">
                <?php if (__SESSION) : ?>
                    <?php if ($_SESSION['user']->email == "admin") : ?>
                        <a href="/admin">관리자</a>
                    <?php else : ?>
                        <a class="numbe w-50" title="" href="/user?email=<?= $_SESSION['user']->email ?>"><?= htmlentities($_SESSION['user']->name) ?><span></span></a>
                        <script>
                            let number = <?= $_SESSION['user']->pay ?>;
                            console.log(name);
                            number = number.toLocaleString();
                            document.querySelector("header .numbe span").innerHTML = number+ "원";
                        </script>
                    <?php endif; ?>
                    <a href="/logout">로그아웃</a>
                <?php else : ?>
                    <a href="/login">로그인</a>
                    <a href="/register">회원가입</a>
                <?php endif; ?>
            </nav>
        </div>
    </header>
    <div class="one">