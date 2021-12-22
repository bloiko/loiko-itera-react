import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TodoItem = (props) => {
    const {content, onCheck, id, onDelete, onUpdate} = props

    const onCheckHandler = () => {
        onCheck(id)
    }

    const onDeleteHandler = () => {
        onDelete(id)
    }

    const onUpdateHandler = () => {
        onUpdate(id, `${content} has been updated!`)
    }

    return (

        <Container  style={{marginTop:20}} onClick={onUpdateHandler}>
            <Row>
                <Col sm={1}>
                    <Form>
                        <Form.Check
                            required
                            name="check"
                            onChange={onCheckHandler}
                            id="validationFormik106"
                        />
                    </Form>
                </Col>
                <Col sm={8} >{content}</Col>
                <Col sm={2}>
                    <Button variant="outline-danger" onClick={onDeleteHandler}>Delete Todo</Button>
                </Col>
            </Row>
        </Container>
    );
};


export default TodoItem;
