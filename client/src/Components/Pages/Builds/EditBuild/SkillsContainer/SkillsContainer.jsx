import React from "react";
import { Row, Col } from "antd";

import SkillsSelector from "./SkillsSelector";

import "./style.css";

const SkillsSectionHeader = () => {
  return (
    <Row className="statPointsRow">
      <Col className="statPointsCol" span={24} offset={0}>
        <span className="sectionLabel">Skills</span>
      </Col>
    </Row>
  );
};

const SkillsSelectorLabels = () => {
  return (
    <div>
      <Row className="skillsRow">
        <Col span={4} offset={0}>
          <span className="skillTitle">Slot 1 </span>
        </Col>
        <Col span={4} offset={0}>
          <span className="skillTitle">Slot 2 </span>
        </Col>
        <Col span={4} offset={0}>
          <span className="skillTitle">Slot 3 </span>
        </Col>
        <Col span={4} offset={0}>
          <span className="skillTitle">Slot 4 </span>
        </Col>
        <Col span={4} offset={0}>
          <span className="skillTitle">Slot 5 </span>
        </Col>
        <Col span={4} offset={0}>
          <span className="skillTitle">Right Click </span>
        </Col>
      </Row>
    </div>
  );
};

const SkillsContainer = (props) => {
  return (
    <div className="skillsContainerMain">
      <SkillsSectionHeader />
      <SkillsSelectorLabels />
      <SkillsSelector {...props} />
    </div>
  );
};

export default React.memo(SkillsContainer);
