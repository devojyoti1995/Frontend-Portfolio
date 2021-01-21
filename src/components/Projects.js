import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Projects = (props) => {
  const [header] = React.useState({
    mainHeader: "Projects",
    subHeading: "My Projects",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting\
    industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      project: props.state.project1, //"Tic-tac-toe",
      projectdetail: props.state.projectdetail1,
      //   "Lorem Ipsum is simply dummy text of the printing typesetting\
      // industry. simply dummy",
      projecturl: props.state.projecturl1,
    },
    {
      id: 2,
      icon: <FaGithub className="commonIcons" />,
      project: props.state.project2,
      projectdetail: props.state.projectdetail2,
      // "Lorem Ipsum is simply dummy text of the printing typesetting\
      // industry. simply dummy",
      projecturl: props.state.projecturl2,
    },
    {
      id: 3,
      icon: <FaGithub className="commonIcons" />,
      project: props.state.project3,
      projectdetail: props.state.projectdetail3,
      // "Lorem Ipsum is simply dummy text of the printing typesetting\
      // industry. simply dummy",
      projecturl: props.state.projecturl3,
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            <div className="col-4 bgMain">
              <div className="services__box">
                {state[0].icon}
                <div className="services__box-header">{state[0].project}</div>
                <div className="services__box-p">{state[0].projecturl}</div>
              </div>
            </div>

            <div className="col-4 bgMain">
              <div className="services__box">
                {state[1].icon}
                <div className="services__box-header">{state[1].project}</div>
                <div className="services__box-p">{state[1].projecturl}</div>
              </div>
            </div>

            <div className="col-4 bgMain">
              <div className="services__box">
                {state[2].icon}
                <div className="services__box-header">{state[2].project}</div>
                <div className="services__box-p">{state[2].projecturl}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
