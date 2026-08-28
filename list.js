// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
// 색상(data-color) 선택 후 사이즈(data-size) 활성화 구조, 그 전엔 사이즈 비활성화
// .opt_result 색상, 사이즈를 모두 선택해야 나오는 주문 선택 영역
// .opt_result 출력 시 주문금액 0원(data-total-price) 함께 가격 변경
// #order_btn 클릭 시 '상품먼저선택' 안내 메세지 vs .opt_result 선택한 상태면 '장바구니담기완료' 메세지 출력
// .opt_result close 클릭 시 주문영역 초기화
// .opt_result minus 클릭 시 감소하며 가격 변경
// .opt_result plus 클릭 시 증가하며 가격 변경

const colorSelect = document.querySelector('#color');
const sizeSelect = document.querySelector('#size');
const totalPrice = document.querySelector('.total_price');
const order_btn = document.querySelector('#order_btn');
const opt_result = document.querySelector('.opt_result');
const result_val = opt_result.querySelector('.result');
const result_num = opt_result.querySelector('.num');
const result_price = opt_result.querySelector('.price');
const price = 39900;


//색상 선택 시 선택된 값 data 대입
colorSelect.addEventListener('change',()=>{
    colorSelect.dataset.color = colorSelect.options[colorSelect.selectedIndex].text;
    opt_y(colorSelect.dataset.color, sizeSelect.dataset.size);
})

//크기 선택 시 선택된 값 data 대입
sizeSelect.addEventListener('change',()=>{
    //(아래)DOM은 HTML 객체 변수명으로 
    //DOM.dataset.속성명 = DOM.options[DOM.selectedIndex].text;
    sizeSelect.dataset.size = sizeSelect.options[sizeSelect.selectedIndex].text;
    opt_y(colorSelect.dataset.color, sizeSelect.dataset.size);
})

opt_result.style.display = 'none';

console.log(Boolean(colorSelect.dataset.color))

function opt_y(opt1, opt2){
    
    Boolean(colorSelect.dataset.color) && Boolean(sizeSelect.dataset.size) ? (()=>{
        if(sizeSelect.selectedIndex>0 && colorSelect.selectedIndex > 0)
        opt_result.style.display = 'flex'
        result_val.textContent = `${opt1} / ${opt2}`;
        result_num.value = 1;
        result_price.textContent = price.toLocaleString('ko-kr');
        totalPrice.children[1].textContent = price.toLocaleString('ko-kr')+'원';
        order_btn.style.backgroundColor = '#00A1FF'
        return;
    })() : console.log('false');
}

