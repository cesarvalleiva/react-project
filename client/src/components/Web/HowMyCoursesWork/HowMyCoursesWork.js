import React from 'react';
import { Row, Col, Card } from 'antd';
import { ClockCircleOutlined, KeyOutlined, MessageOutlined, UserOutlined, DollarCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

import './HowMyCoursesWork.scss';

export default function HowMyCoursesWork() {
    return (
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work__title">
                <h2>Cómo funcionan mis cursos</h2>
                <h3>
                    Cada curso cuenta con contenido bajo la web de Udemy, activa las 24
                    horas al día los 365 días del año.
                </h3>
            </Col>

            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            icon={<ClockCircleOutlined className="icon" />}
                            title="Cursos y Clases"
                            description="Cursos de entre 10 y 30 horas y cada clase del curso con duración máxima de 15 minutos, fáciles de llevar en tu día a día de aprendizaje."
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<KeyOutlined className="icon" />}
                            title="Acceso 24/7"
                            description="Accede a los cursos en cualquier momento, desde cualquier lugar sin importar día y hora."
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<MessageOutlined className="icon" />}
                            title="Aprendizaje colaborativo"
                            description="Aprende de los demás dejando tus dudas para que profesores y compañeros te ayuden."
                        />
                    </Col>
                </Row>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            icon={<UserOutlined className="icon" />}
                            title="Mejora tu perfil"
                            description="Aprende y mejora tu perfil para mantenerte informado de actualizaciones."
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<DollarCircleOutlined className="icon" />}
                            title="Precios bajos"
                            description="Obtén el curso que necesitas por solo 9,99 y ten acceso a él por tiempo y soporte ilimitado."
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<CheckCircleOutlined className="icon" />}
                            title="Certificado de finalización."
                            description="Al completar un curso recibirás una certificación que te expedirá Udemy en PDF."
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
        </Row>
    )
}

function CardInfo(props) {
    const { icon, title, description } = props
    const { Meta } = Card;

    return ( 
        <Card className="how-my-courses-work__card">
            {icon}
            <Meta title={title} description={description} />
        </Card>
    )
}