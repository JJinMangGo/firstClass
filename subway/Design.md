# SUBWAY 로그인 UI — Design Guide

> 근거: `login.html`, `login.css`, `neo-brutalism.css`, `login-glass.html`, `glassmorphism.css`, 공용 reset. **이 프로젝트는 현재 로그인 페이지와 스타일 실험 2종**으로 구성된다. **기본 브랜드 디자인, Neo Brutalism, Glassmorphism은 서로 다른 모드**이며 섞지 않는다. 기존 파일은 변경하지 않는다.

## 1. Project Overview
- 모바일 중심 SUBWAY 로그인 UI 제작/디자인 스타일 변환 실습.
- `login.html`에는 현재 `neo-brutalism.css`가 기본 `login.css` **뒤에** 연결되어 있고 `body.neo-brutalism`이 적용됨.
- `login-glass.html`은 `login.css` + `glassmorphism.css` + `body.glassmorphism`을 사용.
- 스타일 적용 전 기준은 `login.css`의 기본 SUBWAY 녹색 로그인 화면. 별도의 실제 메인/서브 콘텐츠 페이지는 아직 없음.

## 2. Brand Identity
- **기본**: `#009223` 녹색 + 검정/흰색 + 밝은 회색 구획 + 직각형 입력 및 버튼, Noto Sans KR.
- **Neo Brutalism (현재 login.html)**: 굵은 검정 테두리/오프셋 그림자, 노랑 `#ffdf37`, 핑크 `#ff6b9a`, 선명한 초록 `#00a83b`; 스타일 실험이지 원 브랜드 공식 팔레트가 아님.
- **Glassmorphism (login-glass.html)**: 그라디언트 배경, 반투명 유리, blur, 둥근 폼. 기본/Neo와 혼합 금지.

## 3. Design Principles
1. 일관성은 **한 페이지에서 한 모드**를 선택함으로써 확보. 서로 다른 모드의 테두리·색·그림자를 뒤섞지 않는다.
2. 두 변형 스타일 모두 기존 HTML 구성(헤더/로그인/하단 탐색)을 우선 보존.
3. 라벨, 보조 링크, 주문 CTA, 고정 하단 탐색의 기능과 정보 우선순위를 유지.
4. 실제 페이지가 존재하는 곳으로 **프로젝트 내부 경로만 연결**; SUBWAY 브랜드 원본 사이트로 이동시키지 않는다.

## 4. Color System
`login.css :root`의 **기본** 토큰:
| 변수 | 값 | 용도 |
|---|---|---|
| `--primary` | `#009223` | 로그인 타이틀, 주요 버튼, 입력 focus 아래선 |
| `--black` | `#000000` | 본문/아이콘 검정 |
| `--label` | `#BBBBBB` | 입력 라벨 |
| `--line` | `#E5E5E5` | 입력 밑줄, 링크 구분선 |
| `--border` | `#DDDDDD` | 입력 바깥 테두리 |
| `--subText` | `#999999` | 도움말, 주문 캡션 |
| `--bg` | `#F6F6F6` | 전체 바탕 |
| `--font` | `"Noto Sans KR", sans-serif` | 기본 글꼴 |
- 기본 헤더·폼·하단 탐색·주문 CTA에 직접 `#fff` 사용.
- **Neo 변수 덮어쓰기** (선택 시에만): `--primary:#00a83b`, `--black:#111`, `--label:#111`, `--line:#111`, `--border:#111`, `--subText:#222`, `--bg:#fff7ce`. 추가 실사용: `#ffdf37` 헤더/호버/체크, `#ff6b9a` 타이틀/주문, `#d50064` 포커스.
- **Glass 변수 덮어쓰기** (선택 시에만): `--primary:#007c55`, `--black:#173c44`, `--label:#315963`, `--line:rgba(255,255,255,.65)`, `--border:rgba(255,255,255,.75)`, `--subText:#315963`, `--bg:transparent`. 배경 그라디언트 `#8fe7d4 → #b6d6ff → #e8b5e7`, 입력/포커스 핵심색 `#087f65`도 사용. 이는 기본 모드의 브랜드 컬러가 아니다.

## 5. Typography
- html 62.5% ⇒ 기준 1rem=10px, body 1.6rem, `--font:Noto Sans KR`.
- 기본 `header h1` 1.8rem/700/line-height 1; `.login_title` 3rem/900/1; 입력 label 1.4rem/700, 입력 1.7rem/700, 버튼 1.9rem/900, 보조 링크 1.3rem/700, 주문 텍스트 1rem/700.
- Neo: header h1 2rem/900, `.login_title` 3.6rem/900, 라벨 900, 보조 링크 800.
- Glass: header h1 800, `.login_title` 3.8rem (letter-spacing .09em), 아이디 저장 700. 그 외 기본 typography 상속.
- 본문 기본 line-height 1.5는 공용 reset에 명시. 그 외 개별적으로 지정되지 않은 행간을 임의 수치로 규정하지 않는다.

## 6. Layout & Spacing
- body와 `#wrap` 최소 폭 360px, `#wrap` 최대 폭 **375px**, 중앙 정렬, min-height 100dvh.
- 기본 header height 60px, 좌측 이전 버튼 40×40px(left 15/top 10), 우측 장바구니 링크 40×40px(right 15/top 10).
- main padding `34px 15px 140px`, 제목 margin-bottom 51px.
- `.input_box` 높이 95px, padding 14px 19px 17px, 필드 사이 margin-top 10px. input height 36px.
- 저장 ID margin-top 10px, 로그인 button margin-top 40px/height 60px, 보조 링크 margin-top 20px.
- 하단 `.bottom_nav` fixed, 중앙 정렬, 최대 폭 375px/높이 65px. `grid-template-columns:repeat(5,1fr)`. 가운데 주문 공간 및 위로 돌출된 `.order_link` 88×88px 원형.
- Neo 변형: header 66px, main padding-top 38px, 제목/입력/버튼 간격과 그림자를 **Neo CSS에 정의된 값으로만** 덮어씀.
- Glass 변형: main padding-top 38px, form fieldset padding 24px 18px 28px / radius 24px, 주요 반투명 카드/입력 영역 적용.

## 7. Components
- **Header**: 뒤로 가기 `.back_btn`, 현재 페이지 `h1`, 장바구니 `.shopping_link`.
- **Login**: 의미 있는 `form > fieldset > legend.sr-only`, `.input_box`마다 label과 input, `.save_id` 체크, `.login_btn` submit.
- **Help links**: `.login_links` 가로 배열, 1px 분리선(Neo에서는 2px).
- **Bottom Navigation**: `.bottom_nav` 고정, 홈/더보기/매장찾기/MY-SUB, 가운데 주문하기 `.order_link`, 현재 항목은 `aria-current="page"` 및 on 아이콘.
- **Footer/카드**: 제공 HTML에 독립 footer 및 콘텐츠 카드 없음. 상상해서 만들어낸 기존 컴포넌트는 금지.
- **CSS 레이어 순서**: font → reset → `login.css` → 선택한 **하나**의 테마 CSS. body에 대응 클래스 필수.

## 8. Interaction
- 기본 `.input_box input:focus`: 밑줄을 `--primary`로. 체크박스 `:checked + span::before`: 체크된 SVG.
- 기본 hover/active 전용 버튼 스타일은 지정되지 않음.
- Neo: 입력 `:focus-within` 배경 `#efffea` 및 초록 그림자; `:focus-visible` 2px 검정; 버튼 hover 노랑, active 아래/오른쪽 4px 이동 및 그림자 축소, `transition:120ms`; 링크/버튼 포커스 3px `#d50064`.
- Glass: 입력 `:focus-within` 밝은 표면, `:focus-visible` 2px `#087f65`; 버튼 hover `#005d50`, active `translateY(2px)`, transition `.15s`; 링크/버튼 포커스 3px `#005d50`.
- 공용 reset은 키보드 `:focus-visible` 및 `prefers-reduced-motion` 지원. 이 프로젝트 HTML에 실제 인증/화면 이동 JS는 없음.

## 9. Responsive Rules
- **모바일 고정형** 360~375px을 기준으로 함. 더 큰 뷰포트에서는 375px 컨테이너가 가운데 놓임(태블릿/데스크톱 2열 변형 없음).
- 기본 `@media(max-width:374px)`: main 좌우 padding 15px 유지, 도움말 분리선 좌우 여백 12px.
- 네오와 글래스는 별도 화면폭 브레이크포인트 추가 없이 동일한 레이아웃 기반을 유지.
- 고정 하단 탐색 때문에 main 하단 140px 공간 확보. 장래 페이지에서는 겹침 확인.

## 10. Do & Don't
**Do**: 요청된 모드 하나만 선택; 모드별 실제 값만 재사용; 기본 구조와 접근성 유지; 컴포넌트의 내부 탐색 링크는 동일 프로젝트 상대경로 연결; hover/focus/active 차이를 검증.
**Don't**: Neo/Glass 색을 SUBWAY 공식 브랜드 색이라고 쓰기; 두 테마를 동시에 적용; 미구현 footer/카드/GNB 확정; 임의의 새 토큰·크기 도입을 '추출값'이라 설명; 기존 브랜드 사이트로 이동; 기존 페이지 수정.
