import React from "react";

const Question = (Props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Container>
            <Row xs={1} md={2}>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                      Question {Props.number}
                    </Card.Subtitle>
                    <Card.Text>{Props.question.question}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Form>
                    <fieldset>
                      <Form.Group as={Row}>
                        <Form.Label as="legend">
                          Options
                        </Form.Label>
                        {Props.question.option.map(choice >= (<Form.Check
                            type="radio"
                            label={choice}
                            name="formHorizontalRadios"
                            id={choice}
                          /> )
                        )}
                          
                      </Form.Group>
                    </fieldset>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
