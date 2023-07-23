import React, { Fragment } from "react";
import { Avatar, Icon, Col } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import SpellToolTip from "../../../../Shared/SpellTooltip";
import ModTooltip from "../../../../Shared/ModTooltip/ModTooltip";

const maxModifierLimit = 10;

const SkillSlot = (props) => {
  const { slotData, getTotalModPoints } = props;

  return (
    <Col span={4} offset={0}>
      {!slotData ? (
        <PlusSquareOutlined className="addSpellIcon" />
      ) : (
        <Fragment>
          <Col span={24} offset={0}>
            <Avatar
              className="slotSpellIcon viewOnly"
              size={55}
              shape="square"
              src={require(`../../../../../Data/SpellImages/${slotData.imageName.toLowerCase()}.png`)}
              data-tip
              data-for={slotData.imageName}
            />
            <SpellToolTip
              skillName={slotData.skillData.name}
              imageName={slotData.imageName}
              skillDescription={slotData.skillData.description}
              skillType={slotData.skillData.type}
              skillUsableWith={slotData.skillData.usableWith}
              skillTags={slotData.skillData.skillTags}
              direction={"top"}
            />
          </Col>
          <Col span={24} offset={0} className="slotSpellNameCol">
            <span className="slotSpellTitle">{slotData.skillData.name}</span>
            <div className="slotSpellNameBorder"></div>
          </Col>
          <Col span={24} offset={0} className="slotSpellModCountCol">
            <span className="slotSpellModCount">
              {`Skill Modifiers: ${
                slotData.activeModifiers.length > 0
                  ? getTotalModPoints(slotData.activeModifiers)
                  : "0"
              }/${maxModifierLimit}`}
            </span>
          </Col>
          {slotData.activeModifiers.map((mod, index) => {
            return (
              <Col key={index} span={22} offset={1} className="selectedModsCol">
                <span
                  className="selectedModSpan"
                  data-tip
                  data-for={mod.name.toLowerCase()}
                >
                  {mod.name}
                </span>
                <ModTooltip
                  modDescriptions={props.modDescriptions}
                  modName={mod.name}
                  modCost={mod.cost}
                />
              </Col>
            );
          })}
        </Fragment>
      )}
    </Col>
  );
};

export default SkillSlot;
