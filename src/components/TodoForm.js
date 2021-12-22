import React, {useState} from 'react';
import {Form, Button, Row, Container, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TodoForm = (props) => {
    const [value, setValue] = useState(' ')

    const {onAdd} = props


    const submitTodoHandler = (event) => {
        event.preventDefault()
        onAdd(value)
        console.log(value)
        setValue('')
    }


    return (
        <Container>
            <Row>
                <Col sm={8} md={{ span: 7, offset: 2 }}>
                    <Form className="justify-content-md-center" onSubmit={submitTodoHandler}>
                        <Form.Group>
                            <Form.Label>
                                My Todos
                            </Form.Label>
                            <Form.Control value={value} onChange={e => setValue(e.target.value)} type='text'/>
                        </Form.Group>
                        <Button style={{margin:20}} type="submit">Submit form</Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
};

export default TodoForm;

