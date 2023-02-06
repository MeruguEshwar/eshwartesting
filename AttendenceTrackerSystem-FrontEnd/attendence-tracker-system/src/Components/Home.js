import React, { useState } from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import SupportIcon from "@mui/icons-material/Support";
import { Button } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import c1 from "../../src/Images/01.jpg";
import c2 from "../../src/Images/02.jpg";
import Footer from "./Footer";
import logoo from '../../src/Images/logoo.png';
import DevicesIcon from '@mui/icons-material/Devices';
import TaskSharpIcon from '@mui/icons-material/TaskSharp';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FavoriteIcon from '@mui/icons-material/Favorite';
import card1 from '../Images/card1.jpg';
import card2 from '../Images/card2.jpg';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="col-lg-12">
        <div className="col-md-12">
          <div className="col-sm-12">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg ">
              <div className="container">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        <img src={logoo} width="50" height="45" alt="network error" />
                        <h2 className="d-inline" style={{ color: "white" }}>
                          Attendance
                        </h2>
                        {/* <img src={log} alt="network error" className="logoimg rounded" /> */}
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <Button
                      variant="contained"
                      startIcon={<DownloadForOfflineIcon />}
                      className="me-2"
                      style={{
                        backgroundColor: "#33cc66",
                        color: "black",
                        fontSize: "12px",
                      }}
                    >
                      UPGRADE
                    </Button>
                    <Button
                      variant="contained"
                      style={{ fontSize: "12px" }}
                    //   onClick={redirectTosignUp}
                    >
                      <SupportIcon className="me-1" />
                      HELP
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={<FacebookRoundedIcon />}
                      className="ms-1"
                      style={{ fontSize: "12px" }}
                    >
                      LOGIN
                      <TwitterIcon className="ms-1" />
                    </Button>
                  </form>
                </div>
              </div>
            </nav>

            {/* carosial */}
            <div>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img className="d-block w-100" src={c1} alt="First slide" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={c2} alt="Second slide" />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={c1} alt="Third slide" />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            <div class="topfeatures">
              <div className="header text-center ">
                <h2 className="fs-1 text-primary fw-bold mt-5">Top features</h2>
              </div>
              <div className="subheading d-flex justify-content-center fs-5 mt-5">
                <p className="fs-5">
                  MediaFire is more than just sharing and storage.
                </p>
              </div>
              <div className="subheading d-flex justify-content-center fs-5">
                <p>
                  Take a look at the top features to make your life simple and
                  easy.
                </p>
              </div>
            </div>

            <div className="container-fluid cardgrid ">
              <div class="row mt-5 d-flex justify-content-center">
                <div class="col-sm-3 shadow p-2 mb-5 bg-body rounded-5">
                  <h3 className="text-center" style={{ color: "#4c9fd0" }}><DevicesIcon sx={{ fontSize: 40 }} /></h3>
                  <h4 className="text-center mt-1 mb-2">Anywhere and Instant</h4>
                  <p className="text-center mt-3">
                    Runs on Mobile/tablet devices. Comes with Geofencing.
                  </p>
                </div>
                <div class="col-sm-3 shadow p-3 mb-5 ms-5 me-5 bg-body rounded-5">
                  <h3 className="text-center" style={{ color: "#4c9fd0" }}><TaskSharpIcon sx={{ fontSize: 40 }} /></h3>
                  <h4 className="text-center mt-1 mb-2">70+ Customizable Policies</h4>
                  <p className="text-center mt-3">
                    Policies as per Location or Staff category. Shift, OT, late marks, and more.
                  </p>
                </div>
                <div class="col-sm-3 shadow p-3 mb-5 bg-body rounded-5">
                  <h3 className="text-center" style={{ color: "#4c9fd0" }}><GroupIcon sx={{ fontSize: 40 }} /></h3>
                  <h4 className="text-center mt-1 mb-2">Payroll-ready Reports</h4>
                  <p className="text-center mt-3">
                    Automated timesheets with final calculations for payroll processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="container-fluid cardgrid ">
              <div class="row mb-5 d-flex justify-content-center">
                <div class="col-sm-3 col-md-4 col-xl-3 shadow p-2 mb-5 bg-body rounded-5">
                  <h3 className="text-center" style={{ color: "#4c9fd0" }}><InsertDriveFileIcon sx={{ fontSize: 40 }} /></h3>
                  <h4 className="text-center mt-1 mb-2">Multiple Reports</h4>
                  <p className="text-center mt-3">
                    Generate custom periodic reports by choosing each parameter and defining the date range for the report to ensure accurate, in-depth reporting.
                  </p>
                </div>
                <div class="col-sm-3 col-md-4 col-xl-3 ms-5 me-5 shadow p-2 mb-5 bg-body rounded-5">
                  <h3 className="text-center" style={{ color: "#4c9fd0" }}><NotificationsNoneIcon sx={{ fontSize: 40 }} /></h3>
                  <h4 className="text-center mt-1 mb-2">Timely Notifications</h4>
                  <p className="text-center mt-3">
                    Generate custom periodic reports by choosing each parameter and defining the date range for the report to ensure accurate, in-depth reporting.
                  </p>
                </div>
                <div class="col-sm-3 col-md-4 col-xl-3 shadow p-2 mb-5 bg-body rounded-5">
                  <h3 className="text-center" style={{ color: "#4c9fd0" }}><SettingsIcon sx={{ fontSize: 40 }} /></h3>
                  <h4 className="text-center mt-1 mb-2">Custom Approval Workflow</h4>
                  <p className="text-center mt-3">
                    Define custom workflows for approval from managers, HRs, and administrators, to enable enhanced transparency.
                  </p>
                </div>
              </div>
            </div>

            <div className="row gridcards d-flex justify-content-center mb-2">
              <div className="header">
                <h3 className="text-center mt-5" style={{ color: "red" }}><FavoriteIcon sx={{ fontSize: 50 }} /></h3>
                <h3 className="text-primary text-center mt-3 mb-3">
                  Over 150 million people trust AttandanceTrackerSystem every month
                </h3>
                <h2 className="text-primary text-center mb-5">What HRs think of AttendanceTracker HRMS</h2>
              </div>

              <div
                class="card me-5 mb-5 col-md-4 col-xl-4 col-sm-4 rounded-5"
                style={{ width: "300px", backgroundColor: "#e8e9f3" }}
              >
                <div class="card-body">
                  <p class="card-text">
                    “We have been using Pocket HRMS Software for over a year and are very happy with our choice. Excellent service support.”
                  </p>
                  <h5 class="card-title" style={{ color: "#04b1d9" }}>– Niranjana Neelakantan</h5>
                  <h6 class="card-subtitle mb-2 text-muted">HR Director, TESSOL</h6>
                </div>
              </div>

              <div
                class="card me-5 mb-5 col-md-4 col-xl-4 col-sm-4 rounded-5"
                style={{ width: "300px", backgroundColor: "#e8e9f3" }}
              >
                <div class="card-body">
                  <p class="card-text">
                    “The support team is highly admirable. Their professional and polite approach to our queries is simply excellent.”
                  </p>
                  <h5 class="card-title" style={{ color: "#04b1d9" }}>– Nishant Mahajan</h5>
                  <h6 class="card-subtitle mb-2 text-muted">HR Manager, EvolveBack</h6>
                </div>
              </div>

              <div
                class="card mb-5 col-md-4 col-xl-4 col-sm-4 rounded-5"
                style={{ width: "300px", backgroundColor: "#e8e9f3" }}
              >
                <div class="card-body">
                  <p class="card-text">
                    “Data monitoring & HR analytics are made easy by Pocket HRMS, it is upcoming the future of the HR industry”
                  </p>
                  <h5 class="card-title" style={{ color: "#04b1d9" }}>– Sonal Gangwani</h5>
                  <h6 class="card-subtitle mb-2 text-muted">HR Manager, Ignatiuz</h6>
                </div>
              </div>
            </div>

            <div className="container mt-5 mb-5 d-flex justify-content-center">
              <div className="col-sm-10 attandancediv rounded-5">
                <h3 className="mt-5 text-center">What is Attendance Management System?</h3>
                <p className="justify-content-center m-4 mt-4">An attendance management system is software that tracks the working hours of employees.
                  It does precise time tracking for attendance, breaks, the time off taken,
                  clock in and clock out, by your employee. It prevents any type of error in a record.
                  It makes your attendance management precise and efficient.</p>
                <p className="m-4 mb-5">In a good attendance management system, your employees can mark their time and attendance in the mobile app.
                  The software automates your attendance management,
                  so the data should be available to the HR department in real-time to do the precise payroll and your employees
                  should be compensated for their time.</p>
              </div>
            </div>

            <div className="container-fluid threecard">
              <div className="container">
                <h3 className="text-center mt-2">Resources for HR and People leaders</h3>
                <div class="card-group text-light">
                  <div class="card me-5 rounded-5 mb-5" style={{ backgroundColor: "#58595b" }}>
                    <h5 class="card-title ms-3">Quick Attendance Management Features Overview</h5>
                    <img src={card1} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Attandance HRMS gives you & your employees the best experience through our attendance management system.</p>
                      <button type="button" class="btn btn-info text-center">ReadMore</button>
                    </div>
                  </div>
                  <div class="card me-5 rounded-5 mb-5" style={{ backgroundColor: "#58595b" }}>
                    <h5 class="card-title ms-3">Top Benefits of Having an Attendance Management System</h5>
                    <img src={card2} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">A cloud-based attendance system is particularly relevant in 2021 when the global Covid-19 pandemic has taken a toll…</p>
                      <button type="button" class="btn btn-info text-center">ReadMore</button>
                    </div>
                  </div>
                  <div class="card rounded-5 mb-5" style={{ backgroundColor: "#58595b" }}>
                    <h5 class="card-title ms-3">Pocket HRMS Attendance Management Solution</h5>
                    <img src={card1} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Attendance and time tracking is the most crucial aspect for optimum employee management since it forms the crux…</p>
                      <button type="button" class="btn btn-info text-center">ReadMore</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container cardgrid">
              <div class="row mt-5">
                <div class="col-sm-4">
                  <h3>Organize with ease</h3>
                  <p className="text-justify">
                    Make it easy to find your documents and files by using
                    MediaFire’s powerful, yet easy-to-use file manager. Upload,
                    copy, move, and control access to your files from anywhere
                    with your desktop or phone.
                  </p>
                </div>
                <div class="col-sm-4">
                  <h2>One-Time Links</h2>
                  <p>
                    Keep control of your downloads. Share a file using a free
                    One-Time Link and your recipient won’t be able to share the
                    link with anyone else. It’s perfect for sensitive personal
                    or work documents!
                  </p>
                </div>
                <div class="col-sm-4">
                  <h2>Tools</h2>
                  <p>
                    Make it easy to find your documents and files by using
                    MediaFire’s powerful, yet easy-to-use file manager. Upload,
                    copy, move, and control access to your files from anywhere
                    with your desktop or phone.
                  </p>
                </div>
              </div>

              <div class="row mt-5 mb-5">
                <div class="col-sm-4 col-md-4 col-xl-4">
                  <h3>Organize with ease</h3>
                  <p className="text-justify">
                    Make it easy to find your documents and files by using
                    MediaFire’s powerful, yet easy-to-use file manager. Upload,
                    copy, move, and control access to your files from anywhere
                    with your desktop or phone.
                  </p>
                </div>
                <div class="col-sm-4 col-md-4 col-xl-4">
                  <h2>One-Time Links</h2>
                  <p>
                    Keep control of your downloads. Share a file using a free
                    One-Time Link and your recipient won’t be able to share the
                    link with anyone else. It’s perfect for sensitive personal
                    or work documents!
                  </p>
                </div>
                <div class="col-sm-4 col-md-4 col-xl-4">
                  <h2>Tools</h2>
                  <p>
                    Make it easy to find your documents and files by using
                    MediaFire’s powerful, yet easy-to-use file manager. Upload,
                    copy, move, and control access to your files from anywhere
                    with your desktop or phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
