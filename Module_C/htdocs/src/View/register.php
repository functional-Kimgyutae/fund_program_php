<section id="register" class="now">
            <div class="visual">
                <div>
                    <form action="/register" method="POST" class="m-a" onsubmit="return check();">
                        <li>
                            <h2>회원가입</h2>
                        </li>
                        <li>
                            <input type="text" class="w-100  email" placeholder="이메일" name="email" >
                            <p class="alerttext d-n email-p">이메일형식이 잘못되었습니다.</p>
                        </li>
                        <li>
                            <input type="text" class="w-100  name" placeholder="이름" name="name" >
                            <p class="alerttext d-n name-p">이름이 비여있습니다.</p>
                        </li>
                        <li>
                            <input type="password" class="w-100  password" placeholder="비밀번호" name="password" >
                            <p class="alerttext d-n password-p">영문,특문,숫자가 들어가야합니다.</p>
                        </li>
                        <li>
                            <input type="password" class="w-100  passwordc" placeholder="비밀번호확인" name="passwordc" >
                            <p class="alerttext d-n passwordc-p">비밀번호와 일치하지 않습니다.</p>
                        </li>
                        <li>
                            <button class="reg">회원가입</button>
                        </li>
                    </form>
                </div>
            </div>
        </section>

        <script src="/js/register.js"></script>