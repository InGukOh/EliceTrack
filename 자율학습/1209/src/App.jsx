import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Tab from "./Tab.jsx";
import SearchTextField from "./SearchTextField.jsx";
import CardCount from "./CardCount.jsx";
import TrackCard from "./TrackCard.jsx";
import CourseCard from "./CourseCard.jsx";
import Pagination from "./Pagination.jsx";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 1232px;
  margin: auto;
  padding-top: 100px;
  flex-direction: column;
`;

const TracksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 398px);
  grid-column-gap: 19px;
  grid-row-gap: 32px;
`;

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 296px);
  grid-column-gap: 16px;
  grid-row-gap: 24px;
`;

export default function App() {
  const [currTab, setCurrTab] = useState("트랙");
  const [searchValue, setSearchValue] = useState("");
  const [currPage, setCurrPage] = useState(0);
  const [cardData, setCardData] = useState([]);
  const [totalCardCount, setTotalCardCount] = useState(0);

  const handleClickTab = (tab) => {
    if (tab !== currTab) {
      setSearchValue("");
      setCurrPage(0);
    }
    setCurrTab(tab);
  };

  const handleChangeSearch = (val) => {
    setSearchValue(val);
  };

  useEffect(() => {
    (async function () {
      if (currTab === "트랙") {
        const API_END_POINT = "https://api-beta.elicer.io:6664/org/academy/";

        const offset = currPage * 6;
        const filterConditions = searchValue
          ? `filter_conditions=${JSON.stringify({ title: searchValue })}&`
          : "";

        const trackUrl = `${API_END_POINT}track/list/?${filterConditions}offset=${offset}&count=6`;

        const response = await axios.get(trackUrl);
        setTotalCardCount(response.data.track_count);
        setCardData(response.data.tracks);
      }

      if (currTab === "과목") {
        const API_END_POINT = "https://api-beta.elicer.io:6664/org/academy/";

        const filterConditions = searchValue
          ? `filter_conditions=${JSON.stringify({ title: searchValue })}&`
          : "";

        const offset = currPage * 8;
        const courseUrl = `${API_END_POINT}course/list/?${filterConditions}offset=${offset}&count=8`;

        const response = await axios.get(courseUrl);
        setTotalCardCount(response.data.course_count);
        setCardData(response.data.courses);
      }
    })();
  }, [currTab, searchValue, currPage]);

  return (
    <Container>
      <Tab currTab={currTab} onClick={handleClickTab} />
      <SearchTextField value={searchValue} onChange={handleChangeSearch} />
      <CardCount count={totalCardCount} />
      {currTab === "트랙" ? (
        <TracksContainer>
          {cardData.map((track, i) => (
            <TrackCard title={track.title} key={`track-card-${i}`} />
          ))}
        </TracksContainer>
      ) : (
        <CoursesContainer>
          {cardData.map((course, i) => (
            <CourseCard title={course.title} key={`course-card-${i}`} />
          ))}
        </CoursesContainer>
      )}
      <Pagination
        currPage={currPage}
        pageCount={Math.ceil(totalCardCount / (currTab === "트랙" ? 6 : 8))}
        onClickPage={setCurrPage}
      />
    </Container>
  );
}
