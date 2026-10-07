# AI_CODING_GUIDE.md

## 1. 목적

이 문서는 `JJinMangGo/firstClass` 저장소에서 AI가 기존 버거킹 로그인 UI 코드를 기준으로 새로운 화면이나 다른 브랜드 로그인 UI를 만들 때 따라야 할 코딩 기준이다.

핵심 목표는 다음과 같다.

- 기존 HTML 구조와 CSS 작성 방식을 먼저 이해한다.
- 기존 코드를 무시하고 전체를 새로 작성하지 않는다.
- 화면 모양이 아니라 콘텐츠의 의미를 기준으로 HTML을 작성한다.
- 현재 프로젝트의 폴더 구조, 파일 경로, 폰트, reset CSS를 유지한다.
- React, Tailwind, Bootstrap 등의 새로운 프레임워크를 임의로 추가하지 않는다.
- 학생이 HTML/CSS 기본 원리를 이해할 수 있는 수준의 코드로 작성한다.
- 다른 브랜드 UI를 만들 때는 버거킹 코드를 복사하는 것이 아니라 **공통 구조와 브랜드별 차이**를 구분한다.

---

## 2. 현재 프로젝트 구조

현재 저장소의 주요 구조는 다음과 같다.

```text
firstClass/
├─ index.html
├─ css/
│  └─ default.css
├─ font/
│  ├─ BKBulMatPro-Bold.woff
│  ├─ PretendardVariable.woff2
│  ├─ SDGothicNeoRound-eMd.woff
│  ├─ SDGothicNeoRound-gBd.woff
│  ├─ SDGothicNeoRound-hEb.woff
│  └─ css/
└─ bergerking/
   ├─ login.html
   └─ img/
      ├─ back_icon.svg
      ├─ close_icon.svg
      ├─ cancle_icon.svg
      ├─ eye_icon.svg
      ├─ checkBox_active.svg
      ├─ checkBox_disabled.svg
      ├─ check_large_inactive.svg
      ├─ check_large_on.svg
      ├─ check_small_icon.svg
      ├─ kakao_logo_icon.svg
      ├─ naver_logo_icon.svg
      ├─ apple_logo_icon.svg
      ├─ samsung_logo_icon.svg
      ├─ right_icon.svg
      └─ illust_bg.png
```

### 경로 기준

버거킹 화면에서는 다음과 같이 공통 파일을 불러온다.

```html
<link rel="stylesheet" href="../font/css/pretendardvariable.css">
<link rel="stylesheet" href="../font/css/bkbulmatpro.css">
<link rel="stylesheet" href="../font/css/sdgothicneo.css">
<link rel="stylesheet" href="../css/default.css">
```

브랜드별 이미지 경로는 해당 브랜드 폴더 내부의 `img/`를 기준으로 한다.

```css
background: url(img/back_icon.svg) no-repeat center / auto;
```

새 화면을 만들기 전에 반드시 **현재 HTML 파일 위치를 기준으로 상대경로가 맞는지 먼저 확인한다.**

---

## 3. AI가 작업하기 전에 반드시 확인할 것

새 화면을 작성하거나 기존 화면을 수정하기 전에 다음 순서로 확인한다.

1. 현재 작업 파일의 위치를 확인한다.
2. 연결된 `default.css`와 폰트 CSS 경로를 확인한다.
3. 기존 브랜드 폴더의 `img/`에 필요한 이미지가 있는지 확인한다.
4. 기존 HTML의 `header`, `main`, `form`, `fieldset` 구조를 먼저 읽는다.
5. 기존 CSS의 변수명과 클래스명을 확인한다.
6. 기존 코드로 해결할 수 있는 부분인지 먼저 판단한다.
7. 전체 코드를 새로 작성하기 전에 수정하거나 재사용할 수 있는 부분을 찾는다.

AI는 기존 코드를 확인하지 않은 상태에서 임의의 구조나 라이브러리를 먼저 제안하지 않는다.

---

## 4. 현재 버거킹 로그인 HTML 구조

버거킹 로그인 화면의 큰 구조는 다음 흐름을 가진다.

```html
<div id="wrap">
    <header>
        <h1>로그인</h1>
        <button class="prev_btn">
            <span class="sr-only">이전버튼</span>
        </button>
    </header>

    <main>
        <h2 class="title">
            <span>안녕하세요:)</span>
            <span>버거킹입니다.</span>
        </h2>

        <form>
            <fieldset>
                <legend class="sr-only">로그인화면</legend>

                <label for="email" class="email">이메일 로그인</label>

                <div class="input_box">
                    <input type="email">
                </div>

                <div class="input_box rela">
                    <input type="password">
                    <button type="button" class="pw_btn">
                        <span class="sr-only">비밀번호 보기</span>
                    </button>
                </div>

                <div class="login_option">
                    ...
                </div>

                <button type="submit" class="login_btn">로그인</button>
            </fieldset>
        </form>

        <div class="login_link">
            ...
        </div>

        <div class="sns_login">
            <p>SNS으로 간편하게 로그인</p>
            <div class="sns_list">
                ...
            </div>
        </div>
    </main>
</div>
```

이 구조를 절대적인 로그인 페이지 정답으로 외우지 않는다.

새 브랜드 화면에서도 실제 콘텐츠의 의미를 먼저 확인한 뒤 다음 요소 중 필요한 것만 사용한다.

---

## 5. HTML 시멘틱 마크업 기준

### 5-1. 태그는 디자인 모양이 아니라 의미로 선택한다

- 페이지 상단 영역 → `header`
- 페이지 핵심 콘텐츠 → `main`
- 페이지를 대표하는 제목 → `h1`
- 주요 콘텐츠 제목 → `h2`
- 입력/전송 기능 → `form`
- 관련된 폼 입력 그룹 → `fieldset`
- 폼 그룹 제목 → `legend`
- 입력값 이름 → `label`
- 실행 기능 → `button`
- 다른 페이지로 이동 → `a`
- 의미 없는 레이아웃 그룹 → `div`
- 같은 성격의 반복 정보가 실제 목록이면 → `ul > li`

단순히 화면에서 박스로 보인다고 `section`을 사용하지 않는다.

---

### 5-2. 제목 구조

현재 버거킹 로그인 화면에서는:

```html
<h1>로그인</h1>
<h2 class="title">...</h2>
```

구조를 사용한다.

새 화면에서도 제목 크기가 아니라 문서 구조를 기준으로 한다.

예를 들어 비밀번호 재설정 화면이라면 페이지 대표 제목은:

```html
<h1>비밀번호 재설정</h1>
```

이며, 화면 안의 주요 작업 제목은 필요에 따라 `h2`가 될 수 있다.

---

### 5-3. form 구조

로그인과 같이 하나의 입력 목적을 가진 영역은 기본적으로 다음 구조를 검토한다.

```html
<form action="">
    <fieldset>
        <legend class="sr-only">로그인화면</legend>
        ...
    </fieldset>
</form>
```

`fieldset`은 디자인 박스가 아니라 **서로 관련된 폼 요소를 하나의 그룹으로 묶을 때** 사용한다.

`legend`를 화면에 보여주지 않아도 문서 구조와 접근성을 위해 유지할 수 있으며 이 프로젝트에서는 `.sr-only`를 사용한다.

---

### 5-4. input과 label

가능하면 입력 요소에는 `label`을 연결한다.

```html
<label for="email" class="email">이메일 로그인</label>
<input type="email" id="email" name="email">
```

`placeholder`는 입력 예시나 안내이며 `label`의 역할을 완전히 대신하지 않는다.

화면 디자인상 label이 보이지 않아야 한다면 다음과 같이 사용할 수 있다.

```html
<label for="password" class="sr-only">비밀번호</label>
<input type="password" id="password" name="password">
```

---

### 5-5. button과 a를 구분한다

기능을 실행하면 `button`을 사용한다.

```html
<button type="button">비밀번호 보기</button>
<button type="submit">로그인</button>
```

다른 페이지나 화면으로 이동하면 `a`를 사용한다.

```html
<a href="#">아이디 찾기</a>
<a href="#">비밀번호 재설정</a>
<a href="#">회원가입</a>
```

디자인이 버튼처럼 보여도 이동 기능이라면 무조건 `button`으로 바꾸지 않는다.

---

### 5-6. 접근성을 위한 숨김 텍스트

아이콘만 보이는 버튼이나 링크에는 의미를 전달할 텍스트를 남긴다.

현재 프로젝트의 `default.css`에는 `.sr-only`가 정의되어 있다.

```html
<button class="prev_btn">
    <span class="sr-only">이전버튼</span>
</button>
```

```html
<a href="#">
    <span class="sr-only">카카오로그인</span>
</a>
```

아이콘만 있다고 텍스트를 완전히 삭제하지 않는다.

---

## 6. CSS 기본 작성 방식

### 6-1. reset은 기존 `default.css`를 사용한다

현재 프로젝트의 `css/default.css`에는 다음 공통 설정이 포함되어 있다.

- `box-sizing: border-box`
- margin / padding 초기화
- 리스트 기본 스타일 제거
- 링크 기본 스타일 제거
- 이미지 기본 설정
- form 요소 기본 스타일 초기화
- iOS 기본 스타일 제거
- `focus-visible`
- `.sr-only`
- `prefers-reduced-motion`
- touch / tap 대응
- `fieldset`, `legend` 초기화

새 브랜드 화면을 만들 때 같은 내용을 페이지 CSS에 다시 작성하지 않는다.

특별한 이유가 없다면 `default.css` 자체도 화면별 작업을 위해 임의로 수정하지 않는다.

---

## 7. CSS 변수 사용 방식

버거킹 화면은 브랜드 관련 값을 `:root` 변수로 먼저 정의한다.

```css
:root {
    --font: "Sandoll GothicNeoRound", sans-serif;
    --font-pre: "Pretendard Variable", sans-serif;
    --font-BKR: "BKR", sans-serif;

    --primary: #512314;
    --focus: #D62302;
    --baseBorder: #D9CFC6;
    --inputBg: #FFFCF9;
    --errorColor: #C54734;
    --placeholder: #EBE6E2;
    --text: #766053;
    --bg: #F4EBDC;
    --button: #E9DDCD;
}
```

새 브랜드 UI에서는 이 방식을 유지하되 **버거킹 색상을 그대로 사용하지 않는다.**

예:

```css
:root {
    --font: ...;
    --primary: ...;
    --focus: ...;
    --baseBorder: ...;
    --inputBg: ...;
    --placeholder: ...;
    --text: ...;
    --bg: ...;
    --button: ...;
}
```

필요 없는 변수는 억지로 만들지 않고, 브랜드 화면에서 반복해서 사용하는 값 중심으로 정의한다.

---

## 8. 글자 크기 단위

현재 버거킹 화면은 다음 기준을 사용한다.

```css
html {
    font-size: 62.5%;
}
```

따라서:

```css
font-size: 1.6rem;
```

은 기본적으로 16px에 해당한다.

새 화면에서도 특별한 이유가 없다면 기존 `rem` 사용 방식을 유지한다.

---

## 9. 기본 레이아웃 기준

현재 `#wrap`은 다음 방식이다.

```css
#wrap {
    width: 100%;
    max-width: 1024px;
    min-width: 360px;
    min-height: 100dvh;
    margin: 0 auto;
}
```

이 구조의 의미:

- 기본 너비는 화면 전체
- 너무 커지면 `1024px`에서 제한
- 현재 수업 예제의 최소 기준은 `360px`
- 화면 높이는 최소 `100dvh`
- 데스크톱에서는 가운데 배치

새 브랜드 화면에서도 동일한 수업용 화면 범위를 사용할 경우 이 구조를 우선 재사용한다.

디자인 요구가 다를 때만 변경하고 변경 이유를 설명한다.

---

## 10. header 작성 방식

현재 header는 Flex를 이용해 제목을 가운데 배치하고, 이전 버튼은 absolute로 배치한다.

```css
header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
}

.prev_btn {
    position: absolute;
    left: 0;
    width: 48px;
    height: 48px;
}
```

이 방식을 사용하는 이유는:

- 제목은 header 기준 정중앙
- 이전 버튼 위치 때문에 제목 중앙이 밀리지 않음

새 화면에 뒤로가기, 닫기 등의 버튼이 있다면 같은 구조를 우선 검토한다.

버튼이 오른쪽에 있다면 필요에 따라 `right: 0`을 사용할 수 있다.

---

## 11. 입력창 작성 방식

현재 공통 입력창 스타일:

```css
input[type="email"],
input[type="password"] {
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border-radius: 10px;
}
```

비밀번호 보기 버튼처럼 input 내부 오른쪽에 기능이 필요하면 부모 박스에 위치 기준을 만든다.

```css
.input_box.rela {
    position: relative;
}

.pw_btn {
    position: absolute;
    right: 20px;
    bottom: 12px;
}
```

새 화면에서도 먼저 기존 `.input_box` 패턴을 재사용할 수 있는지 확인한다.

단, 새 화면에 에러, 성공, focus 등의 상태가 추가된다면 상태를 표현할 클래스나 속성을 별도로 설계한다.

---

## 12. 체크박스 작성 방식

현재 체크박스는 실제 checkbox 요소를 유지하면서 화면에서는 숨긴다.

```html
<label>
    <input type="checkbox" class="check sr-only" checked>
    <span>자동 로그인</span>
</label>
```

시각적 체크박스 이미지는 CSS로 표현한다.

```css
.login_option .check + span::before {
    content: "";
    width: 30px;
    height: 30px;
    background: url(img/checkBox_disabled.svg) no-repeat center / contain;
}

.login_option .check:checked + span::before {
    background-image: url(img/checkBox_active.svg);
}
```

새 브랜드에서도 커스텀 체크박스를 만들 때 실제 `input`을 제거하고 `div`만으로 만들지 않는다.

---

## 13. 아이콘과 이미지 사용

현재 프로젝트는 아이콘을 `bergerking/img/`에 SVG 파일로 저장하고 CSS background-image로 주로 사용한다.

예:

```css
background: url(img/eye_icon.svg) no-repeat center / 26px;
```

AI는:

- 기존 파일이 있으면 먼저 재사용한다.
- 같은 아이콘을 CSS나 SVG 코드로 다시 그리지 않는다.
- 이미지 파일명을 임의로 바꾸지 않는다.
- 브랜드별 이미지가 다르면 해당 브랜드의 `img/` 폴더를 만든다.
- 이미지 경로를 작성하기 전에 HTML 파일 위치를 확인한다.

---

## 14. 클래스 네이밍

현재 코드에서는 다음과 같은 snake_case 형태를 사용한다.

```text
prev_btn
input_box
pw_btn
login_option
login_btn
login_link
sns_login
sns_list
```

새 코드도 기존 스타일과 맞추기 위해 기본적으로 snake_case를 사용한다.

새 클래스를 만들 때는 디자인 모양보다 역할을 알 수 있는 이름을 우선한다.

권장:

```text
password_notice
password_rule
close_btn
submit_btn
```

피하는 예:

```text
red_box
left_text
big_font
box1
box2
```

---

## 15. 다른 브랜드 로그인 UI를 만들 때

버거킹 로그인 UI를 그대로 복제해서 색만 바꾸지 않는다.

먼저 아래 두 종류로 구분한다.

### 공통으로 유지할 수 있는 부분

- `header`
- 페이지 대표 `h1`
- `main`
- `form`
- `fieldset`
- `legend`
- `label`
- `input`
- 로그인 실행 `button`
- 아이디 찾기 / 비밀번호 찾기 / 회원가입 링크
- 접근성용 `.sr-only`
- `default.css`
- 입력창 기본 구조

### 브랜드마다 달라질 수 있는 부분

- 브랜드 폰트
- 색상
- 배경색
- 버튼 모양
- border-radius
- 타이틀 문구
- SNS 로그인 종류
- 로고와 아이콘
- 화면 여백
- 입력 방식
- 체크박스 옵션
- 로그인 관련 부가기능
- 콘텐츠 순서

AI는 새 디자인을 확인한 뒤 **HTML까지 바뀌어야 하는 차이인지, CSS만 바꾸면 되는 차이인지 먼저 판단한다.**

---

## 16. 새 브랜드 폴더 권장 구조

새 브랜드를 추가한다면 현재 구조를 참고해 다음과 같이 구성한다.

```text
firstClass/
├─ css/
│  └─ default.css
├─ font/
├─ bergerking/
│  ├─ login.html
│  └─ img/
└─ brand-name/
   ├─ login.html
   └─ img/
```

브랜드명이 여러 단어라면 프로젝트에서 정한 폴더명 규칙을 유지한다.

공통 CSS는 `css/default.css`를 사용하고, 브랜드 전용 스타일은 우선 해당 HTML 또는 이후 필요에 따라 브랜드별 CSS로 분리한다.

현재 프로젝트는 버거킹 전용 스타일을 `login.html`의 `<style>` 내부에 작성하고 있으므로, 새 화면도 수업 단계에서는 같은 방식을 우선한다.

---

## 17. 새 화면 작성 순서

AI는 다음 순서로 작업한다.

### 1단계. 화면 분석

먼저 화면을 보고 다음을 찾는다.

- 페이지 제목
- 주요 콘텐츠 제목
- 입력 항목
- 실행 버튼
- 이동 링크
- 반복 콘텐츠
- 설명 문구
- 단순 레이아웃용 박스

### 2단계. 기존 코드와 비교

버거킹 로그인 코드와 비교하여:

- 그대로 재사용 가능한 구조
- 일부 수정이 필요한 구조
- 새로 추가해야 하는 구조

를 구분한다.

### 3단계. HTML 작성

HTML은 디자인보다 의미를 먼저 결정한다.

### 4단계. CSS 작성

기존 변수, 단위, 레이아웃 패턴, reset을 최대한 재사용한다.

### 5단계. 반응형 확인

최소한 다음 폭에서 레이아웃이 무너지지 않는지 확인한다.

- 360px
- 일반 모바일
- 태블릿 / 넓은 화면
- `max-width: 1024px`

### 6단계. 접근성 확인

- `h1` 존재 여부
- 제목 계층
- label 연결
- 아이콘 버튼의 숨김 텍스트
- 키보드 focus
- 실제 checkbox 유지
- button / a 구분

---

## 18. AI가 하면 안 되는 것

다음 행동은 사용자가 명시적으로 요청하지 않는 한 하지 않는다.

- 기존 HTML 전체를 이유 없이 새로 작성
- React로 변환
- Vue로 변환
- Tailwind CSS 추가
- Bootstrap 추가
- npm 패키지 추가
- 기존 `default.css`를 대규모 수정
- 이미지 파일을 무시하고 임의 SVG 생성
- 의미 없는 모든 박스를 `section`으로 변경
- 모든 반복 콘텐츠를 무조건 `ul > li`로 변경
- 디자인 크기만 보고 `h1`, `h2`, `h3` 결정
- `div`만으로 버튼, 링크, 체크박스를 흉내 냄
- 접근성 텍스트 삭제
- 현재 폴더 구조를 확인하지 않고 경로 작성
- 현재 학생 수준보다 지나치게 복잡한 JavaScript나 라이브러리 사용

---

## 19. 기존 코드를 수정할 때 답변 방식

AI는 바로 완성 코드를 던지지 않고 먼저 다음 순서로 설명한다.

1. **잘 작성한 부분**
2. **다시 생각해야 하는 부분**
3. **수정이 필요한 이유**
4. **수정할 위치와 힌트**
5. **필요한 경우에만 수정 코드**

오류가 발생했다면 코드만 보지 않고 다음도 확인한다.

- 파일 저장 여부
- 파일 경로
- CSS 연결
- 이미지 경로
- Live Server
- 브라우저 캐시
- VS Code 환경
- Extension 문제

---

## 20. 현재 코드에서 그대로 복제하지 말아야 할 부분

현재 코드를 기준으로 작업하되 다음은 **현재 구현 상태**와 **앞으로 권장할 기준**을 구분한다.

### `html lang`

현재 `bergerking/login.html`은:

```html
<html lang="en">
```

으로 되어 있지만 실제 페이지 콘텐츠는 한국어다.

새 한국어 화면을 만들 때는 다음을 기본으로 한다.

```html
<html lang="ko">
```

이것은 기존 레이아웃 구조를 바꾸는 것이 아니라 문서 언어를 실제 콘텐츠와 맞추는 것이다.

### 비밀번호 label

현재 비밀번호 input은 placeholder로 안내하고 별도의 label이 없다.

새 화면에서는 가능하면 명시적인 label을 연결한다.

화면에 보이지 않아야 할 경우 `.sr-only`를 사용한다.

### 비활성 버튼

현재 `.login_btn`은:

```css
opacity: 0.2;
```

로 비활성처럼 표현되어 있지만 HTML에 `disabled` 속성은 없다.

실제 기능까지 구현하는 화면에서 버튼이 비활성 상태라면:

```html
<button type="submit" disabled>로그인</button>
```

과 같이 실제 상태도 함께 표현하고 `:disabled` 스타일을 사용하는 것을 우선 검토한다.

단, 수업에서 단순 UI 시안을 구현하는 단계라면 현재 화면 상태와 수업 범위에 맞춰 판단한다.

---

## 21. AI 작업용 핵심 요약

AI가 이 저장소에서 새 화면을 만들 때 가장 먼저 기억할 규칙:

```text
기존 코드 읽기
→ 파일 경로 확인
→ 콘텐츠 의미 분석
→ 기존 HTML 구조 재사용 가능 여부 판단
→ 필요한 부분만 추가/수정
→ 기존 default.css 유지
→ 브랜드 값은 CSS 변수로 정리
→ 접근성 유지
→ 반응형 확인
→ 불필요한 라이브러리 사용 금지
```

이 프로젝트의 목표는 AI가 대신 코드를 완성하는 것이 아니라, 기존 코드와 디자인의 관계를 이해하고 **왜 그 HTML과 CSS가 필요한지 설명할 수 있는 코드**를 만드는 것이다.
