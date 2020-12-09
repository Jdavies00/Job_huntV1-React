import React, { useContext, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axiosHelper from '../utilities/axiosHelper'
import { useHistory } from 'react-router-dom';
import AppContext from '../utilities/AppContext'

export default function Newpost() {
  const history = useHistory();
  const context = useContext(AppContext);
  
  const createJob = (res) => {
    context.setJobFromInput(res.data)
    console.log(res)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("something submits")
    history.push("/jobsboard")

    axiosHelper({
      method: 'post',
      token: context.token,
      route: "allJobs",
      data:
      {
        jobName: context.jobName,
        jobDescription: context.jobDescription,
        jobCreatedBy: context.jobCreatedBy,
        jobCompanyName: context.jobCompanyName,
        jobLink: context.jobLink,
        jobSalary: context.jobSalary
      },
      success: createJob
    })
    console.log("something submits")
  }
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form className='Form' onSubmit={e => handleSubmit(e)}>
              <FormGroup>
                <Label for='JobTitle'>Job Title</Label>
                <Input
                  type="Jobtitle"
                  name="JobTitle"
                  id="JobTitle1"
                  value={context.jobName}
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
                  value={context.jobDescription}
                  onChange={e => context.setJobDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label >CreatedBy</Label>
                <Input
                  type='CreatedBy'
                  name="CreatedBy"
                  id="CreatedBy3"
                  value={context.createdBy}
                  onChange={e => context.setJobCreatedBy(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label >CompanyName</Label>
                <Input
                  type='CompanyName'
                  name="CompanyName"
                  id="CompanyName4"
                  value={context.jobCompanyName}

                  onChange={e => context.setJobCompanyName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label >Link</Label>
                <Input
                  type='Link'
                  name="Link"
                  id="Link5"
                  value={context.jobLink}

                  onChange={e => context.setJobLink(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label >Salary</Label>
                <Input
                  type='Salary'
                  name="Salary"
                  id="Salary6"
                  value={context.jobSalary}

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
