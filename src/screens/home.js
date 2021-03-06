import React, { useState } from "react";
import Course1 from "../ui/course-1.jpg";
import Courese2 from "../ui/course-2.jpg";

const HomePage = () => {
  const [popularCourse, setPopularCourse] = useState([
    {
      ID: 1,
      title: "Органикалық химия еспетерін шешу жолдары",
      tutor: {
        ID: 1,
        name: "Арайлым Қуанышбек",
        username: "@arailymkuainshbek",
        dp: "https://placeimg.com/100/100/people?tutor-" + 1,
      },
      duration: "6 сағат",
      poster: Course1,
    },
    {
      ID: 2,
      title: "Жалпы физика курсы",
      tutor: {
        ID: 2,
        name: "Абылай Измуратов",
        username: "@izmuratovkz01",
        dp: "https://placeimg.com/100/100/people?tutor-" + 3,
      },
      duration: "12 сағат",
      poster: Courese2,
    },
  ]);
  // Top tutors
  const [topTutors, setTopTutors] = useState([
    {
      ID: 1,
      name: "Арайлым Қуанышбек",
      username: "@arailymkuainshbek",
      dp: "https://placeimg.com/100/100/people?tutor-" + 1,
    },

    {
      ID: 2,
      name: "Aбылай Измуратов",
      username: "@izmuratovkz01",
      dp: "https://placeimg.com/100/100/people?tutor-" + 2,
    },
    {
      ID: 3,
      name: "Сүйеніш Тұрғанбаев",
      username: "@suenishthebestone",
      dp: "https://placeimg.com/100/100/people?tutor-" + 3,
    },
  ]);
  var topTutorsList = [];

  for (let i = 0; i < topTutors.length; i++) {
    topTutorsList.push(
      <a href="#" className="user-block rel noul " key={"popular-course" + i}>
        <div className="user  aic flex">
          <div className="pic">
            <img
              src={topTutors[i].dp}
              className="bl"
              alt="user__image"
            />
          </div>
          <div className="meta rel">
            <h2 className="s15 fontb c33 name">
              {topTutors[i].name}
            </h2>
            <h2 className="s13 fontn c333 uname">
              {topTutors[i].username}
            </h2>
          </div>
        </div>
      </a>
    );
  }

  //live tutors list
  var tutorsList = [];

  for (let i = 0; i < 5; i++) {
    tutorsList.push(
      <button className="tutor rel " key={"tutor-live" + i}>
        <img
          className="b1"
          src={"https://placeimg.com/100/100/people" + i}
          alt="imgage_log"
        />
      </button>
    );
  }
  //courses lis
  var courseList = [];

  for (let i = 0; i < popularCourse.length; i++) {
    courseList.push(
      <a href="#" className="course rel " key={"popular-course" + i}>
        <div
          className="block "
          style={{
            backgroundImage: "url(" + popularCourse[i].poster + ")",
          }}
        >
          <div className="user abs aic flex">
            <div className="pic">
              <img
                src={popularCourse[i].tutor.dp}
                className="bl"
                alt="user__image"
              />
            </div>
            <div className="meta rel">
              <h2 className="s15 fontb cff name">
                {popularCourse[i].tutor.name}
              </h2>
              <h2 className="s13 fontn cff uname">
                {popularCourse[i].tutor.username}
              </h2>
            </div>
            <div className="dura abs">
              <h2 className="s13 fontn cff uname">
                {popularCourse[i].duration}
              </h2>
            </div>
            <div className="course-title abs">
              <h2 className="s13 fontn cff uname">{popularCourse[i].title}</h2>
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="home-page rel">
      {/*Tutors live Now*/}
      <div className="section rel">
        <h2 className="title s24 fontb">
          Қазір <span className="fontn">эфирде</span>
          <div className="tutors rel flex">{tutorsList}</div>
        </h2>
      </div>

      {/*Popular courses*/}
      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Рейтингі жоғары <span className="fontn">курстар</span>
          <div className="courses rel flex">{courseList}</div>
        </h2>
      </div>

      {/*Top Tutors*/}
      <div className="section rel">
        <h2 className="title s24 fontb">
          Рейтингі жоғары менторлар <span className="fontn"></span>
          <div className="top-tutors tutors rel flex">{topTutorsList}</div>
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
