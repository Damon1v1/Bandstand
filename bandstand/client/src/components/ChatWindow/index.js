 import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
//import Sidebar from './components/Sidebar';
import "./style.css";


function ChatWindow() {
  
  return (
      
    <div>
        <div className="flex-grow-1 overflow-auto">
            <div className="d-flex flex-column align-items-start justify-content-end px-3 height: 100% ">
            </div>
        </div>
      <Form className="form">
        <Form.Group>
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              style={{ height: '75px', resize: 'none'}}
            />
            <InputGroup.Append>
              <Button className="btn" type="submit">Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}
export default ChatWindow;