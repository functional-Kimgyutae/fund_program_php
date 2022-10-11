<section id="enrollment" class="now">
            <div class="visual">
                <div class="text">
                    <h2>펀드등록</h2>
                    <p>메인페이지 -> 펀드등록</p>
                </div>
            </div>
            <h2>펀드등록</h2>
                <form action="/enrollment" method="POST" onsubmit="return check();" class="m-a">
                    <li class="d-f">
                        <div class="textcenter w-20 h-100">펀드번호</div><div class="w-30 h-100"><input type="text" readonly class="number w-100 h-70" name="number"></div>
                        <div class="textcenter w-20 h-100">창업펀드명</div><div class="w-30 h-100"><input type="text" class="name w-100 h-70" name="name"><p class="alerttext d-n name-p">영문,한글,띄여쓰기만 가능합니다.</p></div>
                    </li>
                    <li class="d-f">
                        <div class="textcenter w-20 h-100">마감날짜</div><div class="w-30 h-100"><input type="date" class="date w-100 h-70" name="date"><p class="alerttext d-n date-p">없는 날짜입니다.</p></div>
                        <div class="textcenter w-20 h-100">마감시간</div><div class="w-30 h-100"><input type="time" class="hour w-100 h-70" name="hour" step="1"><p class="alerttext d-n hour-p">없는 시간입니다.</p></div>
                    </li>
                    <li class="d-f">
                        <div class="textcenter w-20 h-100">모집금액</div><div class="w-80 h-100"><input type="text" class="pay w-100 h-70" name="pay"><p class="alerttext d-n pay-p">자연수만 입력가능합니다.</p></div>
                    </li>
                    <li class="d-f">
                        <div class="textcenter w-20 h-100">상세설명</div><textarea name="" id="" class="w-80 h-100" maxlength="500" cols="30" rows="10"></textarea>
                    </li>
                    <li class="d-f">
                        <label for="img" class="textcenter w-20 h-100">이미지추가</label>
                        <input type="file" class="d-n" id="img">
                        <div>
                            <input type="text" readonly class="imgview w-100 h-70">
                            <p class="alerttext d-n img-p">이미지는 5byte 이하,jpg,png만 가능합니다.</p>
                        </div>
                    </li>
                    <li class="d-f" >
                        <button class="addFund">펀드등록</button>
                    </li>
                </form>
        </section>
        <script src="/js/enrollment.js"></script>