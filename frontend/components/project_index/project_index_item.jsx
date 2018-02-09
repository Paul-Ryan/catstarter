import React from 'react';
import { Link } from 'react-router-dom';

const totalPledges = (pledgeArr) => {
  let sum = 0;

  for(let i = 0; i < pledgeArr.length; i++) {
    sum += pledgeArr[i];
  }
  return sum;
};

const percentGoal = (pledgeTotal, goal) => {
  let percentWidth = (pledgeTotal / goal) * 100;
  return {
    width: `${percentWidth}%`,
    maxWidth: "100%"
  };
};

const daysToGo = (date) => {
  let date1 = Date.parse(date);
  let dueDate = new Date(date1);
  let today = new Date;
  let timeDiff = Math.abs(today.getTime() - dueDate.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (
   diffDays
  );
};

const ProjectIndexItem = ({ project }) => {
  let totalFunds = totalPledges(project.pledges);
  let percentFunded = Math.floor(totalFunds / project.fundingGoal * 100);
  let percentFundedStyles = percentGoal(totalFunds, project.fundingGoal);


  return (
  <li className="project-index-item col col-4">
    <div className="grayBorder">
      <Link to={`projects/${project.id}`}>
        <div className="project-index-image-box">
          <img className="project-index-image" src={project.imageUrl} />
        </div>
      </Link>
      <div className="project-index-title">
        <Link className="project-index-header" to={`projects/${project.id}`}>
          <h1>{project.title}</h1>
        </Link>
        <p className="project-author">by {project.author.username}</p>
      </div>
      <div className="project-index-info">
        <div className="project-pledge-bar">
          <div className="project-pledge-bar-fill" style={percentFundedStyles}></div>
        </div>
        <p className="project-pledge-total"><span className="green-text">${totalFunds} pledged</span></p>
        <p>{percentFunded}% Funded</p>
        <p>{daysToGo(project.dueDate)} days to go</p>
        <p className="project-categories">categories</p>
      </div>
    </div>
  </li>
  );
};

export default ProjectIndexItem;
