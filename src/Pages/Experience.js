import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { School, WorkspacePremiumOutlined } from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';
import "../Styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#21325e'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2004- 2018"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<School />}
        >
          <h3 className = "vertical-timeline-element-title">
            DBMS ENGLISH SCHOOL
          </h3>
          <p>ICSE/ISC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018-2022"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<School />}
        >
          <h3 className = "vertical-timeline-element-title">
            KIIT UNIVERSITY (Bhubaneshwar , Odisha)
          </h3>
          <p>BTech in Electronics and Telecommunication Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022-Present"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            Cognizant Technology Solutions(CTS)
          </h3>
          <p>Working as a Software Engineer for Network Rail Client , which is based in UK. Developing and delivering features sprintwise
            and also collaborating with the QA for bug fixes . Also collaborating with the Business Analysts 
            and the UX designers to understand the business logics.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
