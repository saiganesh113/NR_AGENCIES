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
// change DONE
  const content = [
    {
      title: 'Window AC Installation - Simple & Smoot',
      text: 'Get ready for some easy window AC installation! Our team is here to help, making sure your unit fits perfectly into your space. We focus on keeping you comfy—your comfort is our top goal!'
    },
    {
      title: 'Window AC Service: Easy & Expert Care',
      text: 'You’ll love the convenience of our AC service. With our skilled team, you’ll get the best performance for your cooling needs. Trust us with your comfort; we’ve got it covered!'
    },
    {
      title: 'Mastering Split AC Installation',
      text: 'When it comes to split AC installation, we know what we’re doing! Our experts are all about making sure everything is set up just right. Your comfort matters, and we deliver.'
    },
    {
      title: 'Proactive Steps: Book Your AC Service',
      text: 'Stay ahead of the game with our proactive service booking for your AC. This way, you ensure everything runs smoothly & lasts longer. It’s easy to book, so you can keep enjoying comfort throughout the year.'
    },
    {
      title: 'Tailored AC Services Just for You',
      text: 'Enjoy customized AC services designed to meet your unique needs. Our experts ensure your cooling system performs at its best, providing comfort and reliability.'
    },
    {
      title: 'Easy Booking with Our AC Service App',
      text: 'Life’s busy, and we get that! Using our simple app, booking service takes only a tap. No more long waits or endless searching for an "AC service near me". We bring the experts right to your door.'
    },
    {
      title: 'The Best AC Service Near You',
      text: 'In the split AC world, excellence matters a lot! Our services promise not just smooth installation but also the best support nearby. We know that your cooling journey starts with a great setup, and we take pride in perfecting it.'
    },
    {
      title: 'Keeping Things Cool: Split AC Service',
      text: 'Once your split AC is up & running, we ensure everything stays cool. Our service shows how much we care about keeping those chill vibes alive! From regular check-ups to quick fixes, just call us—we’re always here to keep things running smoothly.'
    },
    {
      title: 'Home AC Service: Brings Comfort Home',
      text: 'Your home deserves top-notch care! Our home AC service aims to make sure you get exactly that. With a strong focus on efficiency and keeping customers happy, we ensure your window AC doesn’t just cool but does its job reliably day in and day out.'
    },
  ];
// change DONE
  const content1 = [
    {
      title1: "Transparent Pricing and Hassle-Free Deals",
      text1: "No more retired freights or unforeseen shocks! NR Agencies ensures that you are apprehensive of all your costs from the progeny- go. We believe in clear, straightforward pricing grounded on the named services. Plus, with our digital payment styles, you can settle your service charges securely and at your convenience, indeed from the warmth of your home."
    },
    {
      title1: "Competitive Edge Over Others",
      text1: "Wondering why NR Agencies stands out in the crowd? Unlike our challengers like NoBroker, OneAssist, and OnSiteGo, we prioritize not just fixing issues but furnishing an unequaled experience. While others may concentrate on one aspect, NR Agencies is your holistic mate in icing your AC runs easily and efficiently."
    },
    {
      title1: "Convenience Readdressed",
      text1: "Say farewell to the hassle of searching' ac service centre near me' – NR agencies brings the service center to your doorstep. Our on- time service and hassle-free experience insure that you can sit back and relax while we take care of your AC troubles."
    },
    {
      title1: "Environmentally Friendly Practices",
      text1: "Are you troubled by the environmental counteraccusations of AC servicing? Put your worries away, as we echo your studies. As a result, we conclude for green and inoffensive results that pose zero pitfalls to your loved bones, including the little bones and furry musketeers. With NR Agencies, achieve a chilly and cozy home without shirking from youreco-conscious duties."
    },
    {
      title1: "Comprehensive AC Solutions, Near By",
      text1: "Whether it's Split or Window AC installation, form, or a routine check- up, NR Agencies offers a comprehensive range of services acclimatized to your requirements. From' ac gas cache' to' ac conservation services,' we have got it all covered. Our commitment to being a one- stop result for all your AC conditions sets us piecemeal from the rest."
    },
    {
      title1: "Expertise that Speaks Volumes",
      text1: "At NR Agencies, we take pride in the moxie of our technicians. Our platoon isn't just trained; they're seasoned professionals who understand the sways and outs of AC servicing, form, and installation. When you choose us, you are not just getting a service; you are getting an experience backed by times of knowledge and hands- on moxie. No more settling for medium service – NR Agencies delivers excellence."
    },
    {
      title1: "Flawless Booking with a Click",
      text1: "NR Agencies understands that your time is precious. Our stoner-friendly platform allows you to bespeak AC services near you with just a many clicks. No more hassle of finding' ac service centre near you ’ options – we have streamlined the process for your convenience. Your comfort is our precedence, starting from the moment you decide to bespeak our services."
    },
    {
      title1: "Responsibility You Can Count On Us",
      text1: "Trust is the foundation of any service, especially when it comes to commodity as vital as your AC. We understand the trust you place in us, and we repay it with translucency and trustability. Our commitment to being the stylish in the business is reflected in every aspect of our service – from the first commerce to the final result. Choose NR Agencies for AC service and form that you can trust without alternate- guessing."
    },
    {
      title1: "Unmatched Bond and Satisfaction Guarantee",
      text1: "Our faith in the excellence of our sweats is solid, which is reflected in our 30- day service bond. Should you face any interruptions during this span, flash back , we're just a call down, ready to set it all straight, no probations involved. icing your happiness is our ideal, and we'd move mountains to make sure you're entirely pleased with the outgrowth."
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
{/* change DONE*/}
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
      <h4 className="text-center mb-4">Spotting The Signs: When To Seek AC Service Near By</h4>
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
      <h4 className="text-center mb-5">Why Choose NR Agencies For Your AC Service And Repair Needs Near Me?</h4>
      <p className="text-center mb-4">Are you tired of searching for' ac form services near me' or' disunited ac service near me' and ending up with further confusion than results? Look no farther – NR Agencies is then to review your AC service experience near your area. Wondering what sets us piecemeal? Let's dive into the reasons why choosing NR Agencies is the smart choice for all your AC needs.</p>
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
      </div>How To Book Your AC Service & Repair Services With NR Agencies Near Me?

      <div className="container mt-5">
        <h4 className="text-center mb-4"></h4>
        <p className="text-center mb-5">Welcome to the seamless world of NR Agencies's AC service & repair services! Book us now for a perfect AC service, AC repair, gas filling, AC installation and AC uninstallation near you.</p>
{/* change DONE*/}
        <div className="row">
          <div className="col-md-6">
            <img src="path/to/your/image.png" alt="AC Service & Repair" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h6>Step 1: Visit NR Agencies App or Website</h6>
            <p>To embark on your AC service journey, simply open the NR Agencies app or visit our website.</p>
            <p>Choose the ‘AC service & repair’ section to explore a plethora of services acclimatized just for you.</p>

            <h6>Step 2: Select Your Desired Service and Time Slot</h6>
            <p>Search for ‘AC service Near Me,’ ‘AC repair near me,’ ‘AC installation near me’ or ‘AC cleaning service’ near me.</p>
            <p>Browse through our extensive list of services, including foam jet AC service, power jet AC service, split AC repairs, window AC repairs, AC gas refill & recharge, AC installation & uninstallation.</p>
            <p>Pick the service that suits your needs and select a desired time slot.</p>

            <h6>Step 3: Secure Online Payment & Flexible Options</h6>
            <p>Once you've finalized your booking, make a hassle-free and secure online payment through our app or website. You can easily reschedule or cancel the booking as per your needs.</p>
            <p>Enjoy peace of mind with our secure transaction process.</p>

            <h6>Step 4: Automatic Professional Assignment</h6>
            <p>Our advanced algorithms ensure that you get the best-suited professional for your chosen service based on availability, experience, conditions and ratings.</p>
            <p>NR Agencies takes the matchmaking out of opting a professed and secure professional.</p>
          </div>
        </div>
{/* change DONE*/}
        <div className="mt-5">
          <h6>Post-Service Choices</h6>
          <p>Adore the benefit and need to rebook the same proficient? It's fair a tap down for our repeat visitors.</p>
          <p>In case you have any questions or endeavors after the benefit, our ‘ Offer assistance Center’ is prepared to offer assistance you.</p>
          <p>After your proficient is doled out, you can communicate with them through the NR Organizations app. Have particular demands or questions? Feel free to sputter!</p>
          <p>Why remain? Book presently and treat your AC to the care it merits!</p>
          <p>Presently that you know the influences and outs of saving NR Offices AC Repair and Benefit, get prepared to witness extravagance as AC administrations like noway ahead.</p>
        </div>
      </div>
{/* change DONE*/}
      <Container className="mt-5">
      <h4 style={{ textAlign: 'center' }}>Find Best AC Service Near Me: The Extreme AC Cleaning Service By NR Agencies</h4>
      <p>
        Welcome to the heart of our AC Repair and Service offerings! If you're looking for 'split ac service near me' or 'window ac service near me' or any related inquiry, you've landed in the right place. Our mission is to guarantee your ac works at its top productivity, giving you with cool consolation all through the year. Let's jump into the world of comprehensive ac service Booking with NR Agencies.
      </p>
{/* change DONE*/}
      <Row className="mt-4">
        <Col md={6}>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Foam & Power Jet AC Service Near Me - Unleash The Power Of Profound Cleaning</h4>
          <p style={{ fontSize: 'smaller', fontWeight : '100' }}>
          Picture this: your ac unit, breathing in the dusty air near you, gets to be a haven for flotsam and jetsam, preventing its execution. But fear not, for our Foam & Power Jet ac Service swoops in like a superhero, protecting your ac from the clutches of dirt and grime, guaranteeing excellencies like the best ac Channel Cleaning.
          </p>
          <ul>
            <li>2X More profound Dust Evacuation: With our inventive Foam + PowerJet innovation, we guarantee a exhaustive cleansing involvement, clearing out no molecule behind.</li>
            <li>Pre-Service Checks: Our professionals conduct point by point inspections, counting gas checks, to pinpoint any potential repairs.</li>
            <li>Mess-Free experience: Say farewell to spills with our ac coat, guaranteeing a clean workspace post-service.</li>
            <li>Final Checks: We wrap up the service by guaranteeing legitimate working, checking for pipe blockages and drain plate leakages.</li>
            <li>Comprehensive Indoor & Open air Cleaning: From fastidiously cleaning the indoor unit to effectively flushing the open air unit, we cover each niche and cranny.</li>
          </ul>
        </Col>
        <Col md={6}>
          <Image src="path-to-your-image.jpg" fluid alt="AC Service Image" />
        </Col>
      </Row>
{/* change DONE*/}
      <Row className="mt-4">
        <Col md={6}>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Power Jet AC Service - Raise Your Cooling Experience</h4>
          <p>
          When it comes to improving cooling execution, our Control Jet AC Service is the knight in sparkling armor your AC merits. Offered goodbye to lackluster cooling and grasp a patched up chill with our specialized servicing.
          </p>
          <ul>
            <li style={{ fontSize: 'smaller', fontWeight : '100' }}>Pre & Post Service Checks: Our professionals take off no stone unturned, conducting exhaustive reviews some time recently and after the benefit to guarantee ideal functionality.</li>
            <li style={{ fontSize: 'smaller', fontWeight : '100' }}>Enhanced Cooling Execution: Say hi to a reviving breeze as we work our enchantment, clearing out your ac unit working at its best.</li>
            <li style={{ fontSize: 'smaller', fontWeight : '100' }}>Indoor & Essential Open air Cleaning: Whereas we center on expectation cleaning the indoor unit, we don’t hold back on guaranteeing the open air partner, guaranteeing improved in general servicing.</li>
          </ul>
        </Col>
        <Col md={6}>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Anti-Rust Profound Clean AC Service - Shield Your AC Against Rust</h4>
          <p>
          In the fight against rust-induced gas spillages, our Anti-Rust Profound Clean AC Service develops triumphant, shielding your ac's life span and performance.
          </p>
          <ul>
            <li style={{ fontSize: 'smaller', fontWeight : '100' }}>Prevents Gas Spillages: Our special anti-rust equation shields your ac from visit gas spillages, guaranteeing long-lasting performance.</li>
            <li style={{ fontSize: 'smaller', fontWeight : '100' }}>Applicable on Part & Window AC: Whether you possess a part or window AC, our anti-rust treatment has got you covered.</li>
          </ul>
        </Col>
      </Row>
      </Container>
{/* change DONE*/}
      <Container className="mt-5">
      <h4 className="text-center">Your Direct To Best "AC Repair Near Me" Services</h4>
      <p style={{ fontSize: 'smaller', fontWeight : '100' }}>
        Hi there! Require an AC repair? We've got the subtle elements. Looking for "part AC repair close me"? Or perhaps "window AC repair near me"? Anything your cooling unit needs, our benefit has it secured. We'll take extraordinary care to settle your AC right up. Your consolation companion will be running like modern in no time!
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <Image src="path-to-your-image.jpg" fluid alt="AC Repair Image" />
        </Col>
        <Col md={6}>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Understanding the Scope</h4>
          <p>
            Precision things when your ac breaks down. Our repair specialists get profound interior your unit to discover issues rapidly, so it works awesome once more. They take care of essential tune-ups and difficult fixes with skill.
          </p>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Inclusions and Exclusions</h4>
          <p>
            Our ac repair service checks everything carefully. We clean and keep up parts like coils and channels totally. But you ought to know that a few save parts, like ac pcb repairs, might fetched additional if we require them and don’t have them ready.
          </p>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Benefits Unveiled</h4>
          <p>
            Unleash nonstop cooling delight with our ac repair administrations near me wizardry. Wave ta-ta to bothering clamors, inconsistent chills, and annoying dribbles! Our prodigies fine-tune your unit, allowing continuous refreshment and energy-saving prowess.
          </p>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>The Strategy Unveiled</h4>
          <p >
            Behold! Our repair custom is straightforwardness incarnate. To begin with, we check your ac with hawk eyes, uncovering any covering up issues. At that point, with laser center and authority, we systematically overcome each issue. Quality parts and state-of-the-art instruments? You betcha! Eternal help awaits.
          </p>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Details Matter</h4>
          <p>
            We know how vital great consideration to detail is. At NR Agencies, exhaustiveness guides each repair service. Earlier checks open total understanding of the ac. At that point an master eye checks each portion and work after benefit. Unwind as a 30-day guarantee guarantees stress-free unwavering quality distant past our visit.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 style={{ fontSize: 'medium', fontWeight : '500' }}>Unlock Top-Notch AC Repair Administrations Near You With NR Agencies</h4>
          <p>
            Air conditioner issues? No stresses! NR Agencies’s talented experts provide stellar AC repair administrations. With broad preparing and a long time of mastery, they prioritize your consolation and fulfillment. Their fastidious approach guarantees a consistent experience.
          </p>
          <p>
            Don’t fuss almost AC repair complexities. NR Agencies’s extraordinary service has got you secured. Depend your cooling companion to their competent hands. Encounter unparalleled unwavering quality and productivity nowadays. Appreciate a reviving breeze of comfort and peace of mind.
          </p>
        </Col>
      </Row>
      </Container>
{/* change DONE*/}
      <Container className="mt-5">
      <h4 className="text-center">Need An AC Gas Refill? See No Further!</h4>
      <p>
        If you're looking for an "ac gas refill near me", you've come to the right put! At NR Organizations, we get it the significance of a well-functioning discuss conditioning framework, particularly in the sweltering warm near me. Our ac gas refill benefit is planned to guarantee that your ac unit is running easily and effectively, giving you with cool and comfortable air all year round.
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <Image src="path-to-your-image.jpg" fluid alt="AC Gas Refill Image" />
        </Col>
        <Col md={6}>
          <h4>What To Anticipate With Our AC Gas Refill Service:</h4>
          <h4>Thorough Pre-Service Checks</h4>
          <p>
           Before beginning the refill process, our master specialists conduct a point by point review of your ac unit, including checking the gas levels to recognize any repairs that may be needed.
          </p>
          <h4>Leak Recognizable proof and Fixing</h4>
          <p>
            Safety is our best need. That’s why we utilize progressed strategies such as spill testing with nitrogen, compressed air, and cleanser arrangement to recognize and settle any spills in your ac framework. Our professionals are talented in brazing and energizing to guarantee that your ac is leak-free.
          </p>
          <h4>Gas Refill</h4>
          <p>
            Once any spills are settled, we continue with filling the gas by weight or back weight, depending on the particular necessities of your ac unit. Our objective is to reestablish your AC’s cooling proficiency and performance.
          </p>
          <h4>Post-Service Cleanup</h4>
          <p>
            After completing the gas refill, our specialists perform a intensive cleanup of your ac unit and the encompassing service zone, clearing out no mess behind.
          </p>
          <h4>Final Checks</h4>
          <p>
            Before clearing out, our specialists conduct last checks to guarantee that your ac is working ideally. This incorporates checking AMP, weight, air stream, temperature, and noise levels to ensure your satisfaction.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 >Why NR Agencies Gives The Best AC Gas Refill Near Me?</h4>
          <ul>
            <li>
              <strong>Expert Technicians:</strong> Our technicians are profoundly prepared and experienced in dealing with all sorts of ac frameworks, guaranteeing a proficient and solid service each time.
            </li>
            <li>
              <strong>30 Day Guarantee:</strong> We stand behind the quality of our work. That’s why we offer a 30-day guarantee on our ac gas refill service, giving you peace of mind.
            </li>
            <li>
              <strong>Safety To begin with:</strong> With NR Agencies, you can believe that security is our best need. From foundation verified technicians to taking after strict SOPs for security and cleanliness, we guarantee a secure and secure benefit experience.
            </li>
            <li>
              <strong>Eco Friendly Approach:</strong> We get it the significance of supportability. That’s why we utilize eco-friendly and non-toxic items in all our administrations, guaranteeing a secure environment for your family and pets.
            </li>
            <li>
              <strong>Convenient Booking:</strong> Booking our ac gas refill benefit is simple and helpful. Essentially visit our app or website, select your benefit and favored time slot, and take off the rest to us.
            </li>
          </ul>
          <p>
            When it comes to ac gas refill close you, NR Agencies is your trusted partner. With our master technicians, straightforward estimating, and commitment to quality, you can rest guaranteed that your ac unit is in great hands. So why hold up? Book your ac gas refill with us nowadays and appreciate the cool consolation of your domestic or office all year round!
          </p>
          <p><strong>Don’t let a flawed ac destroy your consolation. Book your ac gas refill benefit with NR Organizations now!</strong></p>
        </Col>
      </Row>
      </Container>
{/* change DONE*/}
      <Container className="mt-5">
      <h2 className="text-center">AC Installation & Uninstallation Near Me</h2>
      <p className="text-center">
        Welcome to the hassle-free world of ac installation and uninstallation with NR Agencies! Whether you're looking to beat the warm with a brand modern ac installation or offering goodbye to your ancient unit with our consistent uninstallation service, we've got you secured. Let's jump into the points of interest of how our administrations like ac installation and ac uninstallation near you can make your life easier.
        <br/>
        If you are looking for "ac installation service near me" or "part ac installation near me", See no further
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <Image src="path-to-your-installation-image.jpg" fluid alt="AC Installation Image" />
          <h4 className="mt-3">"AC Installation Near Me" Service</h4>
          <p>Comprehensive Installation</p>
          <p>
            Whether it's a part ac installation or a window ac installation, our experts are prepared to handle it. From drilling and wiring associations to setting up the indoor and open air units, we take care of each perspective of the installation process.
          </p>
          <h4>Free Gas Check</h4>
          <p>
            Worried about gas spillage? Do not be. We incorporate a exhaustive gas check as portion of our installation service to guarantee your ac works productively without any leaks.
          </p>
          <h4>Standardized Equipment</h4>
          <p>
            We utilize progressed instruments and high-quality materials for all our installations, ensuring proficient comes about and long-lasting performance.
          </p>
        </Col>
        <Col md={6}>
          <Image src="path-to-your-uninstallation-image.jpg" fluid alt="AC Uninstallation Image" />
          <h4 className="mt-3">"AC Uninstallation Near Me" Service</h4>
          <h4>Safe Removal</h4>
          <p>
            Our technicians will carefully uninstall both the indoor and open air units, guaranteeing no harm is caused to your property amid the process.
          </p>
          <h4>Pipe Fixes</h4>
          <p>
            Worried around extra channels? We've got you secured. Our group will take care of any vital pipe fixes, taking off your space clean and free of clutter.
          </p>
          <h4>Cleanup</h4>
          <p>
            Once the uninstallation is total, we'll clean up the service zone, clearing out it spotless and prepared for the following steps.
          </p>
          <h4>Expert Advice</h4>
          <p>
            Have questions almost your unused AC, how to book ac service online or looking for suggestions? Our experts are here to offer assistance. Feel free to inquire for master exhortation on support, utilization, and more.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 className="text-center">Choose NR Agencies For AC Installation & Uninstallation, Select Top-Notch Experience</h4>
          <p>
            At NR Agencies, we prioritize the significance of a legitimately introduced ac for your consolation and comfort. With our ac establishment and uninstallation administrations, you can rest guaranteed knowing that your cooling needs are in secure hands. Book your benefit nowadays and involvement the contrast for yourself!
          </p>
        </Col>
      </Row>
      </Container>
{/* change DONE*/}
      <Container>
      <Row className="mt-5">
        <Col md="12">
          <h4 className="text-center">Know More In Profundity Almost AC Administrations And Repair Administrations By NR Agencies Near Me</h4>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Power Jet AC Service (Window)</CardTitle>
              <CardText>
                Experience the concentrated of our Powerlet AC service for window ACs. Appreciate strongly cleaning of the indoor unit and essential cleaning of the open air unit. Helpfully accessible for AC benefit near me.
              </CardText>
              <ul>
                <li>Pre-service checks: Point by point inspection, counting gas checks, to recognize repairs</li>
                <li>Final checks: Technician guarantees appropriate capacities by checking pipe blockage & deplete plate spillage at the conclusion of the service.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Power Jet Part AC Service</CardTitle>
              <CardText>
                Seeking an improved cooling execution for your AC? NR Agencies Powerlet adjusting is your reply. We offer an strongly cleaning of the indoor unit and fundamental cleaning of the open air unit, guaranteeing your AC works at its best.
              </CardText>
              <ul>
                <li>AC Cleaning: Profound cleaning of channels, coil, blades, and deplete plate with the powerjet.</li>
                <li>Pre-service checks: Point by point review, counting gas checks, to recognize repairs</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Gas Spill Settle & Refill</CardTitle>
              <CardText>
                <ul>
                <li>Gas refill: Filling of the gas by weight/ back pressure.</li>
                <li>Post-service cleanup: Cleanup of the AC & service area.</li>
                <li>Final checks: Technician checks AMP, weight, discuss stream, temp, noise level at the conclusion to guarantee quality.</li>
                <li>Leak recognizable proof & settling: Spill testing with nitrogen, compressed discuss & cleanser arrangement. Settling the spills by brazing & rechecking.</li>
                <li>Pre-service checks: Voltage, ampere, weight, and other security checks.</li>
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
                Discover the greatness of NR Agencies Foam + Powerlet innovation for your window AC. For AC service near me, experience 2X more profound dust removal.
              </CardText>
              <ul>
                <li>Pre-service checks: Point by point inspection, counting gas checks, to recognize repairs</li>
                <li>AC Cleaning: Profound cleaning of channels, coil, blades, and drain plate with foam and powerjet.</li>
                <li>Final checks: The technician guarantees appropriate capacities by checking pipe blockage & drain plate spillage at the conclusion of the service.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Anti-rust Profound Clean AC Service</CardTitle>
              <CardText>
                Prevent frequent gas leakages with our unique anti-rust formula, applicable to both split and window ACs. Enjoy a 30 days warranty for reliable AC repair near me with NR Agencies.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">AC Repair (Split/Window)</CardTitle>
              <h6 className="mt-3">What are a few common issues our AC repair service addresses?</h6>
              <ul>
                <li>Water Leakage</li>
                <li>Power Issue</li>
                <li>Less/No Cooling</li>
              </ul>
              <h6 className="mt-3">What's Included!</h6>
              <ul>
                <li>Enjoy a 30 days warranty.</li>
                <li>AC repair utilizing high-quality save parts & tools</li>
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
                Looking for solid AC service near me? NR Agencies Foam + Powerlet innovation offers an unparalleled encounter, giving 2X more profound clean evacuation. We ensure an seriously cleaning of both indoor and open air units, going beyond the surface to provide your AC the treatment it deserves.
              </CardText>
              <ul>
                <li>Indoor unit cleaning: Profound cleaning of channels, coil, blades, and deplete plate with foam and powerjet.</li>
                <li>Mess-free involvement: AC coat for spill avoidance amid service and post-service cleanup.</li>
                <li>Pre-service checks: A point by point inspection, counting gas checks, to recognize repairs</li>
                <li>Final checks: Our technician guarantees appropriate capacities by checking pipe blockage & deplete plate spillage at the conclusion of the service.</li>
                <li>Outdoor unit cleaning: Intensive cleaning with a powerjet, guaranteeing a mess-free experience.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Service Comparison from other competitors</CardTitle>
              <ul>
                <li>Internal Parts Cleaning: NR Agencies guarantees the cleaning of all inside parts, a include uncertain in others services.</li>
                <li>Cleaning Instruments: We utilize foam cleaning & powerjet, setting us separated from manual cleaning with brush & water.</li>
                <li>Warranty: Appreciate a 30-day guarantee with NR Agencies, a advantage others may not provide</li>
                <li>Impact on cooling coil: NR Agencies guarantees no affect on the cooling coil, not at all like others who utilize brush cleaning, expanding the chances of coil bending.</li>
                <li>Expected life: NR Agencies: 2-3 years, Others 1-3 months.</li>
                <li>AC power consumption: Low after NR Agencies service, high after others services.</li>
                <li>Gas Spill Recognizable proof & Spill Settling: NR Agencies gives this benefit whereas others don't.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </Container>
{/* change DONE*/}
      <Container className="mt-5">
      <h4 className="text-center mb-4">Know More In Depth About AC Services And Repair Services By NR Agencies Near Me</h4>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">Power Jet AC Service (Window)</Card.Header>
            <Card.Body>
              <p>Experience the concentrated of our Powerlet AC benefit for window ACs. Appreciate strongly cleaning of the indoor unit and fundamental cleaning of the open air unit. Helpfully accessible for AC benefit close me</p>
              <ul>
                <li>Pre-service checks: Point by point inspection, counting gas checks, to recognize repairs.</li>
                <li>Final checks: Technician guarantees appropriate capacities by checking pipe blockage & deplete plate spillage at the conclusion of the service.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">Anti-rust Profound Clean AC Service</Card.Header>
            <Card.Body>
              <p>Prevent frequent gas spillages with our interesting anti-rust equation, appropriate to both split and window ACs. Enjoy a 30 days guarantee for solid AC repair near me with NR Agencies.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">Power Jet Split AC Service</Card.Header>
            <Card.Body>
              <p>Seeking an upgraded cooling execution for your AC? NR Agencies Powerlet adjusting is your reply. We offer an strongly cleaning of the indoor unit and fundamental cleaning of the open air unit, guaranteeing your AC works at its best.</p>
              <ul>
                <li>AAC cleaning: Profound cleaning of channels, coil, blades, and drain plate with the powerjet.</li>
                <li>Pre-service checks: Point by point review, counting gas checks, to recognize repairs.</li>
                <li>Final checks: The technician guarantees appropriate capacities by checking pipe blockage & drain plate spillage at the conclusion of the service.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">AC Repair (Split/Window)</Card.Header>
            <Card.Body>
              <p>For a point by point issue conclusion and same-day determination, NR Agencies AC repair services near me have you secured. Whether it's less/no cooling, control on issues, undesirable noise/smell, or water spillage, we give a 30 days guarantee for all repairs.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">Gas Spill Fix & Refill</Card.Header>
            <Card.Body>
              <ul>
                <li>Gas refill: Filling of the gas by weight/ back pressure.</li>
                <li>Post-service cleanup: Cleanup of the AC & service area.</li>
                <li>Final checks: Technician checks AMP, weight, discuss stream, temp, noise level at the conclusion to guarantee quality.</li>
                <li>Leak recognizable proof & settling: Spill testing with nitrogen, compressed air & cleanser arrangement. Settling the spills by brazing & rechecking.</li>
                <li>Pre-service checks: Voltage, ampere, pressure, and other security checks.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-light">Foam & Power Jet Window AC Service</Card.Header>
            <Card.Body>
              <p>Discover the excellence of NR Agencies Foam + Powerlet innovation for your window AC. For AC service near me, encounter 2X more profound clean removal.</p>
              <ul>
                <li>Pre-service checks: Point by point review, counting gas checks, to recognize repairs</li>
                <li>AC cleaning: Profound cleaning of channels, coil, blades, and drain plate with froth and powerjet.</li>
                <li>Final checks: The technician guarantees legitimate capacities by checking pipe blockage & drain plate spillage at the conclusion of the service.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
{/* change DONE*/}
      <div className="container mt-5">
      <h4 className="text-center mb-4">About AC Repair & Service</h4>

      <h4 className="mb-3">Services Offered in AC Service And Repair</h4>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          <strong>Repairs:</strong> Choose this alternative for diagnosis and repair of your ac. The proficient will check the ac upon appearance and give with quotation depending on the condition of the appliance.
        </li>
        <li className="list-group-item">
          <strong>Installing an AC:</strong> Choose this service for ac installation at your place. The professional will ensure that the ac is running properly
          as gas pressure and performance of the appliance will be checked post ac installation.
        </li>
        <li className="list-group-item">
          <strong>Wet services:</strong> This service incorporates an conclusion to conclusion cleaning of your ac (which is not defective). Cooling coils, condenser coils, external board, drain and filet channels will be broadly cleaned and washed. In any case, high-pressure jet pumps will not be utilized for the cleaning reason. Tick this service when you need your ac to be legitimately cleaned.
        </li>
        <li className="list-group-item">
          <strong>Uninstalling an existing ac:</strong> Choose this alternative when you require experts to get off an ac. The machine will be checked some time recently the ac uninstallation.
        </li>
      </ul>

      <h4 className="mb-3">Why NR Agencies AC Service And Repair?</h4>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          <strong>Customer Centric:</strong> All our services are curated keeping our clients in intellect and AC repair service is no exception.
        </li>
        <li className="list-group-item">
          <strong>Customer Security:</strong> Not at all like any other service supplier, NR Agencies gives a client security of Rs. 10,000 against damages.
        </li>
        <li className="list-group-item">
          <strong>Verified Experts:</strong> All the experts on board with NR Agencies are taken through a screening process to check for their expertise.
        </li>
        <li className="list-group-item">
          <strong>Standardized estimating:</strong> To spare our clients from unjustifiable estimating, we have come up with the thought of standardized estimating with the rate card shared on both our website and App.
        </li>
        <li className="list-group-item">
          <strong>Service Guarantee:</strong> We at NR Agencies take full ownership of our services and consequently, this is the reason that we give a service guarantee of 30 days.
        </li>
        <li className="list-group-item">
          <strong>Online payment:</strong> Presently pay bother free post your benefit through our online entry. You will get a interface through SMS and/or e-mail which will take you to the online payment portal.
        </li>
      </ul>

      <p className="mb-4">
        Like any other machinery, an machine such as ac needs to be kept up and looked after for its healthy working. Consequently, 
        the machine should get a appropriate service before the begin of summer season. After all, nothing can be more awful than a broken or defective ac. 
        Chasing a service staff for ac repair in the sultry climate can be a bother. You can now book a proficient either for service and repair inside minutes from your domestic. 
        You do not indeed require to clear your plan as you can select your alluring time space. NR Agencies ac repair service has proven to be a blessing for our clients as we proceed to get cheerful tributes and appraisals from our customers.
      </p>

      <h4 className="mb-3">How it works?</h4>
      <p className="mb-4">
        To discover the best experts near you in no time, you just require to go on the NR Agencies website or App and search for 'AC Repair' in the search tab. 
        A pop up tab will open up wherein you will require to fill in the details agreeing to your requirements. Questions such as what kind of service is required - split ac or window ac,
        area, time, etc. compromise the survey. Once your request is transferred on the entry, a proficient will be at your doorstep at your asked time and area.
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
        <p className="mb-0">© Copyright 2024 NR Agencies. All rights reserved. | CIN: U74140DL2014PTC274413</p>
      </div>
      </footer>

    </div>
  );
};
export default UserDashboard;
