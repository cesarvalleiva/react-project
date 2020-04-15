import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import reactJsHooks from '../../../assets/img/png/curso4.png';
import reactNative from '../../../assets/img/png/curso5.png';
import javaScript from '../../../assets/img/png/curso2.png';
import wordPress from '../../../assets/img/png/curso6.png';
import prestaShop from '../../../assets/img/png/curso3.png';
import cssGrid from '../../../assets/img/png/curso1.png';

import './HomeCourses.scss';

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16} >
                <Row className="row-courses">
                    <Col md={6}>
                        <CardCourse
                            image={reactJsHooks}
                            title="React JS Hooks"
                            subtitle="Intermedio - React/Javascript"
                            link="https://www.google.com.ar"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={reactNative}
                            title="React Native Expo"
                            subtitle="Intermedio - React/Javascript"
                            link="https://www.google.com.ar"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={javaScript}
                            title="JavaScript ES6"
                            subtitle="Básico - Javascript"
                            link="https://www.google.com.ar"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={wordPress}
                            title="WordPress"
                            subtitle="Básico - WordPress"
                            link="https://www.google.com.ar"
                        />
                    </Col>
                </Row>
                <Row className="row-courses">
                    <Col md={6}>
                        <CardCourse
                            image={prestaShop}
                            title="PrestaShop 1.7"
                            subtitle="Básico - PrestaShop"
                            link="https://www.google.com.ar"
                        />
                    </Col>
                    <Col md={6} />
                    <Col md={6} />
                    <Col md={6}>
                        <CardCourse
                            image={cssGrid}
                            title="CSS Grid"
                            subtitle="Intermedio - CSS"
                            link="https://www.google.com.ar"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
            <Col lg={24} className="home-courses__more" >
                <Link to="/courses">
                    <Button>Ver más</Button>
                </Link>
            </Col>
        </Row>
    )
}

function CardCourse(props) {
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;

    return ( 
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
                className="home-courses__card"
                cover={<img src={image} alt={title} />}
                actions={[<Button>Ingresar</Button>]}
            >
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    )
}