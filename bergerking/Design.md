# 버거킹 로그인·비밀번호 재설정 — Design Guide

> 근거: `login.html` 내장 CSS, `password_reset_1.html`, `password_reset_2.html`, `password_reset.css`, 공용 reset. **이 폴더는 메인 랜딩페이지가 아니라 계정 관련 화면 3개**로 구성되어 있다. 따라서 GNB/전체 Footer 등의 사양은 확정하지 않는다. 기존 소스는 유지한다.

## 1. Project Overview
- 버거킹 계정 UI 연습/리뉴얼 포트폴리오: 로그인 및 비밀번호 재설정 (빈 상태/입력 상태) 화면.
- 목표: 앞으로 만드는 계정 관련 서브페이지의 공통 색상·타입·입력 구조·상태 표현을 일치시킨다.

## 2. Brand Identity
- 다크 브라운 `#512314`, 크림 배경 `#F4EBDC`, 둥근 폼과 둥근 주요 버튼, 친근한 제목 서체.
- 본문의 한국어는 Sandoll GothicNeoRound, 인사/강조 제목은 BKR, 부가 안내문은 Pretendard Variable.

## 3. Design Principles
1. 폼 중심의 단일열 콘텐츠와 위계(페이지명 → 인사/제목 → 폼 → 도움말/추가 탐색).
2. 입력/오류/비활성화 상태를 구분하고, 사용자가 다음 행동을 이해하도록 한다.
3. 컴포넌트 규격은 **이미 있는 계정 화면에 한해** 재사용한다. 예시 데이터나 정적 상태 화면을 실제 검증 로직으로 오인하지 않는다.
4. 외부 버거킹 공식 홈페이지로 연결하지 않는다. 내부 로컬 상대경로로만 이동.

## 4. Color System
아래 값은 `login.html`, `password_reset.css`의 동일한 `:root`에서 확인됨.
| CSS 변수 | 실제 값 | 적용/의도 |
|---|---|---|
| `--primary` | `#512314` | 본문 기본색, 메인 버튼, 링크 분리선 |
| `--focus` | `#D62302` | 선언됨; 현재 전용 focus selector에서 **실사용 확인 안 됨** |
| `--baseBorder` | `#D9CFC6` | 입력 외곽선 |
| `--inputBg` | `#FFFCF9` | 입력 배경 |
| `--errorColor` | `#C54734` | 비밀번호 조건 메시지 |
| `--placeholder` | `#EBE6E2` | 로그인 placeholder, 버튼 글자 |
| `--text` | `#766053` | 설명/약한 텍스트 |
| `--bg` | `#F4EBDC` | 전체 화면 배경 |
| `--button` | `#E9DDCD` | 정의되어 있지만 현재 실사용 불분명 |
- 추가 하드코딩: `rgba(81,35,20,.3)`은 안내 구분선. 새로운 토큰이나 색을 임의로 추가하지 않는다.

## 5. Typography
- `html{font-size:62.5%}` ⇒ 1rem=10px (기본 브라우저 16px 기준).
- `--font: "Sandoll GothicNeoRound"`: body 1.6rem(16px), 기본 브라운 텍스트.
- `--font-BKR: "BKR"`: 로그인 제목 첫 줄 2.5rem/둘째 3.5rem, 각각 line-height 1. 재설정 제목 1.8rem/2.4rem, line-height 1.
- `--font-pre: "Pretendard Variable"`: 로그인 보조 링크 1.4rem / 500, 재설정 설명 1.4rem / 500 / 행간 1.2; 오류 문구 1.4rem / 600 / 행간 1.2.
- 헤더 `h1` 2rem; 이메일/비밀번호 라벨 1.5rem/line-height 1; SNS 제목 1.3rem.
- 재설정 완료 버튼 1.6rem/800; 제목 등 명시되지 않은 font-weight는 상속/기본값을 따르므로 임의 통일 금지.

## 6. Layout & Spacing
- `#wrap`: width 100%, **max-width 1024px**, min-width 360px, min-height 100dvh, 중앙 정렬.
- `header`: flex 중앙 정렬, 높이 48px. 로그인 이전 버튼은 왼쪽 absolute 48×48px, 재설정 닫기 버튼은 오른쪽 absolute 48×48px.
- 로그인 `main`: padding `48px 20px 90px`, 인사 `.title` 세로 flex/gap 16px/margin-bottom 50px. SNS 섹션 margin-top 96px.
- 재설정 `main`: padding `34px 20px 36px`. 설명 margin-top 10px, 폼 margin-top 36px, SNS 안내 margin-top 60px (filled 81px).
- 폼 입력: 폭 100%, 높이 50px, radius 10px, 좌우 padding 기본 20px. 재설정 password는 눈 버튼 영역 확보 위해 오른쪽 50px.
- 로그인 submit 버튼 폭 100% × 높이 44px, radius 22px; 재설정 완료도 44px/radius 22px. 이 값은 계정 화면에만 확정.

## 7. Components
- **Header**: 페이지 제목과 이전/닫기 아이콘. GNB 미구현.
- **Title**: 강조 문구는 `font-BKR`, 두 줄 위계를 이용.
- **Input**: 라벨 + `.input_box` + 실제 type=email/password; 눈 아이콘 `.pw_btn`은 `type=button`.
- **Checkbox**: `.login_option .check + span::before` 이미지 아이콘, checked 시 `checkBox_active.svg`.
- **Primary Button**: `.login_btn` 또는 `.complete_btn` — 브라운, pill 형태, 명시적인 상태 적용.
- **Help Links**: `.login_link` 가로 링크/1px 분리선; SNS 링크는 45×45px 아이콘, 간격 20px.
- **Password Rules**: `.password_rule` 리스트/체크 이미지, 상태 래퍼 `.reset_page.empty` / `.filled`.
- **Footer/카드**: 현재 없음. 단일 계정 화면에서 추출할 수 없으므로 임의 구성하지 않음.
- 내부 이동: `login.html` → `password_reset_1.html` 등 실제 파일로 상대경로 연결; 이 문서 작업 자체는 HTML 링크 수정하지 않음. 기존 `href="#"`은 placeholder이며 작동 중인 경로가 아님.

## 8. Interaction
- `.complete_btn:disabled`은 `opacity:.2`, `cursor:default`; 로그인 `.login_btn`은 기본 `opacity:.2`가 하드코딩된 상태다. **로그인 버튼에 실제 disabled 속성은 없다**.
- `empty/filled` 클래스는 문서가 다른 정적인 상태 예시이지 JS 상태 검증 자동화가 아님.
- `--focus` 토큰은 선언만 되고 자체 :focus 스타일 적용되지 않음; 공용 reset `:focus-visible` 2px currentColor/offset 2px 사용.
- 눈 버튼 및 로그인 제출 관련 JS 동작은 제공된 파일에 없음. hover/active 전용 스타일도 별도 확인되지 않음. 새 페이지 구현 시 기능 검증 필요.

## 9. Responsive Rules
- 계정 컨테이너 360px~1024px 폭 규칙(360 미만에서 가로 스크롤 발생 가능).
- 비밀번호 재설정 `@media(max-width:389px)`: `.reset_desc{width:100%}`, 규칙 목록 gap 20px→14px.
- 별도 태블릿/데스크톱 레이아웃 재배치 규칙은 없음; 기존 단일열 UI 보존.

## 10. Do & Don't
**Do**: 기존 `:root` 토큰과 폰트 파일 연결; 입력 라벨과 `fieldset` 유지; 로그인/재설정 차이를 보존; 포커스 표시; 내부 상대경로 사용; 미구현 기능 명시.
**Don't**: `--focus`가 실제 포커스 UI라고 주장; 정적 filled 화면을 동작하는 검증이라 단정; 임의 색·여백 수치 창작; 브랜드 원사이트 링크 삽입; 없는 GNB/Footer/카드 규칙을 확정; 기존 로그인/재설정 파일 수정.
