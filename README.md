![header](https://capsule-render.vercel.app/api?type=waving&color=0:FFC26F,100:FFC000)

  
# 🍰 카페 인 - Cafe in 🍩

카페에 꼭 필요한 서비스 ! 메뉴 주문 및 카페 운영 관리 서비스 **Cafe-in**입니다. 🐰

**Cafe-in**의 프로젝트 진행 방식 및 과정은 [Wiki 페이지](https://github.com/Cafe-Manage-Service-CAFE-IN/cafe-in/wiki)에서 확인할 수 있습니다.

<br/>
<br/>

**[💛 Cafe-in 사용 해보기](https://cafe-in.web.app)**

- 관리자 로그인 비밀번호는 `0716`입니다.

- 모두가 접속할 수 있는 서비스이기 때문에, 불건전한 테스트는 삼가해주시길 바랍니다. 🥰



<br>
<br>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FCafe-Manage-Service-CAFE-IN&count_bg=%23fcc&title_bg=%23555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## 프로젝트 구성원 🐰

<br/>


|   [강지윤](https://github.com/eeeyooon)    |   [안유진](https://github.com/Anyudbwls)    |   [오소민](https://github.com/somin00)    |
| :----------------------------------------: | :-----------------------------------------: | :---------------------------------------: |
| ![강지윤](https://github.com/eeeyooon.png) | ![안유진](https://github.com/Anyudbwls.png) | ![오소민](https://github.com/somin00.png) |

<br/>
<br/>

## 프로젝트 개요

**💡 프로젝트 주제** : 테이블링 & 키오스트 서비스 및 카페 운영 관리 서비스

**🏃🏻‍♂️ 프로젝트 구현 기간** : 2023.07.16 ~ 2023.08.22

**🖼 디자인 시안** : [Cafe-in Figma](https://www.figma.com/file/nOaYQCWHk4QwtT78UCXp7E/%EC%B9%B4%ED%8E%98-%EC%9D%B8-%EB%94%94%EC%9E%90%EC%9D%B8?type=design&node-id=6-2&mode=design&t=HRTTTvBhBAgtHyV2-0)

<br/>
<br/>

## 기술 스택

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=ReactRouter&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat&logo=Recoil&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"/>

<br/>

## 주요 기능

### 🎈 사용자 모드

1. 메뉴조회 및 메뉴 주문
2. 포인트 적립 및 포인트 사용
3. 대기 신청

<br/>

### 🍒 관리자 모드

1. 메뉴 및 카테고리 관리
2. 대기 관리
3. 주문 관리
4. 매출 내역 조회
5. 포인트 내역 조회
6. 테마 및 색상 설정

<br/>
<br/>

## 구현 기능 
<br/>

### 📍메뉴리스트 & 선택한 메뉴리스트

- 각 메뉴 카테고리를 보여주며 사용자의 선택에 따라 바로 SelectedItemContainer에 추가합니다
- 카테고리 별로 옵션 메뉴가 뜨지 않은 것들은 따로 추가하고, 옵션이 안뜨는 아이템들을 추가시킬때 중복 검사를 통해 같은 메뉴에 추가합니다
- 사용자가 선택한 메뉴 수량을 개별로 관리 할 수 있습니다
- 사용자가 같은 메뉴 항목을 다시 선택하면, SelectedItemContainer에 중복하여 추가되지 않고 기존 항목의 수량만 증가합니다
- '전체삭제'버튼을 눌렀을때 모든 항목을 한 번에 삭제할수있습니다
- 사용자에게 현재까지 선택한 항목들의 총 금액 안내합니다
- 최종적으로 '주문하기' 버튼으로 주문 프로세스를 진행합니다
<br/>
<br/>

### 📍옵션

- 특정 메뉴 항목을 선택할 때 추가 옵션 선택을 지원합니다.
- 데이터베이스에서 관련 옵션을 동적으로 불러와 사용자에게 표시합니다.
- 선택된 옵션은 활성화 상태로 시각적으로 구분됩니다.
- 동일한 옵션을 재선택하면, 선택이 해제됩니다.
- 선택된 옵션에 따라 메뉴 항목의 최종 가격을 자동으로 계산하고 갱신합니다.
- '담기' 버튼을 통해 선택된 옵션과 함께 메뉴 항목을 주문 목록에 추가합니다.
<br/>
<br/>



### 📍주문 확인
- Firebase Firestore와의 연동을 통해 실시간 주문 정보를 데이터베이스에 저장하였습니다.
- 리코일 전역 상태를 활용하여 주문 항목 배열로 관리. 주문 추가 및 삭제 시 상태가 업데이트됩니다.
- 주문 시 사용자가 사용하려는 포인트 수량을 상태로 관리합니다.
- 사용자의 전화번호를 상태로 관리하여 주문과 관련된 기능에 활용합니다.
- 주문 완료 시, 사용자가 사용한 포인트의 총량을 상태로 업데이트합니다.

<br/>
<br/>


### 📍포인트

<b>포인트 적립</b>
- Firebase에서 핸드폰 번호 기반 포인트 정보 검색 및 업데이트합니다.
- 포인트 적립 결과 테마에 따라 다른 스타일로 바뀝니다. 
<br/>

<b>포인트 사용</b>

- 사용자는 핸드폰 번호를 입력하여 포인트를 조회할 수 있습니다.
- 핸드폰 번호를 입력하면 파이어베이스에서 해당 번호와 일치하는 포인트 정보를 가져옵니다.
- props로 전달받은 핸드폰 번호를 기반으로 남은 포인트를 표시합니다.
- 사용자는 입력하거나 '전액'버튼을 클릭하여 받은 인풋값으로 포인트를 사용하여 포인트를 차감할 수 있습니다.
- 포인트 사용 후, 파이어베이스에 남은 포인트가 업데이트됩니다.
<br/>

<b>포인트 리스트-관리자</b>
- Firebase의 'point' 컬렉션에서 날짜순으로 포인트 정보를 가져와 상태에 저장합니다
- 입련된 전화번호에 하이픈(-)을 추가해 자동변환합니다.
- 페이지네이션을 추가해 후에 추가될 정보에도 사용자가 정보를 간단하게 확인 할 수 있습니다.
<br/>
<br/>
  
![footer](https://capsule-render.vercel.app/api?section=footer&type=waving&color=0:f2ab46,100:FFC000)
