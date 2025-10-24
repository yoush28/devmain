// 카드 데이터 정의
const cardsData = [
    {
        title: "어드민",
        icon: "🔖",
        color: "green",
        links: [
            {
                text: "[KR] SOOP Admin",
                url: "https://admin.sooplive.co.kr/app/index.php",
                desc: "#[KR] 어드민, admin"
            },
            {
                text: "[GL] SOOP CMS",
                url: "https://cms.sooplive.com/login",
                desc: "#[GL] 어드민, cms"
            }
        ]
    },
    {
        title: "일정 관리",
        icon: "🔖",
        color: "blue",
        links: [
            {
                text: "배포일정",
                url: "https://soop-global.atlassian.net/projects/SOOPKR?selectedItem=com.atlassian.jira.jira-projects-plugin%3Arelease-page",
                desc: "#배포일정 #릴리즈"
            },
            {
                text: "* 배포일정(그룹웨어)",
                url: "https://",
                desc: "#배포일정 #릴리즈"
            }
        ]
    },
    {
        title: "세미나",
        icon: "🔖",
        color: "red",
        links: [
            {
                text: "모바일 본부 Tech Log",
                url: "https://soop-global.atlassian.net/wiki/spaces/sooptech/folder/209585272?atlOrigin=eyJpIjoiNzA0MDhhODhkZjJlNDQ5Mjg4MTMyYjM0NDZmYzBkN2UiLCJwIjoiYyJ9",
                desc: "#TechLog"
            },
            {
                text: "URL",
                url: "https://",
                desc: "#summary"
            }
        ]
    },
    {
        title: "필요한 정보 ( 보안 )",
        icon: "🔒",
        color: "cyan",
        links: [
            {
                text: "계정정보",
                url: "https://soop-global.atlassian.net/wiki/spaces/mdg/pages/104825646",
                desc: "#테스트 계정정보, 보안필수"
            },
            {
                text: "계정정보",
                url: "https://soop-global.atlassian.net/wiki/spaces/mdg/pages/104825646",
                desc: "#테스트 계정정보, 보안필수"
            },
            {
                text: "디바이스 보유현황",
                url: "https://soop-global.atlassian.net/wiki/spaces/mdg/pages/284525206",
                desc: "#디바이스 보유현황, device, 장비"
            }
        ]
    },
    {
        title: "Doc",
        icon: "🗄️",
        color: "purple",
        links: [
            {
                text: "서비스 로그",
                url: "https://soop-global.atlassian.net/wiki/spaces/SKD/folder/94208535?atlOrigin=eyJpIjoiZmNjZGM1ZWZhODMyNDk2OGIzNjJhZDY3YTQ4NWQxZDciLCJwIjoiYyJ9",
                desc: "#Log"
            },
            {
                text: "채팅 서버 프로토콜",
                url: "https://soop-global.atlassian.net/wiki/spaces/md/pages/263260271",
                desc: "#채팅서버 #프로토콜 #chat-server #chat"
            },
            {
                text: "URL",
                url: "https://",
                desc: "#summary"
            }
        ]
    },
    {
        title: "회의록",
        icon: "🔖",
        color: "pink",
        links: [
            {
                text: "회의록",
                url: "https://soop-global.atlassian.net/wiki/spaces/mdg/folder/232524242",
                desc: "#회의록 #작업회의 #works"
            },
            {
                text: "URL",
                url: "https://",
                desc: "#summary"
            }
        ]
    },
    {
        title: "장애대응",
        icon: "🚨",
        color: "green",
        links: [
            {
                text: "버그 리포트",
                url: "https://sotong.sooplive.co.kr/?board_type=report&work=list",
                desc: "#소통센터, 버그리포트"
            },
            {
                text: "유저 게시판",
                url: "https://sotong.sooplive.co.kr/?board_type=user&work=list",
                desc: "#소통센터, 유저게시판"
            },
            {
                text: "[KR] Firebase",
                url: "https://console.firebase.google.com/u/0/project/nowcom-afpush/crashlytics/app/android:kr.co.nowcom.mobile.afreeca/issues?hl=ko&state=all&time=7d&types=crash&tag=all&sort=eventCount",
                desc: "#Android, Google, Firebase, Crashlytics"
            },
            {
                text: "[KR] TV Firebase",
                url: "https://console.firebase.google.com/u/2/project/androidtv-3a528/crashlytics/app/android:kr.co.afreecatv.atv/issues?hl=ko&state=open&time=7d&types=crash&tag=all&sort=eventCount",
                desc: "#AndroidTV, Google, Firebase, Crashlytics"
            }
        ]
    },
    {
        title: "로그",
        icon: "📊",
        color: "blue",
        links: [
            {
                text: "SOOPerBoard",
                url: "http://sooperboard.soopinfra.prv/login",
                desc: "#SOOPerBoard"
            },
            {
                text: "키바나",
                url: "https://esadmlog.afreecatv.com/s/developer-space/login?",
                desc: "#Elastic, 로그, 대시보드"
            },
            {
                text: "키바나 - dev",
                url: "http://dev-collector-kibana.sooplive.co.kr:5601/app/discover",
                desc: "#Elastic, 개발로그, 대시보드"
            },
            {
                text: "웹 API 로그",
                url: "https://commonlog.afreecatv.com/s/developer-space/login?next=%2Fs%2Fdeveloper-space%2Fapp%2Fdiscover#/?_g=h@7352f52&_a=h@7aede7c",
                desc: "#웹로그 #webapi #웹api"
            },
            {
                text: "오픈서치",
                url: "https://log.sooplive.com/_dashboards/app/login?nextUrl=/_dashboards/app/dashboards#/list",
                desc: "#글로벌 로그, 대시보드"
            }
        ]
    },
    {
        title: "모니터링",
        icon: "🚨",
        color: "red",
        links: [
            {
                text: "UV 플랫폼 접속통계",
                url: "https://soop-global.atlassian.net/wiki/spaces/SKD/pages/99713256?force_transition=81cb256a-b759-4baf-95a8-7b7412e8faba#:~:text=%EA%B3%B5%ED%86%B5-,UV%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EC%A0%91%EC%86%8D%20%ED%86%B5%EA%B3%84,-UV%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EC%8B%A0%EA%B7%9C",
                desc: "#UV, 접속통계"
            },
            {
                text: "UV 플랫폼 신규 접속통계",
                url: "https://soop-global.atlassian.net/wiki/spaces/SKD/pages/99713256?force_transition=81cb256a-b759-4baf-95a8-7b7412e8faba#:~:text=%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EC%A0%91%EC%86%8D%20%ED%86%B5%EA%B3%84-,UV%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EC%8B%A0%EA%B7%9C%20%EC%A0%91%EC%86%8D%20%ED%86%B5%EA%B3%84,-%EC%8A%A4%ED%86%A0%EC%96%B4%EB%B3%84%20%EC%A0%90%EC%9C%A0%EC%9C%A8%20%EC%A7%80%ED%91%9C",
                desc: "#UV, 신규 접속통계"
            },
            {
                text: "스토어별 점유율",
                url: "https://soop-global.atlassian.net/wiki/spaces/SKD/pages/99713256?force_transition=81cb256a-b759-4baf-95a8-7b7412e8faba#:~:text=%EC%8B%A0%EA%B7%9C%20%EC%A0%91%EC%86%8D%20%ED%86%B5%EA%B3%84-,%EC%8A%A4%ED%86%A0%EC%96%B4%EB%B3%84%20%EC%A0%90%EC%9C%A0%EC%9C%A8%20%EC%A7%80%ED%91%9C,-%EC%9C%A0%EB%A3%8C%EA%B5%AC%EB%A7%A4%EC%9E%90%EC%88%98",
                desc: "#스토어 점유율"
            },
            {
                text: "유료 구매 지수",
                url: "https://admin.sooplive.co.kr/app/new_analysis/common_view.php?szType=uv_all_pay_user&szStartDate=2024-11-01&szDayType=d&szSel=chart",
                desc: "#유료구매지수"
            },
            {
                text: "방송 진입속도",
                url: "https://admin.sooplive.co.kr/app/new_analysis/common_view.php?szType=sys_broad_loading&szStartDate=2024-11-01&szDayType=d&szAppType=t&szSel=chart",
                desc: "#방송 진입속도"
            },
            {
                text: "버퍼링 지수",
                url: "https://admin.sooplive.co.kr/app/new_analysis/common_view.php?szType=sys_device_buffering",
                desc: "#버퍼링 지수"
            },
            {
                text: "버퍼링 지수 (VOD)",
                url: "http://admin.sooplive.co.kr/app/new_analysis/common_view.php?szType=sys_platform_vod_buffering&szSel=chart",
                desc: "#버퍼링 지수"
            },
            {
                text: "VOD 재생실패 지표",
                url: "https://admin.sooplive.co.kr/app/new_analysis/common_view.php?szType=sys_vod_play_fail&szSel=chart",
                desc: "#VOD 재생 실패"
            }
        ]
    }
];

// 근무 정보 데이터 (별도 관리)
const workInfoData = {
    title: "근무 정보 & 복리후생",
    icon: "💼",
    color: "orange",
    className: "wide-card always-visible",
    sections: [
        {
            title: "⏰ 근무 정보",
            items: [
                "• 근무시간: 시프티 유연 근무제",
                { text: "(코어타임: 11:00 ~ 16:00)", isSub: true },
                "• 점심시간: 12:30 - 13:30"
            ]
        },
        {
            title: "🏢 사내 시설",
            items: [
                "• 휴게실 (8층)",
                "• 카페테리아 (8층)",
                "• 회의실 예약: 아웃룩 일정 이용"
            ]
        },
        {
            title: "🎁 복리후생",
            items: [
                "• 도서구입비 지원",
                "• 교육비 지원",
                "• 동호회 활동비",
                "• 생일자 반차 제공",
                "• 경조사 지원",
                "• 건강검진 지원"
            ]
        }
    ]
};
