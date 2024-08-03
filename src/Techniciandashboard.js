import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col, Card, Badge, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle, faHome, faClipboardList, faCalendarAlt, faChartLine, faSignOutAlt, faBorderAll, faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Techniciandashboard.css';
import moment from 'moment';
import ChartComponent from './ChartComponent'; // Import the chart component
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Bar } from 'react-chartjs-2';
import PieChart from './piechart';
import { useHistory } from 'react-router-dom';

const TechnicianDashboard = () => {
  const [location, setLocation] = useState('Fetching location...');
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [schedules, setSchedules] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [personalDetails, setPersonalDetails] = useState({
    photo: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    dateOfBirth: '',
    address: '',
    aadharNumber: '',
    panNumber: ''
  });
  const [activeSection, setActiveSection] = useState('dashboard');
  const [orders, setOrders] = useState([
    { id: 1, name: 'John Smith.M', service: 'Power saver AC services', details: ['Split AC - 599', 'Anti-rust spray - 299'], allowed: false, location: 'Location A' },
    { id: 2, name: 'John Smith.M', service: 'Power saver AC services', details: ['Split AC - 599', 'Anti-rust spray - 299'], allowed: false, location: 'Location B' },
    { id: 3, name: 'John Smith.M', service: 'Power saver AC services', details: ['Split AC - 599', 'Anti-rust spray - 299'], allowed: false, location: 'Location C' }
  ]);

  useEffect(() => {
    setSchedules([
      { date: moment().add(1, 'day').format('YYYY-MM-DD'), tasks: 3 }, // Example: 3 tasks scheduled for tomorrow
      { date: moment().add(2, 'day').format('YYYY-MM-DD'), tasks: 2 } // Example: 2 tasks scheduled for the day after tomorrow
    ]);
  }, []);

  const earnings = 200000;
  const workCompletionRate = 75;
  const acAndInvoices = 25;
  const customerRating = 4.5;
  const acService = 10; // example value
  const washingMachineService = 5; // example value
  const timeCommitment = 20;

  useEffect(() => {
    // Simulate fetching notifications
    setNotifications([
      { id: 1, message: 'New job assigned' },
      { id: 2, message: 'Job review received' },
    ]);

    // Fetch the current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
        },
        (error) => {
          setLocation('Location not available');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }
  }, []);

  const handleProfileClick = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
  };

  const handleEdit = () => setEditMode(true);

  const handleSave = () => {
    setEditMode(false);
    setShowModal(false);
    console.log('Personal Details Saved:', personalDetails);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersonalDetails({
          ...personalDetails,
          photo: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSectionChange = (section) => setActiveSection(section);

  const handleOrderAction = (orderId, action) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, allowed: action === 'allowed' } : order
    ));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const selectedDateTasks = schedules.find(schedule => schedule.date === moment(selectedDate).format('YYYY-MM-DD'))?.tasks || 0;

  const chartData = {
    labels: ['AC Services', 'Washing Machine Services'],
    datasets: [
      {
        label: 'Services Completed',
        data: [acService, washingMachineService],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)']
      }
    ]
  };

  const history = useHistory();

  const handleLogout = () => {
    history.push('/login');
  };

  return (
    <Container fluid className="mobile-dashboard p-0">
      <Row className="header d-flex justify-content-between align-items-center py-3 mx-0">
        <Col xs={3} className="d-flex align-items-center">
          <Button variant="link" onClick={handleProfileClick}>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </Button>
        </Col>
        <Col xs={6} className="d-flex align-items-center text-center">
          <span>{location}</span>
        </Col>
        <Col xs={3} className="text-right">
          <Button variant="link" onClick={() => console.log('Show notifications')}>
            <FontAwesomeIcon icon={faBell} size="2x" />
            <Badge bg="secondary">{notifications.length}</Badge>
          </Button>
        </Col>
      </Row>

      {activeSection === 'dashboard' && (
      <Container fluid className="px-2 py-3">
          <Row className="my-4">
          <Col className="d-flex justify-content-center">
          <div style={{ width: '50%'}}>
            <PieChart
              acService={acService}
              washingMachineService={washingMachineService}
              workCompletionRate={workCompletionRate}
              customerRating={customerRating}
              timeCommitment={timeCommitment}
            />
          </div>
        </Col>
      </Row>
        
            <Row>
              <Col>
                <Card className="text-center mb-3">
                  <Card.Body>
                    <Card.Title className="display-4">${earnings.toLocaleString()}</Card.Title>
                    <Card.Text>Total Earnings</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        
            <Row>
              <Col xs={12} >
                <Card className="text-center mb-3">
                  <Card.Body>
                    <Card.Title>Work Completion Rate</Card.Title>
                    <Card.Text>{workCompletionRate}%</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                <Card className="text-center mb-3">
                  <Card.Body>
                    <Card.Title>AC & Invoices</Card.Title>
                    <Card.Text>{acAndInvoices}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                <Card className="text-center mb-3">
                  <Card.Body>
                    <Card.Title>Customer Rating</Card.Title>
                    <Card.Text>{customerRating} / 5</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
      )}

      {activeSection === 'orders' && (
        <Row className="my-4 justify-content-center">
          <Col xs={10} md={8} className="mx-auto">
            {orders.map((order) => (
              <Card key={order.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{order.name}</Card.Title>
                  <Card.Text>
                    <strong>Service:</strong> {order.service}
                    <ul>
                      {order.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="danger" onClick={() => handleOrderAction(order.id, 'denied')}>Deny</Button>
                    <Button variant="success" onClick={() => handleOrderAction(order.id, 'allowed')}>Allow</Button>
                  </div>
                  {order.allowed && (
                    <div className="mt-3">
                      <p><strong>Estimated Time:</strong> 2 hours</p>
                      <p><strong>Mobile No:</strong> xxxxxxxxxx</p>
                      <p><strong>Location:</strong> {order.location}</p>
                    </div>
                  )}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      )}

      {activeSection === 'schedules' && (
        <Row>
          <Col xs={12} md={10} className="mx-auto">
            <Card className="text-center mb-3">
              <Card.Body>
                <Card.Title>Schedules</Card.Title>
                <div className="d-flex justify-content-center">
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="text-center mb-3"
                  />
                </div>
                <Card.Text style={{ border: '1px solid #ccc', padding: '10px', fontSize: 'medium' }}>
                  <strong>Tasks on {moment(selectedDate).format('MMMM Do, YYYY')}:</strong> {selectedDateTasks}
                </Card.Text>
                <Bar data={chartData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {activeSection === 'performance' && (
        <Row className="my-4">
        <Col>
          <ChartComponent 
            data={{
              acService,
              washingMachineService,
              timeCommitment,
              workCompletionRate,
              customerRating
            }} 
          />
        </Col>
      </Row> 
      )}

      <Row className="menu-bar fixed bottom-0 w-100 mx-0">
        <Col className="text-center">
          <Button variant="link" onClick={() => handleSectionChange('dashboard')}>
            <FontAwesomeIcon icon={faHome} />
            <span className="d-block">Dashboard</span>
          </Button>
        </Col>
        <Col className="text-center">
          <Button variant="link" onClick={() => handleSectionChange('orders')}>
            <FontAwesomeIcon icon={faClipboardList} />
            <span className="d-block">Orders</span>
          </Button>
        </Col>
        <Col className="text-center">
          <Button variant="link" onClick={() => handleSectionChange('schedules')}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className="d-block">Schedules</span>
          </Button>
        </Col>
        <Col className="text-center">
          <Button variant="link" onClick={() => handleSectionChange('performance')}>
            <FontAwesomeIcon icon={faChartLine} />
            <span className="d-block">Performance</span>
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editMode ? (
            <Form>
              <Form.Group controlId="photo">
                <Form.Label>Profile Photo</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </Form.Group>
              {personalDetails.photo && (
                <div className="photo-container">
                  <img src={personalDetails.photo} alt="Profile" className="profile-photo" />
                </div>
              )}
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={personalDetails.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={personalDetails.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="mobileNumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobileNumber"
                  value={personalDetails.mobileNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={personalDetails.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  value={personalDetails.dateOfBirth}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={personalDetails.address}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="aadharNumber">
                <Form.Label>Aadhar Number</Form.Label>
                <Form.Control
                  type="text"
                  name="aadharNumber"
                  value={personalDetails.aadharNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="panNumber">
                <Form.Label>PAN Number</Form.Label>
                <Form.Control
                  type="text"
                  name="panNumber"
                  value={personalDetails.panNumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          ) : (
            <div>
              {personalDetails.photo && (
                <div className="photo-container">
                  <img src={personalDetails.photo} alt="Profile" className="profile-photo" />
                </div>
              )}
              <p><strong>First Name:</strong> {personalDetails.firstName}</p>
              <p><strong>Last Name:</strong> {personalDetails.lastName}</p>
              <p><strong>Mobile Number:</strong> {personalDetails.mobileNumber}</p>
              <p><strong>Email:</strong> {personalDetails.email}</p>
              <p><strong>Date of Birth:</strong> {personalDetails.dateOfBirth}</p>
              <p><strong>Address:</strong> {personalDetails.address}</p>
              <p><strong>Aadhar Number:</strong> {personalDetails.aadharNumber}</p>
              <p><strong>PAN Number:</strong> {personalDetails.panNumber}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleLogout} className="me-auto">
            Logout
          </Button>
          {editMode ? (
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleEdit}>
              Edit
            </Button>
          )}
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TechnicianDashboard;

