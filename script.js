// ===========================
// 카드 생성 함수들
// ===========================

/**
 * 일반 카드 생성
 */
function createCard(cardData) {
    const card = document.createElement('div');
    card.className = `card ${cardData.color}`;
    
    // 카드 제목
    const title = document.createElement('div');
    title.className = 'card-title';
    title.innerHTML = `<span class="card-icon">${cardData.icon}</span> ${cardData.title}`;
    card.appendChild(title);
    
    // 칩 컨테이너
    const chipContainer = document.createElement('div');
    chipContainer.className = 'chip-container';
    
    // 링크들 추가
    cardData.links.forEach(link => {
        const chipRow = document.createElement('div');
        chipRow.className = 'chip-row';
        
        const chipBtn = document.createElement('a');
        chipBtn.href = link.url;
        chipBtn.className = 'chip-btn';
        chipBtn.target = '_top';
        chipBtn.textContent = link.text;
        
        const chipDesc = document.createElement('span');
        chipDesc.className = 'chip-desc';
        chipDesc.textContent = link.desc;
        
        chipRow.appendChild(chipBtn);
        chipRow.appendChild(chipDesc);
        chipContainer.appendChild(chipRow);
    });
    
    card.appendChild(chipContainer);
    return card;
}

/**
 * 근무 정보 카드 생성 (특별 처리)
 */
function createWorkInfoCard(workData) {
    const card = document.createElement('div');
    card.className = `card ${workData.color} ${workData.className}`;
    
    // 카드 제목
    const title = document.createElement('div');
    title.className = 'card-title';
    title.innerHTML = `<span class="card-icon">${workData.icon}</span> ${workData.title}`;
    card.appendChild(title);
    
    // 정보 그리드
    const infoGrid = document.createElement('div');
    infoGrid.className = 'info-grid';
    
    // 섹션들 추가
    workData.sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'info-section';
        
        const sectionTitle = document.createElement('h4');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.title;
        sectionDiv.appendChild(sectionTitle);
        
        const infoList = document.createElement('div');
        infoList.className = 'info-list';
        
        section.items.forEach(item => {
            const infoItem = document.createElement('div');
            if (typeof item === 'string') {
                infoItem.className = 'info-item';
                infoItem.textContent = item;
            } else if (item.isSub) {
                infoItem.className = 'info-item sub';
                infoItem.textContent = item.text;
            }
            infoList.appendChild(infoItem);
        });
        
        sectionDiv.appendChild(infoList);
        infoGrid.appendChild(sectionDiv);
    });
    
    card.appendChild(infoGrid);
    return card;
}

// ===========================
// 검색 기능
// ===========================

function filterCards() {
    const query = document.querySelector('.search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // always-visible 클래스가 있는 카드는 항상 표시
        if (card.classList.contains('always-visible')) {
            card.style.display = 'block';
            return;
        }

        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const btnTexts = [...card.querySelectorAll('.chip-btn')].map(btn => btn.textContent.toLowerCase()).join(' ');
        const descs = [...card.querySelectorAll('.chip-desc')].map(d => d.textContent.toLowerCase()).join(' ');
        const infoItems = [...card.querySelectorAll('.info-item')].map(item => item.textContent.toLowerCase()).join(' ');

        if (title.includes(query) || btnTexts.includes(query) || descs.includes(query) || infoItems.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===========================
// iframe 탈출 처리
// ===========================

function setupLinkHandlers() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('chip-btn')) {
            e.preventDefault();
            const url = e.target.href;
            
            // iframe 내부인지 확인
            if (window.self !== window.top) {
                try {
                    // 1. window.open으로 새 창 열기
                    window.open(url, '_blank');
                } catch(err) {
                    try {
                        // 2. 부모 프레임의 location 변경 시도
                        window.top.location.href = url;
                    } catch(err2) {
                        // 3. 그래도 안되면 기본 동작
                        window.location.href = url;
                    }
                }
            } else {
                // iframe 밖에서는 새 탭으로
                window.open(url, '_blank');
            }
        }
    });
}

// ===========================
// 초기화
// ===========================

function initializeDashboard() {
    const container = document.getElementById('cards');
    
    // 일반 카드들 생성
    cardsData.forEach(cardData => {
        const card = createCard(cardData);
        container.appendChild(card);
    });
    
    // 근무 정보 카드 생성
    const workInfoCard = createWorkInfoCard(workInfoData);
    container.appendChild(workInfoCard);
    
    // 링크 핸들러 설정
    setupLinkHandlers();
    
    console.log('Dashboard initialized successfully!');
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', initializeDashboard);
