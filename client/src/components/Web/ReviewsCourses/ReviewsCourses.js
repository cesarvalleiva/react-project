import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import AvatarMan from '../../../assets/img/png/avatar-man.png';
import AvatarWoman from '../../../assets/img/png/avatar-woman.png';

import './ReviewsCourses.scss';

export default function ReviewsCourses() {
    return (
        <Row className="reviews-courses">
            <Row>
                <Col lg={4} />
                <Col lg={16} className="reviews-courses__title">
                    <h2>
                        Forma parte de los 35 mil estudiantes que estan aprendiendo con mis cursos.
                    </h2>
                </Col>
                <Col lg={4} />
            </Row>
            <Row>
                <Col lg={4} />
                <Col lg={16}>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarMan}
                                review="Un excelente curso, el profesor explica detalladamento como funciona react native y también como hacer componente por componente, he buscado muchos cursos de react native pero ninguno me ha enseñado tanto como este, ahora estoy desarrollando mi propia aplicación sin ningún tipo de problema gracias al curso."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Valentina Rubio"
                                subtitle="Alumna de Udemy"
                                avatar={AvatarWoman}
                                review="Si te gusta los cursos que profundizan en la materia, te lo recomiendo. El profesor explica de forma completa todos los conceptos necesarios para trabajar con grid. Un gran curso."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="David Ramiro"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarMan}
                                review="El contenido del curso es muy completo y de necesitar cualquier dato adicional el profesor está super pendiente para responderlo. Ya tengo creado mi e-commerce con WordPress y gran parte de la información necesaria la obtuve del curso."
                            />
                        </Col>
                    </Row>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview
                                name="Marta Pérez"
                                subtitle="Alumna de Udemy"
                                avatar={AvatarWoman}
                                review="Un excelente curso, el profesor explica detalladamento como funciona react native y también como hacer componente por componente, he buscado muchos cursos de react native pero ninguno me ha enseñado tanto como este, ahora estoy desarrollando mi propia aplicación sin ningún tipo de problema gracias al curso."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Pedro Cruz"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarMan}
                                review="Si te gusta los cursos que profundizan en la materia, te lo recomiendo. El profesor explica de forma completa todos los conceptos necesarios para trabajar con grid. Un gran curso."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Lucía Gimenez"
                                subtitle="Alumna de Udemy"
                                avatar={AvatarWoman}
                                review="El contenido del curso es muy completo y de necesitar cualquier dato adicional el profesor está super pendiente para responderlo. Ya tengo creado mi e-commerce con WordPress y gran parte de la información necesaria la obtuve del curso."
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} />
            </Row>
        </Row>
    )
}

function CardReview(props) {
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;

    return (
        <Card className="reviews-courses__card">
            <p>{review}</p>
            <Meta
                avatar={<Avatar src={avatar} />}
                title={name}
                description={subtitle}
            />
        </Card>
    ) 
}