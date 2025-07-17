// 로그인 버튼 클릭 이벤트
document.querySelector('.login-btn').addEventListener('click', function() {
    // 로그인 기능은 추후 구현
    alert('로그인 기능은 현재 준비중입니다.');
});

// 캐러셀 기능 구현
document.addEventListener('DOMContentLoaded', function() {
    // 캐러셀 요소들 가져오기
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentSlide = 0; // 현재 슬라이드 인덱스
    const slideCount = slides.length; // 전체 슬라이드 개수
    
    // 첫 번째 슬라이드 보이게 하기
    slides[0].classList.add('active');
    
    // 다음 슬라이드로 이동하는 함수
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slideCount;
        slides[currentSlide].classList.add('active');
    }
    
    // 이전 슬라이드로 이동하는 함수
    function prevSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        slides[currentSlide].classList.add('active');
    }
    
    // 버튼 클릭 이벤트
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // 자동 슬라이드 설정 (5초마다)
    setInterval(nextSlide, 5000);
});

// 더보기 버튼 기능 구현
document.addEventListener('DOMContentLoaded', function() {
    // 모든 더보기 버튼에 이벤트 리스너 추가
    const moreButtons = document.querySelectorAll('.more-btn');
    
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 버튼의 부모 요소에서 more-content를 찾음
            const moreContent = this.parentElement.querySelector('.more-content');
            
            // more-content의 표시 상태를 토글
            if (moreContent.classList.contains('hidden')) {
                moreContent.classList.remove('hidden');
                this.textContent = '접기';
            } else {
                moreContent.classList.add('hidden');
                this.textContent = '더보기';
            }
        });
    });
}); 

// 사장님 인사말 더보기/닫기 버튼 기능
// DOM이 모두 로드된 후 실행
window.addEventListener('DOMContentLoaded', function() {
    // 더보기 버튼과 닫기 버튼, 텍스트 영역을 찾음
    const moreBtn = document.querySelector('.greeting-more-btn');
    const closeBtn = document.querySelector('.greeting-close-btn');
    const shortText = document.querySelector('.greeting-text.short');
    const fullText = document.querySelector('.greeting-text.full');

    if (moreBtn && closeBtn && shortText && fullText) {
        // 더보기 버튼 클릭 시 전체 인사말 표시
        moreBtn.addEventListener('click', function() {
            shortText.classList.add('hidden');
            fullText.classList.remove('hidden');
            moreBtn.classList.add('hidden');
            closeBtn.classList.remove('hidden');
        });
        // 닫기 버튼 클릭 시 4줄만 보이게
        closeBtn.addEventListener('click', function() {
            shortText.classList.remove('hidden');
            fullText.classList.add('hidden');
            moreBtn.classList.remove('hidden');
            closeBtn.classList.add('hidden');
        });
    }
}); 