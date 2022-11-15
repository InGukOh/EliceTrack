const { Schema } = require('mongoose');

//2. 게시글 데이터에 대한 모델을 작성합니다.
//게시글 제목, 게시글 내용, 작성자 의 테이블을 생성하세요.

//풀이3) short-id.js 불러오기
const shortId = require('./types/short-id');

//풀이2) 스키마 정의 = 모델 작성
const PostSchema = new Schema({
 shortId, //풀이4) shortId 속성 추가
 title: String,
 content: String,
 author: String
});

module.exports = PostSchema;