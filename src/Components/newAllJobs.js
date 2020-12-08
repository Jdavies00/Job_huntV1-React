import React, { useContext, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axiosHelper from '../utilities/axiosHelper'
import { useHistory } from 'react-router-dom';
import AppContext from '../utilities/AppContext'

export default function Newpost() {
  const history = useHistory();
  // { setJobName, setJobDescription, setJobCreatedBy, setJobCompanyName, setJobLink, setJobSalary, token }
  const context = useContext(AppContext);

  const createJob = (res) => {
    context.setJobFromInput(res.data)
    console.log(res)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("something submits")
    // history.push("/jobsboard")

    axiosHelper({
      method: 'post',
      token: context.token,
      route: "allJobs",//I have no clue why but '/alljobs' goes to  http://localhost:8000//alljobs 
      success: createJob
    })
    console.log("something submits")
  }





  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form className ='Form' onSubmit={e => handleSubmit(e)}>
              <FormGroup>
                <Label for='JobTitle'>Job Title</Label>
                <Input
                  type="Jobtitle"
                  name="JobTitle"
                  id="JobTitle1"
                  // placeholder="itle"
                  onChange={e => context.setJobName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for='Description'>Description</Label>
                <Input
                  type='Description'
                  name="Description"
                  id="Description2"
                  onChange={e => context.setJobDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label >CreatedBy</Label>
                <Input
                  type='CreatedBy'
                  name="CreatedBy"
                  id="CreatedBy3"
                  onChange={e => context.setJobCreatedBy(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label >CompanyName</Label>
                <Input
                  type='CompanyName'
                  name="CompanyName"
                  id="CompanyName4"
                  onChange={e => context.setJobCompanyName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label >Link</Label>
                <Input
                  type='Link'
                  name="Link"
                  id="Link5"
                  onChange={e => context.setJobLink(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label >Salary</Label>
                <Input
                  type='Salary'
                  name="Salary"
                  id="Salary6"
                  onChange={e => context.setJobSalary(e.target.value)}
                />
              </FormGroup>
              <Col>
                <Row>
                  <Button color="warning" type='submit'>Create New Post</Button>
                </Row>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
// }
