import React, { useState } from "react";
import Course1 from "../ui/course-1.jpg";
import Courese2 from "../ui/course-2.jpg";


import { ReactComponent as BrightIcon } from "../assets/light-svgrepo-com.svg";
import { ReactComponent as BatteryIcon } from "../assets/battery-svgrepo-com.svg";
import { ReactComponent as ShielIcon } from "../assets/shield-svgrepo-com.svg";
import { ReactComponent as LeveLIcon } from "../ui/bars-level-svgrepo-com.svg";
import { ReactComponent as PlayButton } from "../ui/play-svgrepo-com.svg";
import { ReactComponent as StopButton } from "../ui/pause-svgrepo-com.svg";
import { ReactComponent as VolumeButton } from "../ui/volume-svgrepo-com.svg";
import { ReactComponent as FullScreen } from "../ui/full-screen-svgrepo-com.svg";

const CoursePage = () => {
  const [course, setCourse] = useState({
    ID: 1,
    title: "Органикалық химия еспетерін шешу жолдары",
    about:
      "Органикалық химия – химияның көміртек және оның басқа элементтермен түзілген органикалық қосылыстарын, олардың өзара түрлену заңдылықтарын зерттейтін саласы.",
    tutor: {
      ID: 1,
      name: "Арайлым Қуанышбек",
      username: "@arailymkuainshbek",
      dp: "https://placeimg.com/100/100/people?tutor-" + 1,
    },
    duration: "6 сағат",
    poster: Course1,
    videos: [
      {
        ID: 1,
        title: "Introduction",
        duration: "2 hours",
      },
      {
        ID: 2,
        title: "Basics",
        duration: "2 hours",
      },
      {
        ID: 3,
        title: "Review",
        duration: "2 hours",
      },
    ],
  });

  var courseVideos = [];
  for (let i = 0; i < course.videos.length; i++) {
    courseVideos.push(
      <a key={"course-video-" + i} href="#" className="noul aic flex rel">
        <div className="id s18 fontn cff">{course.videos[i].ID}</div>
        <div className="meta rel">
          <h1 className="s15 fontb c333">{course.videos[i].title}</h1>
          <h1 className="s15 fontn c777">{course.videos[i].duration}</h1>
        </div>
      </a>
    );
  }

  return (
    <div className="course-page rel flex">
      <div className="course-info ">
        <div className="tutor rel aic flex">
          <div className="pic">
            <img src={course.tutor.dp} className="bl" alt="user__image" />
          </div>
          <div className="meta rel">
            <h2 className="s15 fontb c33 name">{course.tutor.name}</h2>
            <h2 className="s13 fontn c777 uname">Курс менторы</h2>
          </div>
        </div>

        <div className="course-meta">
          <h2 className="s20 title fontb c333">
            {course.title}
            <p
              className="sl15 about fontn c777 "
              dangerouslySetInnerHTML={{ __html: course.about }}
            ></p>
          </h2>
        </div>

        <div className="section section-b rel">
          <h2 className="title s24 fontb">
            Course Achivments <span className="fontn"></span>
            <div className="course-stats flex">
              <div className="stats-box   points flex">
                <ShielIcon className="ico ico-points s24 icon-shield svgIcon" />
                <h2 className="val s15 c333 fontb">18 000</h2>
                <h2 className="lbl s13 c777">балл</h2>
              </div>
              <div className="stats-box  flex">
                <BatteryIcon className="ico ico-battery s24 icon-battery-90 svgIcon" />
                <h2 className="val s15 c333 fontb">43.5%</h2>
                <h2 className="lbl s13 c777">аяқталды</h2>
              </div>
              <div className="stats-box   flex">
                <LeveLIcon className="ico ico-battery s24 icon-battery-90 svgIcon" />
                <h2 className="val s15 c333 fontb">+23</h2>
                <h2 className="lbl s13 c777">деңгей</h2>
              </div>
            </div>
          </h2>
        </div>

        <div className="section section-b rel">
          <h2 className="title s24 fontb">
            Course Details <span className="fontn"></span>
            <div className="course-videos aic jic flex">{courseVideos}</div>
          </h2>
        </div>
      </div>

      <div className="course-preview rel">
        <div className="player rel">
          <video  />
          <div className="ctrls abs aic flex">
            <StopButton className=" ctrlbtn icon-pause s24 pp" />
            <div className="timer rel fontn s15 cfff">02:54 / 09:55</div>
            <div className="slider rel">
              <div className="prog rel">
                <div className="bar rel">
                  <div className="knob abs" />
                </div>
              </div>
            </div>
            <VolumeButton className="icon-volume-100 s24 vol ctrlbtn" />
            <FullScreen className="icon-full-screen-enter2 s24 fs ctrlbtn" />
          </div>
        </div>
          </div>

                         
          
          
    </div>
  );
};

export default CoursePage;
