/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // 외래키 참조되는 모든 테이블 적어줄것.
  // truncate all existing tables
  // await knex.raw('TRUNCATE TABLE "user" CASCADE')

  // Deletes ALL existing entries
  await knex("industry").del();
  await knex("industry").insert([
    { industry_name: "은행" },
    { industry_name: "항공" },
    { industry_name: "자동차" },
    { industry_name: "방송 엔터" },
    { industry_name: "커머스" },
    { industry_name: "건설중공업" },
    { industry_name: "전자 기계" },
    { industry_name: "회계 컨설팅" },
    { industry_name: "에너지 화확" },
    { industry_name: "상사" },
    { industry_name: "보험" },
    { industry_name: "카드" },
    { industry_name: "증권" },
    { industry_name: "식음료" },
    { industry_name: "패션" },
    { industry_name: "리빙뷰티" },
    { industry_name: "물류" },
    { industry_name: "게임" },
    { industry_name: "호텔레저" },
    { industry_name: "IT서비스" },
    { industry_name: "제약 바이오" },
    { industry_name: "외식 체인" },
    { industry_name: "병원" },
    { industry_name: "금융" },
    { industry_name: "교육출판" },
    { industry_name: "철강" },
    { industry_name: "여행사" },
    { industry_name: "건자재" },
    { industry_name: "방산" },
    { industry_name: "반도체" },
    { industry_name: "통신" },
    { industry_name: "공기업" },
    { industry_name: "조선" },
    { industry_name: "철도" },
    { industry_name: "보안" },
    { industry_name: "전기 전선" },
    { industry_name: "영화 컨텐츠" },
    { industry_name: "광고 마케팅" },
    { industry_name: "언론 매거진" },
    { industry_name: "가구 인테리어" },
    { industry_name: "공공기관" },
    { industry_name: "대학교" },
    { industry_name: "정부 공공기관" },
  ]);
}



/************************************************************
 * 파 일 명 : dev.js
 * 설    명 : 테스트 데이터를 삽입하기 위한 seed file
 *
 * 수정일       수정자          Version      Description
 * ----------  --------------  ---------   -----------
 * 2023.03.31  정영훈           1.0         최초 생성
 * **********************************************************/
