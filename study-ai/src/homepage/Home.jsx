import React, { useState } from "react";
import "./Home.css";

function Menubar(props){ // 상단바 출력하기 
    return (
        <div class="menubar">
            <nav class="menubar">
                <ul class="menubar">
                    <li>Logo</li>
                    <li><a href="">홈</a></li>
                    <li><a href="">내 학습</a></li>
                    <li><a href="">커뮤니티</a></li>
                </ul>
            </nav>
        </div>
    );
}
function Mylog (props){
    // 오늘 학습시간
    const [study_count, setStudyCount] = useState(0);
    // 오늘 자세알림 횟수 
    const [fix_count, setFixCount] = useState(0);
    return (
        <div class="mylog">
            <h3 class="block_title">
                <a href="">내 학습</a>
            </h3>
            <div>
                나의 기록
                <div> 
                    오늘 학습 시간 
                    <br></br>
                    0시간 36분 
                </div>
                <div>
                    오늘 자세알림 횟수 
                    <br></br>
                    4회
                </div>
            </div>
            <div>
                최근 학습기록
                
            </div>
        </div>

    );
}
// 컴포넌트; 내 스터디, 스터디 모집 작은 블록
function Block(props){
    // props로 받아오기 
    const title = "제목";
    const contents = "스터디 소식";
    return (
        <div>
            <p class="block_title">{title}</p>
            <p class="block_contents">{contents}</p>
        </div>
    );  
}
function MystudyGroup(props){
    
}
function RecruitStudy(props){

}
function MyPage(props){

}
const MyStudy = () => {
    return (
        <Mylog></Mylog>
        //<MystudyGroup></MystudyGroup>
        //<RecruitStudy></RecruitStudy>
        //<MyPage></MyPage>
    );
}
function Home(props){
    return (
        <div>
            <Menubar></Menubar>
            <Mylog></Mylog>
        </div>
        
    );
    
}
export default Home;