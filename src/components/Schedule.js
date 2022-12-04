import React, {useEffect, useState} from 'react';
import weeks from '../assets/weeks.json'
import para from '../assets/para.json'
import timeTable from '../assets/time_table.json'
import {Col, Row} from "antd";
import ClockCircleOutlined from "@ant-design/icons/lib/icons/ClockCircleOutlined";

const Schedule = () => {
    const [weeklyDaysClasses, setWeeklyDaysClasses] = useState([])

    useEffect(() => {
        setWeeklyDaysClasses((weeks || []).map(weekDays => {
            return {
                ...weekDays,
                subjects: (timeTable || []).filter(subject => weekDays.id === subject.week.id)
            }
        }))
    }, [])

    return (
        <Row className="schedule">
            {(weeklyDaysClasses || []).map(item => (
                item.status === 1 &&
                <div key={item.id} className="site-card-wrapper">
                    <div className="site-card-header">
                        <p>{item.name}</p>
                    </div>
                    {(item.subjects || []).map((subject, idx) => (
                        <Col key={idx} span={23}>
                            <div className="site-card-time">
                                {subject?.para.id}
                                <ClockCircleOutlined/>
                                {subject?.para?.start_time} -&nbsp;
                                {subject?.para?.end_time}
                            </div>
                            <div className="site-card-lesson">
                                <div>
                                    <strong>
                                        {subject.building.name}
                                        {subject?.room.name}-xona.
                                        <i style={{color: '#003eb3', marginLeft: '10px'}}>
                                            {subject?.subjectCategory.name}
                                        </i>
                                    </strong>
                                </div>
                                <div>
                                    {subject.subject.name}
                                </div>
                            </div>
                        </Col>
                    ))}
                </div>
            ))}
        </Row>
    );
};

export default Schedule;