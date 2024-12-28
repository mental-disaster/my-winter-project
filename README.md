# winter-project


## 개발환경
Bun 1.1  
Next.js 15.0


## 구동방법
1. bun i 로 필요한 패키지 설치
2. bun dev로 실행 및 주소로 접속하여 결과물 확인


## 프로젝트 구조
```
MY-WINTER-PROJECT
│
├─ src/                            # 라우팅 관련 폴더
│   ├─ app/                        # 메인페이지 및 기타 페이지 라우팅
│   │  └─ (home)/                  # 메인페이지 및 기타 페이지 라우팅
│   │      ├─ layout.tsx           # 메인페이지의 레이아웃 정의
│   │      └─ page.tsx             # 메인페이지 컴포넌트
│   ├─ globals.css                 # 전역 CSS 설정
│   └─ layout.tsx                  # RootLayout
├─ .gitignore                      # Git 무시 파일
├─ bun.lockb                       # Bun 종속성 관리 파일
├─ next-env.d.ts                   # TypeScript 정의 파일
├─ next.config.js                  # Next.js 설정 파일
├─ package.json                    # 프로젝트 종속성 정보
├─ postcss.config.mjs              # PostCSS 설정 파일
├─ README.md                       # 프로젝트 설명 파일
├─ tailwind.config.ts              # Tailwind CSS 설정 파일
└─ tsconfig.json                   # TypeScript 설정 파일
```


## 테스트
