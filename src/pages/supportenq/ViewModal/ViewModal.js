import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
const ViewModal = ({ viewclose, view, id }) => {
  // ..................Modal Controlls......................//

  const [show, setShow] = useState(view)
  useEffect(() => {
    setShow(view)
  }, [view])
  const handleModalClose = () => {
    viewclose()
    setShow(false)
  }

  // ..................Modal Controlls Ends......................//

  //.................fetch one data....................//

  const [details, setDetails] = useState(id)
  useEffect(() => {
    setDetails(id)
  }, [id])

  const [user, setUser] = useState({})
  const showDetail = async (details) => {
    console.log('hai' + details)
    try {
      const response = await axios.get(`http://localhost:8000/enquiry/${details}`)
      const data = response.data
      console.log('response' + response.data.fname)
      setUser(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    showDetail(details)
  }, [details])

  //.................fetch one data ends....................//
  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        centered
        onHide={handleModalClose}
        animation={false}
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: '#40536e', color: 'white' }}>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '310px' }} className="overflow-auto">
          <Container>
            <Row>
              <Col lg={12}>
                <Form.Label className="ms-1 mt-2">First name</Form.Label>
                <Form.Control disabled type="text" value={user.fname} />
                <Form.Label className="ms-1 mt-2">Last name</Form.Label>
                <Form.Control disabled type="text" value={user.lname} />
                <Form.Label className="ms-1 mt-2">Email</Form.Label>
                <Form.Control disabled type="text" value={user.email} />
                <Form.Label className="ms-1 mt-2">Mobile</Form.Label>
                <Form.Control disabled type="text" value={user.mobile} />
                <Form.Label className="ms-1 mt-2">Enq Mode</Form.Label>
                <Form.Control disabled type="text" value={user.enq_mode} />
                <Form.Label className="ms-1 mt-2">Enq For</Form.Label>
                <Form.Control disabled type="text" value={user.enq_for} />
                <Form.Label className="ms-1 mt-2">Location</Form.Label>
                <Form.Control disabled type="text" value={user.loc} />
                <Form.Label className="ms-1 mt-2">Org Id</Form.Label>
                <Form.Control disabled type="text" value={user.org_id} />
                <Form.Label className="ms-1 mt-2">Created At</Form.Label>
                <Form.Control disabled type="text" value={user.createdAt} />
                <Form.Label className="ms-1 mt-2">Created By</Form.Label>
                <Form.Control disabled type="text" value={user.createdBy} />
                <Form.Label className="ms-1 mt-2">Updated At</Form.Label>
                <Form.Control disabled type="text" value={user.updatedAt} />
                <Form.Label className="ms-1 mt-2">Updated By</Form.Label>
                <Form.Control disabled type="text" value={user.updatedBy} />
                <Form.Label className="ms-1 mt-2">Remarks</Form.Label>
                <Form.Control disabled type="text" value={user.remarks} />
                <Form.Label className="ms-1 mt-2">Status</Form.Label>
                <Form.Control disabled type="text" value={user.status} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="text-white" variant="danger" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ViewModal
