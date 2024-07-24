import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import './Userdashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FAQ from './FAQ';
import {Chart as ChartJS,ArcElement,Tooltip,Legend,} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const UserDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

  return (
    <div className="container">
      {/* Header Section */}
      <header className="d-flex justify-content-between align-items-center py-3">
        <div className="logo">logo here</div>
        <div className="location">location near me</div>
        <div className="icons d-flex">
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-bell ml-3"></i>
        </div>
      </header>

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

      {/* Services */}
      <div className="services mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2>Services</h2>
        <a href="#service" className="text-primary">Know more</a>
      </div>
      <div className="service-menu bg-light p-4 text-center">
        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="row g-0 h-100">
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <p className="text-success mb-0"><b>Power Saver AC service</b></p>
                    <h5 className="card-title">Split AC</h5>
                    <div className="d-flex align-items-center mb-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                          fill="#572AC8"
                        ></path>
                      </svg>
                      <p className="mb-0 ms-2">4.82 (526.2K reviews)</p>
                    </div>
                    <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹619</p>
                    <div className="d-flex align-items-center mb-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          fill="#07794C"
                        ></path>
                      </svg>
                      <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                    </div>
                    <ul className="custom-list list-unstyled">
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 45 Mins</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Advanced Foam-jet technology</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Deep jet cleaning of outdoor unit</small>
                      </li>
                    </ul>
                    <a href="#cart" className="btn btn-primary">Add</a>
                    <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100">
              <div className="row g-0 h-100">
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <p className="text-success mb-0"><b>Power Saver AC service</b></p>
                    <h5 className="card-title">window AC</h5>
                    <div className="d-flex align-items-center mb-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                          fill="#572AC8"
                        ></path>
                      </svg>
                      <p className="mb-0 ms-2">4.82 (526.2K reviews)</p>
                    </div>
                    <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹549</p>
                    <div className="d-flex align-items-center mb-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          fill="#07794C"
                        ></path>
                      </svg>
                      <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                    </div>
                    <ul className="custom-list list-unstyled">
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 45 Mins</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Advanced Foam-jet technology</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Deep jet cleaning of outdoor unit</small>
                      </li>
                    </ul>
                    <a href="#cart" className="btn btn-primary">Add</a>
                    <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="horizontal-line"></div>
      {/*line*/}
      <div className="service-menu bg-light p-4 text-center">
        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="row g-0 h-100">
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <p className="text-success mb-0"><b>Anti-rust AC service</b></p>
                    <h5 className="card-title">Deep clean</h5>
                    <div className="d-flex align-items-center mb-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                          fill="#572AC8"
                        ></path>
                      </svg>
                      <p className="mb-0 ms-2">3.12 (302.2K reviews)</p>
                    </div>
                    <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹919</p>
                    <div className="d-flex align-items-center mb-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          fill="#07794C"
                        ></path>
                      </svg>
                      <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                    </div>
                    <ul className="custom-list list-unstyled">
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 60 Mins</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>prevents frequent gas leakages through a unique anti-rust spray</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Application on both split and window AC's</small>
                      </li>
                    </ul>
                    <a href="#cart" className="btn btn-primary">Add</a>
                    <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="horizontal-line"></div>
      {/*line*/}
      <div className="service-menu bg-light p-4 text-center">
        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="row g-0 h-100">
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <p className="text-success mb-0"><b>Ac service lite</b></p>
                    <h5 className="card-title">Split</h5>
                    <div className="d-flex align-items-center mb-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                          fill="#572AC8"
                        ></path>
                      </svg>
                      <p className="mb-0 ms-2">4.12 (396.2K reviews)</p>
                    </div>
                    <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹519</p>
                    <div className="d-flex align-items-center mb-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          fill="#07794C"
                        ></path>
                      </svg>
                      <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                    </div>
                    <ul className="custom-list list-unstyled">
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 30 Mins</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Basic water-jet cleaning of indoor unit</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Basic cleaning of outdoor unit</small>
                      </li>
                    </ul>
                    <a href="#cart" className="btn btn-primary">Add</a>
                    <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100">
              <div className="row g-0 h-100">
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <p className="text-success mb-0"><b>AC service lite</b></p>
                    <h5 className="card-title">window AC</h5>
                    <div className="d-flex align-items-center mb-2">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                          fill="#572AC8"
                        ></path>
                      </svg>
                      <p className="mb-0 ms-2">4.52 (526.2K reviews)</p>
                    </div>
                    <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹449</p>
                    <div className="d-flex align-items-center mb-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          fill="#07794C"
                        ></path>
                      </svg>
                      <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                    </div>
                    <ul className="custom-list list-unstyled">
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 30 Mins</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Basic water-jet cleaning of indoor unit</small>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Basic cleaning of outdoor unit</small>
                      </li>
                    </ul>
                    <a href="#cart" className="btn btn-primary">Add</a>
                    <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Repair and gas refill */}
      <div className="services mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2>Repair & gas Refill</h2>
        <a href="#service" className="text-primary">Know more</a>
        </div>
          <div className="service-menu bg-light p-4 text-center">
          <div className="row">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>AC repair (split/window)</b></p>
                      <h5 className="card-title">Less/no cooling</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">4.88 (421.2K reviews)</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹299</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 60 Mins</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Detailed issue diagnosis with same day resolution</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Visit Charges of ₹299 will be adjusted in the final bill</small>
                        </li>
                      </ul>
                      <a href="#cart" className="btn btn-primary">Add</a>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>AC repair (split/window)</b></p>
                      <h5 className="card-title">Power on issue</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">4.87 (526.2K reviews)</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹299</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 60 Mins</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Advanced Foam-jet technology</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Deep jet cleaning of outdoor unit</small>
                        </li>
                      </ul>
                      <a href="#cart" className="btn btn-primary">Add</a>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="service-menu bg-light p-4 text-center">
          <div className="row">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>AC repair (split/window)</b></p>
                      <h5 className="card-title">Unwanted noise/ smell</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">4.58 (411.2K reviews)</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹499</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 60 Mins</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Detailed issue diagnosis with same day resolution</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Visit Charges of ₹299 will be adjusted in the final bill</small>
                        </li>
                      </ul>
                      <a href="#cart" className="btn btn-primary">Add</a>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>AC repair (split/window)</b></p>
                      <h5 className="card-title">Water leakage</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">4.62 (511.2K reviews)</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹619</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 60 Mins</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Advanced Foam-jet technology</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Deep jet cleaning of outdoor unit</small>
                        </li>
                      </ul>
                      <a href="#cart" className="btn btn-primary">Add</a>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="horizontal-line"></div>
          <div className="service-menu bg-light p-4 text-center">
          <div className="row">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>Fix & Refill</b></p>
                      <h5 className="card-title">Gas leak fix & refill</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">4.12 (482.2K reviews)</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹2500</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 60 Mins</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Through diagnosis, leak identification & fixing gas refill to avoid leakages</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Application on both split and window AC's</small>
                        </li>
                      </ul>
                      <a href="#cart" className="btn btn-primary">Add</a>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Install and Uninstall */}
      <div className="services mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2>Install & Uninstall</h2>
        <a href="#service" className="text-primary">Know more</a>
        </div>
          <div className="service-menu bg-light p-4 text-center">
          <div className="row">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>AC Installation</b></p>
                      <h5 className="card-title">Window AC Installation</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">4.25 (412.2K reviews)</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹1499</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 150 Mins</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Installation of indoor & outdoor units with free gas check</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Procurement of spare parts (at extra cost)</small>
                        </li>
                      </ul>
                      <a href="#cart" className="btn btn-primary">Add</a>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>AC Installation</b></p>
                      <h5 className="card-title">Split AC Installation</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">4.62 (512.2K reviews)</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹2399</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 150 Mins</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Installation of indoor & outdoor units with free gas check</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Procurement of spare parts (at extra cost)</small>
                        </li>
                      </ul>
                      <a href="#cart" className="btn btn-primary">Add</a>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="horizontal-line"></div>
          <div className="service-menu bg-light p-4 text-center">
          <div className="row">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>AC Uninstallation</b></p>
                      <h5 className="card-title">Window AC Uninstallation</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">4.89 (11.2K reviews)</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹999</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 60 Mins</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Uninstall of indoor & outdoor units</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>AC packing (material to be provided by the customer)</small>
                        </li>
                      </ul>
                      <a href="#cart" className="btn btn-primary">Add</a>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <p className="text-success mb-0"><b>AC Uninstallation</b></p>
                      <h5 className="card-title">Split AC Uninstallation</h5>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#572AC8" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.333 10a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0zm-7.894-4.694A.476.476 0 009.999 5a.476.476 0 00-.438.306L8.414 8.191l-2.977.25a.48.48 0 00-.414.342.513.513 0 00.143.532l2.268 2.033-.693 3.039a.51.51 0 00.183.518.458.458 0 00.528.022L10 13.298l2.548 1.629a.458.458 0 00.527-.022.51.51 0 00.184-.518l-.693-3.04 2.268-2.032a.513.513 0 00.143-.532.48.48 0 00-.415-.342l-2.976-.25-1.147-2.885z"
                            fill="#572AC8"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2">4.87 (119.2K reviews)</p>
                      </div>
                      <p className="fw-bold" style={{ color: 'rgb(15, 15, 15)', fontFamily: 'os_bold' }}>Starts at ₹1199</p>
                      <div className="d-flex align-items-center mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#07794C" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            fill="#07794C"
                          ></path>
                        </svg>
                        <p className="mb-0 ms-2 text-success">₹100 off 2nd item onwards</p>
                      </div>
                      <ul className="custom-list list-unstyled">
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>30-DAY WARRANTY</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Estimated time 60 Mins</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>Uninstall of indoor & outdoor units</small>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'darkgreen' }} /> <small>AC cleaning (material to be provided by the customer)</small>
                        </li>
                      </ul>
                      <a href="#cart" className="btn btn-primary">Add</a>
                      <a href="#details" className="btn btn-link text-decoration-none text-primary ms-2">View details</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src="/path/to/your/image.png" className="card-img-top" alt="Service Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>

      {/* Floating Menu Bar */}
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
        <div className="menu-option">Service <FontAwesomeIcon icon={faToolbox} className="ms-2" /></div>
        <div className="menu-option">Repair <FontAwesomeIcon icon={faScrewdriverWrench} className="ms-2" /></div>
        <div className="menu-option">Install <FontAwesomeIcon icon={faPlus} className="ms-2" /></div>
      </div>
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
      <h1 className="text-center mb-4">What are people near me looking for?</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Washing Machine Repair</h5>
              <p className="card-text">Top Washing Machine Repair services near me</p>
              <p className="card-text">Top-class reliable Washing Machine Repair services at your convenience near me. * Trained professionals * Best prices</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">AC repair</h5>
              <p className="card-text">Top AC services near me</p>
              <p className="card-text">Top-class reliable AC services at your convenience near me. * Trained professionals * Best prices</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default UserDashboard;
