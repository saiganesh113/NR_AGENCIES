import React, { useState,useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import './Userdashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, } from 'react-scroll';
import { Card, CardBody, CardTitle, CardText, Button } from 'react-bootstrap'; 
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FAQ from './FAQ';
import { faShoppingCart,faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import { Modal, Badge } from 'react-bootstrap';
import {Chart as ChartJS,ArcElement,Tooltip,Legend,} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const Header = ({ cart, handleShowCart, notifications }) => {
  const [location, setLocation] = useState('Fetching location...');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
        },
        (error) => {
          setLocation('Location not available');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }
  }, []);

  return (
    <header className="d-flex justify-content-between align-items-center py-3">
      <div className="logo">logo here</div>
      <div className="location">{location}</div>
      <div className="icons d-flex">
        <Button variant="link" onClick={handleShowCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <Badge bg="secondary">{cart.length}</Badge>
        </Button>
        <Button variant="link" onClick={() => console.log('Show notifications')}>
          <FontAwesomeIcon icon={faBell} />
          <Badge bg="secondary">{notifications.length}</Badge>
        </Button>
      </div>
    </header>
  );
};

const UserDashboard = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);
  
    const fetchNotifications = async () => {
      const response = await fetch('/api/notifications');
      const data = await response.json();
      setNotifications(data);
    };
  
    const services = [
      {
        id: 1,
        name: 'Power Saver AC service',
        type: 'Split AC',
        price: 619,
        reviews: '4.82 (526.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 45 Mins',
        technology: 'Advanced Foam-jet technology',
        cleaning: 'Deep jet cleaning of outdoor unit',
        image: '/path/to/your/image.png',
      }, 
      {
        id: 2,
        name: 'Power Saver AC service',
        type: 'Window AC',
        price: 549,
        reviews: '4.82 (526.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 45 Mins',
        technology: 'Advanced Foam-jet technology',
        cleaning: 'Deep jet cleaning of outdoor unit',
        image: '/path/to/your/image.png',
      },
      {
        id: 3,
        name: 'Anti-rust AC service',
        type: 'Deep clean',
        price: 919,
        reviews: '3.12 (326.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 60 Mins',
        technology: 'Prevents frequent gas leakages through a unique anti-rust spray',
        cleaning: 'Application on both split and window AC',
        image: '/path/to/your/image.png',
      },
      {
        id: 4,
        name: 'AC service lite',
        type: 'Split',
        price: 519,
        reviews: '4.12 (426.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 30 Mins',
        technology: 'Basic water-jet cleaning of indoor unit',
        cleaning: 'Basic cleaning of outdoor unit',
        image: '/path/to/your/image.png',
      },
      {
        id: 5,
        name: 'AC service lite',
        type: 'Window AC',
        price: 449,
        reviews: '4.52 (526.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 30 Mins',
        technology: 'Basic water-jet cleaning of indoor unit',
        cleaning: 'Basic cleaning of outdoor unit',
        image: '/path/to/your/image.png',
      },
    ];
    
    const repair = [
      {
        id: 6,
        name: 'AC repair (split/window)',
        type: 'Less/no cooling',
        price: 299,
        reviews: '4.82 (426.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 60 Mins',
        technology: 'Detailed issue diagnosis with same day resolution',
        cleaning: 'Visit charges of ₹229 will be adjusted in the final bill',
        image: '/path/to/your/image.png',
      }, 
      {
        id: 7,
        name: 'AC repair (split/window)',
        type: 'Power on issue',
        price: 299,
        reviews: '4.85 (510.8K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 60 Mins',
        technology: 'Detailed issue diagnosis with same day resolution',
        cleaning: 'Visit charges of ₹229 will be adjusted in the final bill',
        image: '/path/to/your/image.png',
      },
      {
        id: 8,
        name: 'AC repair (split/window)',
        type: 'Unwanted noise/smell',
        price: 499,
        reviews: '4.12 (326.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 60 Mins',
        technology: 'Detailed issue diagnosis with same day resolution',
        cleaning: 'Visit charges of ₹229 will be adjusted in the final bill',
        image: '/path/to/your/image.png',
      },
      {
        id: 9,
        name: 'AC repair (split/window)',
        type: 'Water leakage',
        price: 619,
        reviews: '4.72 (126.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 30 Mins',
        technology: 'Detailed issue diagnosis with same day resolution',
        cleaning: 'Visit charges of ₹229 will be adjusted in the final bill',
        image: '/path/to/your/image.png',
      },
      {
        id: 10,
        name: 'AC repair (split/window)',
        type: 'Gas leak fix & refill',
        price: 2500,
        reviews: '4.52 (526.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 120 Mins',
        technology: 'Through diagnosis leak identification & fixing, gas refill to avoid leakage',
        image: '/path/to/your/image.png',
      },
    ];

    const install = [
      {
        id: 11,
        name: 'AC repair (split/window)',
        type: 'Window AC Installation',
        price: 1499,
        reviews: '4.25 (412.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 150 Mins',
        technology: 'Installation of indoor & outdoor units with free gas check',
        cleaning: 'Procurement of spare parts (at extra cost)',
        image: '/path/to/your/image.png',
      },
      {
        id: 12,
        name: 'AC Installation',
        type: 'Split AC Installation',
        price: 2399,
        reviews: '4.62 (512.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 150 Mins',
        technology: 'Installation of indoor & outdoor units with free gas check',
        cleaning: ' Procurement of spare parts (at extra cost)',
        image: '/path/to/your/image.png',
      },
      {
        id: 14,
        name: 'AC Uninstallation',
        type: 'Window AC Uninstallation',
        price: 999,
        reviews: '4.89 (115.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 60 Mins',
        technology: 'Uninstall of indoor & outdoor units',
        cleaning: 'AC packing (material to be provided by the customer)',
        image: '/path/to/your/image.png',
      }, 
      {
        id: 15,
        name: 'AC Uninstallation',
        type: 'Split AC Uninstallation',
        price: 299,
        reviews: '4.87 (119.2K reviews)',
        discount: '₹100 off 2nd item onwards',
        warranty: '30-DAY WARRANTY',
        time: 'Estimated time 60 Mins',
        technology: 'Uninstall of indoor & outdoor units',
        cleaning: ' AC cleaning (material to be provided by the customer)',
        image: '/path/to/your/image.png',
      },
    ];

    const handleAddToCart = (service) => {
      setCart([...cart, service]);
    };
  
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  
    const handleShowCart = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);
    const handlePayment = () => {
      // Implement payment logic here
      alert('Proceed to payment');
    };

    const allItems = [
      ...services,
      ...repair,
      ...install,
    ];
    
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const data = {
    labels: ['5 ★', '4 ★', '3 ★', '2 ★', '1 ★'],
    datasets: [
      {
        label: '# of Votes',
        data: [89.86, 4.07, 3.93, 3.71, 3.36],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };


  const reviews = [
    { name: 'Saurabh', date: 'July 2024', rating: 5, comment: 'Very nice service' },
    { name: 'Bharat', date: 'July 2024', rating: 5, comment: 'Very nice service and polite nature' },
    { name: 'Pawan', date: 'July 2024', rating: 5, comment: 'Good experience namaste shoaib sir❤️' },
    { name: 'Jagbeer', date: 'July 2024', rating: 5, comment: 'Good service' },
    { name: 'Saara', date: 'July 2024', rating: 5, comment: 'Like the politeness' },
    { name: 'Annu', date: 'July 2024', rating: 5, comment: 'Great experience' },
    { name: 'Zainul', date: 'July 2024', rating: 3, comment: "I didn't get 250 UC credit as confirmed by the Executive" },
    { name: 'Satyajeet', date: 'July 2024', rating: 5, comment: 'Very good 👍 service' },
  ];

  const content = [
    {
      title: 'Window AC Installation - A Symphony Of Simplicity',
      text: 'Experience hassle-free window AC installation with our expert services, ensuring seamless integration into your space. Enjoy simplicity and efficiency as we make your comfort our priority.'
    },
    {
      title: 'Window AC Service: Where Convenience Meets Expertise',
      text: 'Discover unparalleled convenience with our window AC service, where expertise ensures optimal performance. Trust our team to deliver top-tier care for your cooling needs.'
    },
    {
      title: 'Mastering The Split AC Installation Extravaganza',
      text: 'Embrace precision and excellence with our split AC installation services. Our experts ensure a seamless and perfectly choreographed setup for your ultimate comfort.'
    },
    {
      title: 'Proactive Measures: AC Service Booking For The Win',
      text: 'Stay ahead with our proactive AC service booking, guaranteeing top performance and longevity. Schedule easily and enjoy uninterrupted comfort all year round.'
    },
    {
      title: 'AC Services Tailored To You',
      text: 'Enjoy customized AC services designed to meet your unique needs. Our experts ensure your cooling system performs at its best, providing comfort and reliability.'
    },
    {
      title: 'Booking Made Easy: AC Service Application',
      text: 'In this fast-paced world, convenience is key. With our user-friendly ac service application, booking a service is just a tap away. No more waiting in queues or searching tirelessly for an "ac service near me," or "ac repair near me." We bring the expertise to your doorstep.'
    },
    {
      title: 'The Ballet Of Best AC Service Near You',
      text: 'In the realm of split ac, excellence is non-negotiable. Our services not only guarantee a seamless installation but also encompass the best ac service near you. We understand that your cooling experience begins with the installation, and we take pride in delivering nothing short of perfection.'
    },
    {
      title: 'The Art of Split AC Service: Keeping The Cool Vibes Alive',
      text: 'Once the split ac is on stage, the show must go on smoothly. Our split ac service is a testament to our commitment to keeping your cool vibes alive. From routine maintenance to unexpected hiccups, our experts are just a call away, ensuring your split ac remains the star of the show.'
    },
    {
      title: 'Home AC Service: Bringing Comfort Home',
      text: 'Your home deserves the best, and our home ac service is crafted to deliver just that. With a focus on efficiency and customer satisfaction, our experts ensure that your window ac not only cools your space but does so with the utmost reliability.'
    },
  ];

  const content1 = [
    {
      title1: "Transparent Pricing and Hassle-Free Transactions",
      text1: "No more hidden fees or sudden shocks! Urban Company ensures that you're aware of all your costs from the get-go. We believe in clear, straightforward pricing based on the selected services. Plus, with our digital payment methods, you can settle your service charges securely and at your convenience, even from the warmth of your home."
    },
    {
      title1: "Competitive Edge Over Others",
      text1: "Wondering why NR agencies stands out in the crowd? Unlike our competitors like NoBroker, OneAssist, and OnSiteGo, we prioritize not just fixing issues but providing an unparalleled experience. While others may focus on one aspect, NR Agencies is your holistic partner in ensuring your AC runs smoothly and efficiently."
    },
    {
      title1: "Convenience Redefined",
      text1: "Say goodbye to the hassle of searching 'ac service centre near me' – NR agencies brings the service center to your doorstep. Our on-time service and hassle-free experience ensure that you can sit back and relax while we take care of your AC troubles."
    },
    {
      title1: "Environmentally Friendly Practices",
      text1: "Are you troubled by the environmental implications of AC servicing? Put your worries aside, as we echo your thoughts. As a result, we opt for green and harmless solutions that pose zero risks to your loved ones, including the little ones and furry friends. With NR Agencies, achieve a chilly and cozy home without shirking from your eco-conscious duties."
    },
    {
      title1: "Comprehensive AC Solutions, Near Me",
      text1: "Whether it's Split or Window AC installation, repair, or a routine check-up, NR Agencies offers a comprehensive range of services tailored to your needs. From 'ac gas refill' to 'ac maintenance services,' we've got it all covered. Our commitment to being a one-stop solution for all your AC requirements sets us apart from the rest."
    },
    {
      title1: "Expertise that Speaks Volumes",
      text1: "At NR Agencies, we take pride in the expertise of our technicians. Our team is not just trained; they are seasoned professionals who understand the ins and outs of AC servicing, repair, and installation. When you choose us, you're not just getting a service; you're getting an experience backed by years of knowledge and hands-on expertise. No more settling for mediocre service – NR Agencies delivers excellence."
    },
    {
      title1: "Seamless Booking with a Click",
      text1: "NR Agencies understands that your time is precious. Our user-friendly platform allows you to book AC services near you with just a few clicks. No more hassle of finding 'ac service centre near you’ options – we've streamlined the process for your convenience. Your comfort is our priority, starting from the moment you decide to book our services."
    },
    {
      title1: "Trustworthiness You Can Count On",
      text1: "Trust is the cornerstone of any service, especially when it comes to something as vital as your AC. We understand the trust you place in us, and we reciprocate it with transparency and reliability. Our commitment to being the best in the business is reflected in every aspect of our service – from the first interaction to the final result. Choose NR Agencies for AC service and repair that you can trust without second-guessing."
    },
    {
      title1: "Unmatched Warranty and Satisfaction Guarantee",
      text1: "Our faith in the excellence of our efforts is solid, which is reflected in our 30-day service warranty. Should you face any hiccups during this span, remember, we are just a call away, ready to set it all straight, no inquisitions involved. Ensuring your happiness is our objective, and we would move mountains to make sure you are entirely pleased with the outcome."
    }
  ];

  return (
    <div className="container">

      <div>
            <Header cart={cart} handleShowCart={handleShowCart} notifications={notifications} />

            <Modal show={showCart} onHide={handleCloseCart}>
              <Modal.Header closeButton>
                <Modal.Title>Cart Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {cart.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <ul>
                    {cart.map((item, index) => {
                      const cartItem = allItems.find(service => service.id === item.id);
                      if (!cartItem) return null;
                      const discountedPrice = cartItem.price - 100;

                      return (
                        <li key={index} className="d-flex align-items-center mb-3">
                          <img src={cartItem.image} alt={cartItem.name} className="img-thumbnail mr-3" style={{ width: '50px', height: '50px' }} />
                          <div>
                            <h6>{cartItem.name}</h6>
                            <p>{cartItem.type}</p>
                            <p><s>₹{cartItem.price}</s> ₹{discountedPrice}</p>
                            <p>{cartItem.discount}</p>
                            <p>{cartItem.time}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
                <h5>Total Amount: ₹{totalAmount}</h5>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseCart}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => alert('Proceeding to Payment')}>
                  Proceed to Payment
                </Button>
              </Modal.Footer>
            </Modal>
      </div>

      {/* Video Placeholder */}
      <div className="video-placeholder mb-4">
        <div className="bg-light" style={{ height: '200px' }}></div>
      </div>

      {/* Service Section */}
      <div className="service-section mb-4">
        <h2>AC Repair & Services</h2>
        <p>#1 AC Installation, Repair & Services</p>
        <div className="rating mb-2">⭐⭐⭐⭐⭐ (6.75M Bookings)</div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="service-info p-3 bg-light">
                <div className="row-1">
                  <div>
                    <div>Certified Services & 30 days Warranty</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-info p-3 bg-light">
                <div className="row-2">
                  <div>
                    <div>All Offers & Discounts</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-info p-3 bg-light">
                <div className="row-3">
                  <div>
                    <div>Cashback up to 25%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Menu Bar */}
      <div className="container mt-5">
      <div className="floating-menu-container">
        <div className="menu-button-container">
          <button
            className="btn btn-primary floating-menu"
            id="menuButton"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
        <div className={`floating-menu-bar ${menuOpen ? 'show' : ''}`}>
          <Link
            to="service-section"
            smooth={true}
            duration={500}
            className="menu-option"
            onClick={toggleMenu} 
          >
            Service <FontAwesomeIcon icon={faToolbox} className="ms-2" />
          </Link>
          <Link
            to="repair-section"
            smooth={true}
            duration={500}
            className="menu-option"
            onClick={toggleMenu} 
          >
            Repair <FontAwesomeIcon icon={faScrewdriverWrench} className="ms-2" />
          </Link>
          <Link
            to="install-section"
            smooth={true}
            duration={500}
            className="menu-option"
            onClick={toggleMenu}
          >
            Install <FontAwesomeIcon icon={faPlus} className="ms-2" />
          </Link>
        </div>
      </div>
      <>
      <div id="service-section" className="d-flex justify-content-between align-items-center mb-2">
        <h2>Services</h2>
        <a href="#service-section" className="text-primary">Know more</a>
      </div>

      <div className="row">
        {services.map((service, index) => (
          <React.Fragment key={service.id}>
            {index === 3 && <div className="w-100"></div>}
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>{service.name}</b></p>
                      <h5 className="card-title">{service.type}</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">{service.reviews}</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹{service.price}</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">{service.discount}</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{service.warranty}</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{service.time}</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{service.technology}</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{service.cleaning}</small>
                        </li>
                      </ul>
                      <button onClick={() => handleAddToCart(service)} className="btn btn-primary">Add</button>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src={service.image} className="card-img-top" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      </>

      <>
      <div id="repair-section" className="d-flex justify-content-between align-items-center mb-2">
        <h2>Repair & Gas refill</h2>
        <a href="#repair-section" className="text-primary">Know more</a>
      </div>

      <div className="row">
        {repair.map((repair, index) => (
          <React.Fragment key={repair.id}>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>{repair.name}</b></p>
                      <h5 className="card-title">{repair.type}</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">{repair.reviews}</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹{repair.price}</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">{repair.discount}</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{repair.warranty}</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{repair.time}</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{repair.technology}</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{repair.cleaning}</small>
                        </li>
                      </ul>
                      <button onClick={() => handleAddToCart(repair)} className="btn btn-primary">Add</button>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src={repair.image} className="card-img-top" alt="Repair Image" />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      </>

      <>
      <div id="install-section" className="d-flex justify-content-between align-items-center mb-2">
        <h2>Install & Uninstall</h2>
        <a href="#install-section" className="text-primary">Know more</a>
      </div>

      <div className="row">
        {install.map((install, index) => (
          <React.Fragment key={install.id}>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>{install.name}</b></p>
                      <h5 className="card-title">{install.type}</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">{install.reviews}</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹{install.price}</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">{install.discount}</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{install.warranty}</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{install.time}</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{install.technology}</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>{install.cleaning}</small>
                        </li>
                      </ul>
                      <button onClick={() => handleAddToCart(install)} className="btn btn-primary">Add</button>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src={install.image} className="card-img-top" alt="Install Image" />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      </>
    </div>

      <React.StrictMode>
        <FAQ />
      </React.StrictMode>,

      <div className="container mt-12">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Customer Reviews</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Rating Distribution</h3>
          <div className="chart-container" style={{ position: 'relative', height: '400px', width: '400px' }}>
            <Pie data={data} options={options} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            {reviews.map((review, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>
                    <h6 className="card-subtitle mb-6 text-muted">{review.date}</h6>
                    <p className="card-text">{review.comment}</p>
                    <div className="text-warning">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    
      <div className="container">
      <h4 className="text-center mb-4">What are people near me looking for?</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <a><img src='/washing machine service.png' alt="Washing Machine Repair" className="img-fluid" /></a>
                </div>
                <div className="col-8">
                  <h5 className="card-title">Washing Machine Repair</h5>
                  <p className="card-text">Top Washing Machine Repair services near me</p>
                  <p className="card-text">Top-class reliable Washing Machine Repair services at your convenience near me. * Trained professionals * Best prices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <a><img src='/ac service.png' alt="AC repair" className="img-fluid" /></a>
                </div>
                <div className="col-8">
                  <h5 className="card-title">AC repair</h5>
                  <p className="card-text">Top AC services near me</p>
                  <p className="card-text">Top-class reliable AC services at your convenience near me. * Trained professionals * Best prices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div className="container mt-4">
      <h4 className="text-center mb-4">Spotting The Signs: When To Seek AC Service Near Me</h4>
      <div className="row">
        {content.map((item, index) => (
          <div className="col-md-4 mb-2" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      <div className="container mt-5">
      <h4 className="text-center mb-5">Why Choose Urban Company For Your AC Service And Repair Needs Near Me?</h4>
      <p className="text-center mb-4">Are you tired of searching for 'ac repair services near me' or 'split ac service near me' and ending up with more confusion than solutions? Look no further – Urban Company is here to redefine your AC service experience near your area. Wondering what sets us apart? Let's dive into the reasons why choosing Urban Company is the smart choice for all your AC needs.</p>
      <div className="row">
        {content1.map((item, index) => (
          <div className="col-md-4 mb-2" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title1">{item.title1}</h5>
                <p className="card-text1">{item.text1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="container mt-5">
        <h4 className="text-center mb-4">How To Book Your AC Service & Repair Services With Urban Company Near Me?</h4>
        <p className="text-center mb-5">Welcome to the seamless world of Urban Company's AC service & repair services! Book us now for a perfect AC service, AC repair, gas filling, AC installation and AC uninstallation near you.</p>

        <div className="row">
          <div className="col-md-6">
            <img src="path/to/your/image.png" alt="AC Service & Repair" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h6>Step 1: Visit Urban Company's App or Website</h6>
            <p>To embark on your AC service journey, simply open the Urban Company app or visit our website.</p>
            <p>Choose the ‘ac service & repair’ section to explore a plethora of services tailored just for you.</p>

            <h6>Step 2: Select Your Desired Service and Time Slot</h6>
            <p>Search for ‘ac service Near Me,’ ‘ac repair near me,’ ‘ac installation near me’ or ‘ac cleaning service’ near me.</p>
            <p>Browse through our extensive list of services, including foam jet AC service, power jet AC service, split AC repairs, window AC repairs, AC gas refill & recharge, AC installation & uninstallation.</p>
            <p>Pick the service that suits your needs and select a convenient time slot.</p>

            <h6>Step 3: Secure Online Payment & Flexible Options</h6>
            <p>Once you've finalized your booking, make a hassle-free and secure online payment through our app or website. You can conveniently reschedule or cancel the booking as per your needs.</p>
            <p>Enjoy peace of mind with our secure transaction process.</p>

            <h6>Step 4: Automatic Professional Assignment</h6>
            <p>Our advanced algorithms ensure that you get the best-suited professional for your chosen service based on availability, experience, and ratings.</p>
            <p>Urban Company takes the matchmaking out of selecting a skilled and trustworthy professional.</p>
          </div>
        </div>

        <div className="mt-5">
          <h6>Post-Service Options</h6>
          <p>Love the service and want to rebook the same professional? It's just a click away for our repeat customers.</p>
          <p>In case you have any questions or concerns after the service, our ‘Help Center’ is ready to assist you.</p>
          <p>After your professional is assigned, you can communicate with them through the Urban Company app. Have specific requests or questions? Feel free to chat!</p>
          <p>Why wait? Book now and treat your AC to the care it deserves!</p>
          <p>Now that you know the ins and outs of booking Urban Company’s AC Repair and Service, get ready to experience luxury as AC services like never before.</p>
        </div>
      </div>

      <Container className="mt-5">
      <h4 style={{ textAlign: 'center' }}>Discover Best AC Service Near Me: The Ultimate AC Cleaning Service By Urban Company</h4>
      <p>
        Welcome to the heart of our AC Repair and Service offerings! If you're searching for 'split ac service near me' or 'window ac service near me' or any related query, you've landed in the right place. Our mission is to ensure your ac operates at its peak efficiency, providing you with cool comfort throughout the year. Let's dive into the world of comprehensive ac service Booking with Urban Company.
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Foam & Power Jet AC Service Near Me - Unleash The Power Of Deep Cleaning</h4>
          <p style={{ fontSize: 'smaller', fontWeight : '100' }}>
            Picture this: your ac unit, breathing in the dusty air near you, becomes a sanctuary for debris, hindering its performance. But fear not, for our Foam & Power Jet ac Service swoops in like a superhero, rescuing your ac from the clutches of dirt and grime, ensuring perfections like the best ac Filter Cleaning.
          </p>
          <ul>
            <li>2X Deeper Dust Removal: With our innovative Foam + PowerJet technology, we ensure a thorough cleansing experience, leaving no particle behind.</li>
            <li>Pre-Service Checks: Our technicians conduct detailed inspections, including gas checks, to pinpoint any potential repairs.</li>
            <li>Mess-Free experience: Say goodbye to spills with our ac jacket, ensuring a tidy workspace post-service.</li>
            <li>Final Checks: We wrap up the service by ensuring proper functioning, checking for pipe blockages and drain tray leakages.</li>
            <li>Comprehensive Indoor & Outdoor Cleaning: From meticulously cleaning the indoor unit to powerfully rinsing the outdoor unit, we cover every nook and cranny.</li>
          </ul>
        </Col>
        <Col md={6}>
          <Image src="path-to-your-image.jpg" fluid alt="AC Service Image" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Power Jet AC Service - Elevate Your Cooling Experience</h4>
          <p>
            When it comes to enhancing cooling performance, our Power Jet AC Service is the knight in shining armor your AC deserves. Bid farewell to lackluster cooling and embrace a revamped chill with our specialized servicing.
          </p>
          <ul>
            <li style={{ fontSize: 'smaller', fontWeight : '100' }}>Pre & Post Service Checks: Our technicians leave no stone unturned, conducting thorough inspections before and after the service to ensure optimal functionality.</li>
            <li style={{ fontSize: 'smaller', fontWeight : '100' }}>Enhanced Cooling Performance: Say hello to a refreshing breeze as we work our magic, leaving your ac unit working at its best.</li>
            <li style={{ fontSize: 'smaller', fontWeight : '100' }}>Indoor & Basic Outdoor Cleaning: While we focus on intensively cleaning the indoor unit, we don’t skimp on ensuring the outdoor counterpart, ensuring enhanced overall servicing.</li>
          </ul>
        </Col>
        <Col md={6}>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Anti-Rust Deep Clean AC Service - Shield Your AC Against Rust</h4>
          <p>
            In the battle against rust-induced gas leakages, our Anti-Rust Deep Clean AC Service emerges victorious, safeguarding your ac's longevity and performance.
          </p>
          <ul>
            <li style={{ fontSize: 'smaller', fontWeight : '100' }}>Prevents Gas Leakages: Our unique anti-rust formula shields your ac from frequent gas leakages, ensuring long-lasting performance.</li>
            <li style={{ fontSize: 'smaller', fontWeight : '100' }}>Applicable on Split & Window AC: Whether you own a split or window AC, our anti-rust treatment has got you covered.</li>
          </ul>
        </Col>
      </Row>
      </Container>

      <Container className="mt-5">
      <h4 className="text-center">Your Guide To Top "AC Repair Near Me" Services</h4>
      <p style={{ fontSize: 'smaller', fontWeight : '100' }}>
        Hi there! Need an AC repair? We've got the details. Looking for "split AC repair near me"? Or maybe "window AC repair near me"? Whatever your cooling unit needs, our service has it covered. We'll take great care to fix your AC right up. Your comfort companion will be running like new in no time!
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <Image src="path-to-your-image.jpg" fluid alt="AC Repair Image" />
        </Col>
        <Col md={6}>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Understanding the Scope</h4>
          <p>
            Precision matters when your ac breaks down. Our repair technicians get deep inside your unit to find problems quickly, so it works great again. They take care of basic tune-ups and hard fixes with skill.
          </p>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Inclusions and Exclusions</h4>
          <p>
            Our ac repair service checks everything carefully. We clean and maintain parts like coils and filters completely. But you should know that some spare parts, like ac pcb repairs, might cost extra if we need them and don’t have them ready.
          </p>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Benefits Unveiled</h4>
          <p>
            Unleash continuous cooling bliss with our ac repair services near me wizardry. Wave ta-ta to irritating noises, patchy chills, and pesky drips! Our geniuses fine-tune your unit, granting uninterrupted refreshment and energy-saving prowess.
          </p>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>The Procedure Unveiled</h4>
          <p >
            Behold! Our repair ritual is simplicity incarnate. First, we scan your ac with eagle eyes, exposing any hiding issues. Then, with laser focus and mastery, we methodically conquer each problem. Quality parts and state-of-the-art tools? You betcha! Everlasting relief awaits.
          </p>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Details Matter</h4>
          <p>
            We know how crucial good attention to detail is. At Urban Company, thoroughness guides each repair service. Prior checks unlock complete understanding of the ac. Then an expert eye scans every part and function after service. Relax as a 30-day warranty promises stress-free reliability far beyond our visit.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Unlock Top-Notch AC Repair Services Near You With Urban Company</h4>
          <p>
            Air conditioner issues? No worries! Urban Company’s skilled professionals deliver stellar AC repair services. With extensive training and years of expertise, they prioritize your comfort and satisfaction. Their meticulous approach ensures a seamless experience.
          </p>
          <p>
            Don’t fret about AC repair complexities. Urban Company’s exceptional service has got you covered. Entrust your cooling companion to their capable hands. Experience unparalleled reliability and efficiency today. Enjoy a refreshing breeze of convenience and peace of mind.
          </p>
        </Col>
      </Row>
      </Container>

      <Container className="mt-5">
      <h4 className="text-center">Need An AC Gas Refill? Look No Further!</h4>
      <p>
        If you're looking for an "ac gas refill near me", you've come to the right place! At Urban Company, we understand the importance of a well-functioning air conditioning system, especially in the sweltering heat near me. Our ac gas refill service is designed to ensure that your ac unit is running smoothly and efficiently, providing you with cool and comfortable air all year round.
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <Image src="path-to-your-image.jpg" fluid alt="AC Gas Refill Image" />
        </Col>
        <Col md={6}>
          <h4>What To Expect With Our AC Gas Refill Service:</h4>
          <h4>Thorough Pre-Service Checks</h4>
          <p>
            Before starting the refill process, our expert technicians conduct a detailed inspection of your ac unit, including checking the gas levels to identify any repairs that may be needed.
          </p>
          <h4>Leak Identification and Fixing</h4>
          <p>
            Safety is our top priority. That’s why we use advanced techniques such as leak testing with nitrogen, compressed air, and soap solution to identify and fix any leaks in your ac system. Our technicians are skilled in brazing and recharging to ensure that your ac is leak-free.
          </p>
          <h4>Gas Refill</h4>
          <p>
            Once any leaks are fixed, we proceed with filling the gas by weight or back pressure, depending on the specific requirements of your ac unit. Our goal is to restore your AC’s cooling efficiency and performance.
          </p>
          <h4>Post-Service Cleanup</h4>
          <p>
            After completing the gas refill, our technicians perform a thorough cleanup of your ac unit and the surrounding service area, leaving no mess behind.
          </p>
          <h4>Final Checks</h4>
          <p>
            Before leaving, our technicians conduct final checks to ensure that your ac is functioning optimally. This includes checking AMP, pressure, air flow, temperature, and noise levels to guarantee your satisfaction.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 >Why Urban Company Provides The Best AC Gas Refill Near Me?</h4>
          <ul>
            <li>
              <strong>Expert Technicians:</strong> Our technicians are highly trained and experienced in handling all types of ac systems, ensuring a professional and reliable service every time.
            </li>
            <li>
              <strong>30 Day Warranty:</strong> We stand behind the quality of our work. That’s why we offer a 30-day warranty on our ac gas refill service, giving you peace of mind.
            </li>
            <li>
              <strong>Safety First:</strong> With Urban Company, you can trust that safety is our top priority. From background verified technicians to following strict SOPs for safety and hygiene, we ensure a safe and secure service experience.
            </li>
            <li>
              <strong>Eco Friendly Approach:</strong> We understand the importance of sustainability. That’s why we use eco-friendly and non-toxic products in all our services, ensuring a safe environment for your family and pets.
            </li>
            <li>
              <strong>Convenient Booking:</strong> Booking our ac gas refill service is easy and convenient. Simply visit our app or website, choose your service and preferred time slot, and leave the rest to us.
            </li>
          </ul>
          <p>
            When it comes to ac gas refill near you, Urban Company is your trusted partner. With our expert technicians, transparent pricing, and commitment to quality, you can rest assured that your ac unit is in good hands. So why wait? Book your ac gas refill with us today and enjoy the cool comfort of your home or office all year round!
          </p>
          <p><strong>Don’t let a faulty ac ruin your comfort. Book your ac gas refill service with Urban Company now!</strong></p>
        </Col>
      </Row>
      </Container>

      <Container className="mt-5">
      <h2 className="text-center">AC Installation & Uninstallation Near Me</h2>
      <p className="text-center">
        Welcome to the hassle-free world of ac installation and uninstallation with Urban Company! Whether you're looking to beat the heat with a brand new ac installation or bidding farewell to your old unit with our seamless uninstallation service, we've got you covered. Let's dive into the details of how our services like ac installation and ac uninstallation near you can make your life easier.
        <br/>
        If you are looking for "ac installation service near me" or "split ac installation near me", Look no further
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <Image src="path-to-your-installation-image.jpg" fluid alt="AC Installation Image" />
          <h4 className="mt-3">"AC Installation Near Me" Service</h4>
          <p>Comprehensive Installation</p>
          <p>
            Whether it's a split ac installation or a window ac installation, our professionals are equipped to handle it. From drilling and wiring connections to setting up the indoor and outdoor units, we take care of every aspect of the installation process.
          </p>
          <h4>Free Gas Check</h4>
          <p>
            Worried about gas leakage? Don't be. We include a thorough gas check as part of our installation service to ensure your ac operates efficiently without any leaks.
          </p>
          <h4>Standardized Equipment</h4>
          <p>
            We use advanced tools and high-quality materials for all our installations, guaranteeing efficient results and long-lasting performance.
          </p>
        </Col>
        <Col md={6}>
          <Image src="path-to-your-uninstallation-image.jpg" fluid alt="AC Uninstallation Image" />
          <h4 className="mt-3">"AC Uninstallation Near Me" Service</h4>
          <h4>Safe Removal</h4>
          <p>
            Our technicians will carefully uninstall both the indoor and outdoor units, ensuring no damage is caused to your property during the process.
          </p>
          <h4>Pipe Fixes</h4>
          <p>
            Worried about leftover pipes? We've got you covered. Our team will take care of any necessary pipe fixes, leaving your space tidy and free of clutter.
          </p>
          <h4>Cleanup</h4>
          <p>
            Once the uninstallation is complete, we'll clean up the service area, leaving it spotless and ready for the next steps.
          </p>
          <h4>Expert Advice</h4>
          <p>
            Have questions about your new AC, how to book ac service online or looking for recommendations? Our professionals are here to help. Feel free to ask for expert advice on maintenance, usage, and more.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 className="text-center">Choose Urban Company For AC Installation & Uninstallation, Choose Top-Notch Experience</h4>
          <p>
            At Urban Company, we prioritize the importance of a properly installed ac for your comfort and convenience. With our ac installation and uninstallation services, you can rest assured knowing that your cooling needs are in safe hands. Book your service today and experience the difference for yourself!
          </p>
        </Col>
      </Row>
      </Container>

      <Container>
      <Row className="mt-5">
        <Col md="12">
          <h4 className="text-center">Know More In Depth About AC Services And Repair Services By Urban Company Near Me</h4>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Power Jet AC Service (Window)</CardTitle>
              <CardText>
                Experience the intensity of our Powerlet AC service for window ACs. Enjoy intense cleaning of the indoor unit and basic cleaning of the outdoor unit. Conveniently available for AC service near me.
              </CardText>
              <ul>
                <li>Pre-service checks: Detailed inspection, including gas checks, to identify repairs</li>
                <li>Final checks: Technician ensures proper functions by checking pipe blockage & drain tray leakage at the end of the service.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Power Jet Split AC Service</CardTitle>
              <CardText>
                Seeking an enhanced cooling performance for your AC? Urban Company's Powerlet servicing is your answer. We offer an intense cleaning of the indoor unit and basic cleaning of the outdoor unit, ensuring your AC operates at its best.
              </CardText>
              <ul>
                <li>AC Cleaning: Deep cleaning of filters, coil, fins, and drain trays with the powerjet.</li>
                <li>Pre-service checks: Detailed inspection, including gas checks, to identify repairs</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Gas Leak Fix & Refill</CardTitle>
              <CardText>
                <ul>
                <li>Gas refill: Filling of the gas by weight/ back pressure.</li>
                <li>Post-service cleanup: Cleanup of the AC & service area.</li>
                <li>Final checks: Technician checks AMP, pressure, air flow, temp, noise level at the end to ensure quality.</li>
                <li>Leak identification & fixing: Leak testing with nitrogen, compressed air & soap solution. Fixing the leaks by brazing & rechecking.</li>
                <li>Pre-service checks: Voltage, ampere, pressure, and other safety checks.</li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Foam & Power Jet Window AC Service</CardTitle>
              <CardText>
                Discover the excellence of Urban Company's Foam + Powerlet technology for your window AC. For AC service near me, experience 2X deeper dust removal.
              </CardText>
              <ul>
                <li>Pre-service checks: Detailed inspection, including gas checks, to identify repairs</li>
                <li>AC Cleaning: Deep cleaning of filters, coil, fins, and drain trays with foam and powerjet.</li>
                <li>Final checks: The technician ensures proper functions by checking pipe blockage & drain tray leakage at the end of the service.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Anti-rust Deep Clean AC Service</CardTitle>
              <CardText>
                Prevent frequent gas leakages with our unique anti-rust formula, applicable to both split and window ACs. Enjoy a 30 days warranty for reliable AC repair near me with Urban Company.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">AC Repair (Split/Window)</CardTitle>
              <h6 className="mt-3">What are some common problems our AC repair service addresses?</h6>
              <ul>
                <li>Water Leakage</li>
                <li>Power Issue</li>
                <li>Less/No Cooling</li>
              </ul>
              <h6 className="mt-3">What's Included!</h6>
              <ul>
                <li>Enjoy a 30 days warranty.</li>
                <li>AC repair using high-quality spare parts & tools</li>
                <li>Final checks & cleanup.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Foam & Power Jet AC Service (Split AC)</CardTitle>
              <CardText>
                Looking for reliable AC service near me? Urban Company's Foam + Powerlet technology offers an unparalleled experience, providing 2X deeper dust removal. We guarantee an intense cleaning of both indoor and outdoor units, going beyond the surface to give your AC the treatment it deserves.
              </CardText>
              <ul>
                <li>Indoor unit cleaning: Deep cleaning of filters, coil, fins, and drain trays with foam and powerjet.</li>
                <li>Mess-free experience: AC jacket for spill prevention during service and post-service cleanup.</li>
                <li>Pre-service checks: A detailed inspection, including gas checks, to identify repairs</li>
                <li>Final checks: Our technician ensures proper functions by checking pipe blockage & drain tray leakage at the end of the service.</li>
                <li>Outdoor unit cleaning: Thorough cleaning with a powerjet, ensuring a mess-free experience.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Service Comparison from other competitors</CardTitle>
              <ul>
                <li>Internal Parts Cleaning: Urban Company ensures the cleaning of all internal parts, a feature uncertain in others services.</li>
                <li>Cleaning Tools: We utilize foam cleaning & powerjet, setting us apart from manual cleaning with brush & water.</li>
                <li>Warranty: Enjoy a 30-day warranty with Urban Company, a benefit others may not provide</li>
                <li>Impact on cooling coil: Urban Company ensures no impact on the cooling coil, unlike others who use brush cleaning, increasing the chances of coil bending.</li>
                <li>Expected life: Urban Company: 2-3 years, Others 1-3 months.</li>
                <li>AC power consumption: Low after Urban Company service, high after others services.</li>
                <li>Gas Leak Identification & Leak Fixing: Urban Company provides this service while others don't.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </Container>

      <Container className="mt-5">
      <h4 className="text-center mb-4">Know More In Depth About AC Services And Repair Services By Urban Company Near Me</h4>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">Power Jet AC Service (Window)</Card.Header>
            <Card.Body>
              <p>Experience the intensity of our Powerlet AC service for window ACs. Enjoy intense cleaning of the indoor unit and basic cleaning of the outdoor unit. Conveniently available for AC service near me.</p>
              <ul>
                <li>Pre-service checks: Detailed inspection, including gas checks, to identify repairs</li>
                <li>Final checks: Technician ensures proper functions by checking pipe blockage & drain tray leakage at the end of the service.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">Anti-rust Deep Clean AC Service</Card.Header>
            <Card.Body>
              <p>Prevent frequent gas leakages with our unique anti-rust formula, applicable to both split and window ACs. Enjoy a 30 days warranty for reliable AC repair near me with Urban Company.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">Power Jet Split AC Service</Card.Header>
            <Card.Body>
              <p>Seeking an enhanced cooling performance for your AC? Urban Company's Powerlet servicing is your answer. We offer an intense cleaning of the indoor unit and basic cleaning of the outdoor unit, ensuring your AC operates at its best.</p>
              <ul>
                <li>AC cleaning: Deep cleaning of filters, coil, fins, and drain trays with the powerjet.</li>
                <li>Pre-service checks: Detailed inspection, including gas checks, to identify repairs</li>
                <li>Final checks: The technician ensures proper functions by checking pipe blockage & drain tray leakage at the end of the service.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">AC Repair (Split/Window)</Card.Header>
            <Card.Body>
              <p>For a detailed issue diagnosis and same-day resolution, Urban Company's AC repair services near me have you covered. Whether it's less/no cooling, power on issues, unwanted noise/smell, or water leakage, we provide a 30 days warranty for all repairs.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">Gas Leak Fix & Refill</Card.Header>
            <Card.Body>
              <ul>
                <li>Gas refill: Filling of the gas by weight/ back pressure.</li>
                <li>Post-service cleanup: Cleanup of the AC & service area.</li>
                <li>Final checks: Technician checks AMP, pressure, air flow, temp, noise level at the end to ensure quality.</li>
                <li>Leak identification & fixing: Leak testing with nitrogen, compressed air & soap solution. Fixing the leaks by brazing & rechecking.</li>
                <li>Pre-service checks: Voltage, ampere, pressure, and other safety checks.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">Foam & Power Jet Window AC Service</Card.Header>
            <Card.Body>
              <p>Discover the excellence of Urban Company's Foam + Powerlet technology for your window AC. For AC service near me, experience 2X deeper dust removal.</p>
              <ul>
                <li>Pre-service checks: Detailed inspection, including gas checks, to identify repairs</li>
                <li>AC cleaning: Deep cleaning of filters, coil, fins, and drain trays with foam and powerjet.</li>
                <li>Final checks: The technician ensures proper functions by checking pipe blockage & drain tray leakage at the end of the service.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>

      <div className="container mt-5">
      <h4 className="text-center mb-4">About AC Repair & Service</h4>

      <h4 className="mb-3">Services Offered in AC Service And Repair</h4>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          <strong>Repairs:</strong> Choose this option for diagnosis and repair of your ac. The professional will check the ac upon visitation and provide with
          quotation depending on the condition of the appliance.
        </li>
        <li className="list-group-item">
          <strong>Installing an AC:</strong> Choose this service for ac installation at your place. The professional will ensure that the ac is running properly
          as gas pressure and performance of the appliance will be checked post ac installation.
        </li>
        <li className="list-group-item">
          <strong>Wet services:</strong> This service includes an end to end cleaning of your ac (which is not faulty). Cooling coils, condenser coils, outer
          panel, drain and filet pipes will be extensively cleaned and washed. However, high-pressure jet pumps will not be used for the cleaning purpose. Tick this service
          when you want your ac to be properly cleaned.
        </li>
        <li className="list-group-item">
          <strong>Uninstalling an existing ac:</strong> Select this option when you need professionals to dismount an ac. The appliance will be checked before the
          ac uninstallation.
        </li>
      </ul>

      <h4 className="mb-3">Why Urban Company AC Service And Repair?</h4>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          <strong>Customer Centric:</strong> All our services are curated keeping our customers in mind and AC repair service is no exception.
        </li>
        <li className="list-group-item">
          <strong>Customer Protection:</strong> Unlike any other service provider, Urban Company provides a customer protection of Rs. 10,000 against damages.
        </li>
        <li className="list-group-item">
          <strong>Verified Professionals:</strong> All the professionals on board with Urban Company are taken through a screening process to check for their expertise.
        </li>
        <li className="list-group-item">
          <strong>Standardized pricing:</strong> To save our customers from unfair pricing, we have come up with the idea of standardized pricing with the rate card
          shared on both our website and App.
        </li>
        <li className="list-group-item">
          <strong>Service Warranty:</strong> We at Urban Company take full ownership of our services and hence, this is the reason that we provide a service
          warranty of 30 days.
        </li>
        <li className="list-group-item">
          <strong>Online payment:</strong> Now pay hassle free post your service through our online portal. You will receive a link via SMS and/or email which will
          take you to the online payment portal.
        </li>
      </ul>

      <p className="mb-4">
        Like any other machinery, an appliance such as ac needs to be maintained and looked after for its healthy functioning. Hence, the appliance should
        receive a proper service before the start of summer season. After all, nothing can be worse than a broken or faulty ac. Hunting a service personnel
        for ac repair in the sultry weather can be a hassle. You can now book a professional either for service and repair within minutes from your home. You don't
        even need to clear your schedule as you can choose your desirable time slot. Urban Company's ac repair service has proven to be a blessing for our
        customers as we continue to receive happy testimonials and ratings from our customers.
      </p>

      <h4 className="mb-3">How it works?</h4>
      <p className="mb-4">
        To find the best professionals near you in no time, you just need to go on the Urban Company website or App and search for 'AC Repair' in the search
        tab. A pop up tab will open up wherein you will need to fill in the details according to your requirements. Questions such as what kind of service is
        required - split ac or window ac, location, time, etc. compromise the questionnaire. Once your request is uploaded on the portal, a professional
        will be at your doorstep at your requested time and location.
      </p>
      </div>

      <footer className="footer mt-5 py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Terms & conditions</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Anti-discrimination policy</a></li>
              <li><a href="#">UC impact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>For customers</h5>
            <ul className="list-unstyled">
              <li><a href="#">UC reviews</a></li>
              <li><a href="#">Categories near you</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>For partners</h5>
            <p>Register as a professional</p>
          </div>
          <div className="col-md-3">
            <h5>Social links</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
            <div className="mt-3">
              <a href="#" className="btn btn-outline-secondary btn-sm"><i className="fab fa-apple"></i> App Store</a>
              <a href="#" className="btn btn-outline-secondary btn-sm ml-2"><i className="fab fa-google-play"></i> Google Play</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="mb-0">© Copyright 2024 Urban Company. All rights reserved. | CIN: U74140DL2014PTC274413</p>
      </div>
      </footer>

    </div>
  );
};
export default UserDashboard;
