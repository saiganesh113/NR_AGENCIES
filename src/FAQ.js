import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';

const FAQ = () => {
  const [activeKey, setActiveKey] = useState('0');

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Frequently Asked Questions</h2>
          <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
            <Card>
              <Card.Header>
                <Accordion.Header eventKey="0">
                  What if I need to reschedule or cancel my booking?
                </Accordion.Header>
              </Card.Header>
              <Accordion.Body>
                NR AGENCIES understands that plans can change. You can easily reschedule or cancel your booking through our app or website. We provide flexibility to adjust your service as needed without any hassle.
              </Accordion.Body>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Header eventKey="1">
                  How can I book AC service & AC repair with NR AGENCIES?
                </Accordion.Header>
              </Card.Header>
              <Accordion.Body>
                Booking your AC Service & Repair with NR AGENCIES is simple and hassle-free. You can do it through our app or website. Just select the service you need, choose a convenient time slot, and we'll assign a skilled professional to take care of your AC needs.
              </Accordion.Body>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Header eventKey="2">
                  How can I reach NR AGENCIES support team if I have any questions or concerns?
                </Accordion.Header>
              </Card.Header>
              <Accordion.Body>
                NR AGENCIES is always here to help. You can reach our support team through our app or website.
              </Accordion.Body>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Header eventKey="3">
                  Are there any warranties provided for the services?
                </Accordion.Header>
              </Card.Header>
              <Accordion.Body>
                Yes, we provide a 30-day warranty on all our AC services.
              </Accordion.Body>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Header eventKey="4">
                  Can I request the same professional for future services?
                </Accordion.Header>
              </Card.Header>
              <Accordion.Body>
                Yes, NR AGENCIES allows you to request the same professional for future services if you're satisfied with their work. We understand the importance of building trust and rapport with our customers.
              </Accordion.Body>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Header eventKey="5">
                  How are the professionals at NR AGENCIES trained?
                </Accordion.Header>
              </Card.Header>
              <Accordion.Body>
                Our professionals undergo rigorous training and certification programs to ensure they have the necessary skills and knowledge.
              </Accordion.Body>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Header eventKey="6">
                  How does the pricing of AC Services work?
                </Accordion.Header>
              </Card.Header>
              <Accordion.Body>
                The pricing for AC services varies based on the type of service (installation, maintenance, repair), the type of AC unit, location, and additional costs like parts and labor.
              </Accordion.Body>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Header eventKey="7">
                  Can I trust the professionals sent by NR AGENCIES?
                </Accordion.Header>
              </Card.Header>
              <Accordion.Body>
                  Absolutely! All our professionals are background verified, and our platform provides full insurance coverage. You can communicate directly with the assigned professional through our app for added peace of mind.
              </Accordion.Body>
            </Card>
          </Accordion>
        </div>
        <div className="col-md-4">
          <br />
          <h5>AC Repair & Service Near Me</h5>
          <p>Find AC Repair & Service near you.</p>
          <h5>You are here</h5>
          <p>Home / AC Repair & Service</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
