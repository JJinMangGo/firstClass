# 교촌치킨 리뉴얼 — Design Guide

> 근거: `index.html`, `css/main.css`, 공용 `../css/default.css` (2026-11-02 기준). 이 문서는 **현재 구현된 히어로 슬라이더**를 기준으로 한다. 완료되지 않은 메인 섹션이나 GNB·Footer의 디자인은 추정하지 않는다. **기존 HTML/CSS/JS를 변경하지 않는다.**

## 1. Project Overview
- 프로젝트: 교촌치킨 리뉴얼 포트폴리오. 브랜드 소개와 정보 탐색을 위한 웹사이트의 메인 제작 중.
- 현재 실제 구현: PC·모바일용 이미지 2장씩을 사용하는 Hero Swiper, 진행 바, 현재/전체 슬라이드 숫자, 이전/다음 버튼.
- 서브페이지 목표: 동일한 브랜드 컬러·폰트·탐색 구조를 공유하되 콘텐츠 유형에 맞는 구성. 현재 없는 본문/카드/CTA는 구현 시 별도 설계 및 검증.

## 2. Brand Identity
- 원본 브랜드 기준으로 주석/변수에 명시된 노랑 `#F8B915`과 검정 `#020000`의 조합.
- 기존 히어로는 이미지 중심이고 조작부는 검정 선·텍스트로 절제해 표현.
- *구현 상태에 관한 주의*: 현재 `body { background-color: yellow }`, 모바일 `header { background-color: orange }`는 **실제 하드코딩된 CSS**다. 이를 공식 브랜드 토큰으로 해석하거나 서브페이지에 복제하지 않는다.

## 3. Design Principles
1. Primitive 토큰과 의미별 Semantic 토큰을 구분한다. 새 서브페이지에서는 `--text-primary`, `--bg-default` 등 의미 토큰을 우선 사용한다.
2. 콘텐츠 위계: 이미지에서 핵심 정보를 보여주고 컨트롤은 조작 가능한 보조 영역으로 배치한다.
3. 기존의 화면 크기 분기와 자산 경로를 지킨다. 미완성 구성 요소를 완료된 디자인인 것처럼 생성하지 않는다.
4. 접근성: 아이콘 전용 버튼에는 설명용 `aria-label`; 키보드 포커스를 명확히 표시한다.

## 4. Color System
`css/main.css :root`에 **실제 정의된** Primitive:
| 변수 | 값 | 뜻 |
|---|---|---|
| `--brand-yellow` | `#F8B915` | 브랜드 노랑 |
| `--brand-black` | `#020000` | 브랜드 검정 |
| `--yellow-soft` | `#FFF0C2` | 연한 노랑 |
| `--neutral-ivory` | `#FFFDF5` | 아이보리 |
| `--neutral-white` | `#FFFFFF` | 흰색 |
| `--neutral-charcoal` | `#333333` | 보조 텍스트 |
| `--neutral-gray` | `#707070` | 약한 텍스트 |
| `--neutral-border` | `#707070` | 테두리 |

Semantic 매핑:
- 배경: `--bg-default → --neutral-white`, `--bg-subtle → --neutral-ivory`, `--bg-accent → --yellow-soft`.
- 표면: `--surface-default → --neutral-white`.
- 텍스트: `--text-primary → --brand-black`, `--text-secondary → --neutral-charcoal`, `--text-muted → --neutral-gray`.
- 테두리: `--border-default → --neutral-border`.
- 행동: `--action-primary → --brand-yellow`, `--action-text → --brand-black`, `--accent-primary → --brand-yellow`.
- **실제 적용과 선언 구분**: 히어로 컨트롤은 `#020000` 직접 지정, 진행 트랙은 `rgba(2,0,0,.2)`; 위 의미 토큰 중 상당수는 아직 UI에 소비되지 않는다. 임의 컬러 추가 금지.

## 5. Typography
- `--font-primary: "Pretendard Variable", sans-serif`; `../font/css/pretendardvariable.css` 로드, body에 적용.
- 히어로 분수형 페이지 번호: `16px / 700 / line-height:1`, 모바일(≤1024px) `13px`.
- 상단 헤더·본문 제목·카드의 고정 타입 스케일은 **미구현**. 서브페이지에서 기존 값인 척 숫자를 만들지 말고 디자인 시안 확정 후 추가한다.
- 공용 reset의 본문 기본 행간 `1.5`; 제목/문단은 `word-break: keep-all`.

## 6. Layout & Spacing
- `#wrap > header + main + footer`, 본문 안 `.hero-sec > .swiper.visual`.
- 히어로: `width:100%`, 데스크톱 `height:510px`, 이미지는 `width/height:100%`, `object-fit:cover`.
- 조작부 `.hero-controls`: absolute, 중앙 `left:50%` 및 `translateX(-50%)`, 아래 `15px`; `width:calc(100% - 200px)`, `max-width:1720px`, `display:flex`, `gap:20px`.
- 조작부 진행 바는 flex로 가변 폭, pagination과 내비는 고정 폭. 화살표 묶음 `gap:20px`.
- **1720px은 히어로 컨트롤의 최대 너비**이지 일반 콘텐츠 컨테이너 규격이 아니다. 다른 컨테이너/그리드 기준은 미정.

## 7. Components
- **Header**: 현재 텍스트 `제목공간`만 있음. 로고/GNB/드롭다운 규격 없음.
- **Hero carousel**: `swiper visual` + `swiper-wrapper` + `swiper-slide`; PC `img.pc`, 모바일 `img.mo`; `.hero-controls`에 scrollbar/pagination/navigation.
- **Hero pagination**: 01/02 형식, 구분자는 `../img/line.svg`; 조작부 숫자 사이 간격 12px.
- **Nav arrows**: 버튼 24×32px, ::after 7×12px 이미지 `swiper_prev.png`/`swiper_next.png`.
- **Footer**: 현재 `©` 표시만 있음. 링크 묶음, 정책, 기업정보 구성 없음.
- 카드·일반 CTA·링크·GNB는 현재 **정의되지 않음**. 서브페이지에 추가 시 기존 브랜드 토큰과 작업 목적에 맞게 확장하되 새 규격을 '실측'이라고 표기하지 않는다.
- **링크 정책**: 제작할 페이지의 내부 링크는 이 프로젝트 내부 상대경로만 사용. 기존 브랜드 공식 사이트 URL로 연결하지 않음. 미제작 페이지는 실제 작동하는 경로로 착각하게 하지 말고 비활성/명시적 미구현 처리.

## 8. Interaction
- Swiper: 가로 방향, `loop:true`, fraction pagination, navigation buttons, 스크롤바 `draggable:true`, `snapOnRelease:true`.
- 키보드 `.hero-navigation button:focus-visible`: `2px solid #020000`, `outline-offset:3px`.
- hover/active transition은 현재 별도로 구현하지 않았다. 없는 효과를 필수 규칙으로 단정 금지.
- 공용 reset `:focus-visible`은 2px currentColor, reduce-motion을 반영.

## 9. Responsive Rules
- 분기: `@media(max-width:1024px)`.
- PC `.pc` 숨김 / 모바일 `.mo` 표시; 히어로 `height:100dvh`.
- 모바일 header: fixed, width 100%, height 60px, z-index 10, **현재 배경 orange는 임시 CSS 값**.
- 모바일 hero-controls: bottom 30px, width calc(100% - 40px), gap 14px. pagination 13px / gap 8px, navigation gap 8px.
- 1024px 이외의 브레이크포인트와 전역 콘텐츠 그리드는 미정.

## 10. Do & Don't
**Do**: 기존 토큰명 재사용; 메인 HTML/JS/Swiper 동작 보존; PC/모바일 자산 분리; 포커스 유지; 내부 상대 링크 사용; 설계되지 않은 구성은 '미정' 기록.
**Don't**: `yellow`/`orange`를 브랜드 공식 컬러로 기록; 1720px을 본문 너비로 오인; GNB/Footer/카드 디자인 창작 후 '기존 규칙'이라 주장; 임의 폰트/크기/애니메이션을 기존값으로 둔갑; 공식 교촌 사이트로 링크 연결; 기존 메인페이지를 수정.
