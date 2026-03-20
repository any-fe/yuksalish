import React from "react";
import { NavLink } from "react-router-dom";
import './aboout.css';

import Header from "../../components/header";

/* ── assets ── */
import logo from "../../assets/images/yuksalish-logo.svg";

/* hero background */
import heroImg from "../../assets/images/614947d0c24aaeb2cef953b63ec85b781ea838c5.png";

/* mentor portraits */
import mentor1 from "../../assets/images/Overlay+Shadow1.svg";
import mentor2 from "../../assets/images/Overlay+Shadow.svg";
import mentor3 from "../../assets/images/Overlay+Shadow (1).svg";
import mentor4 from "../../assets/images/Overlay+Shadow (2).svg";

/* gallery / environment images */
import galleryMain from "../../assets/images/home.svg";

/* visit / map */
import mapImg from "../../assets/images/Background (7).svg";

/* icons */
import iconDisc from "../../assets/images/Icon (2).svg";
import iconPrac from "../../assets/images/Icon (3).svg";
import iconSupp from "../../assets/images/Margin (2).svg";
import iconRes from "../../assets/images/Container (5).svg";

/* ── tiny SVG icons ── */
const IcoGrad = () => <svg style={{ width: 28, height: 28 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 9l10 6 10-6-10-6zM2 17l10 6 10-6M2 13l10 6 10-6" /></svg>;
const IcoPpl = () => <svg style={{ width: 28, height: 28 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>;
const IcoTrend = () => <svg style={{ width: 28, height: 28 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" /></svg>;
const IcoPinL = () => <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" /></svg>;
const IcoClock = () => <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
const IcoPhone = () => <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>;
const IcoArrow = () => <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>;
const IcoGlobe = () => <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>;
const IcoShare = () => <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" /></svg>;

const MENTORS = [
    { name: "Sarah Jenkins", role: "Senior English Instructor", img: mentor1 },
    { name: "David Chen", role: "Full Stack Lead", img: mentor2 },
    { name: "Elena Rodriguez", role: "UI/UX Design Mentor", img: mentor3 },
    { name: "Michael Ross", role: "Python Backend Expert", img: mentor4 },
];

const VALUES = [
    { title: "Discipline", desc: "Structured learning paths designed for maximum efficiency and habit building.", img: iconDisc },
    { title: "Practice", desc: "Hands-on coding projects and real-world conversation scenarios.", img: iconPrac },
    { title: "Support", desc: "24/7 mentorship access and a dedicated community for guidance.", img: iconSupp },
    { title: "Results", desc: "Strong focus on job placement, certifications, and career advancement.", img: iconRes },
];

export default function About() {
    return (
        <>

            <Header btnText="Enroll Now" />

            {/* ══ HERO ══ */}
            <div className="hero-wrap">
                <div className="hero-img">
                    <img className="hero-image" src={heroImg} alt="Modern Classrooms" />
                    <div className="hero-overlay" />
                    <div className="hero-content">
                        <h1 className="hero-content-title">Modern Classrooms &<br />Expert Mentors</h1>
                        <p>Empowering the next generation of IT professionals and linguists through <br /> disciplined practice and dedicated support.</p>
                        <div className="hero-btns">
                            <button className="btn-accent">Explore Courses</button>
                            <button className="btn-ghost">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══ STATS ══ */}
            <section className="stats">
                <div className="wrap">
                    <div className="stats-g">
                        <div className="stat-card">
                            <div className="stat-icon"><IcoGrad /></div>
                            <div className="stat-val">50+</div>
                            <div className="stat-lbl">Expert Teachers</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><IcoPpl /></div>
                            <div className="stat-val">1200+</div>
                            <div className="stat-lbl">Graduated Students</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><IcoTrend /></div>
                            <div className="stat-val">95%</div>
                            <div className="stat-lbl">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ VALUES ══ */}
            <section className="values">
                <div className="wrap">
                    <div className="sec-title">
                        <h2>Our Core Values</h2>
                        <p>We believe in a disciplined approach to education that yields real-world results.</p>
                    </div>
                    <div className="values-g">
                        {VALUES.map(({ title, desc, img }) => (
                            <div className="val-card" key={title}>
                                <div className="val-ico"><img src={img} alt={title} /></div>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ MENTORS ══ */}
            <section className="mentors">
                <div className="wrap">
                    <div className="mentors-header">
                        <div>
                            <h2>Meet Our Mentors</h2>
                            <p>Learn from industry veterans and language experts.</p>
                        </div>
                        <button className="view-all">View All Team <IcoArrow /></button>
                    </div>
                    <div className="mentors-g">
                        {MENTORS.map(({ name, role, img }) => (
                            <div className="mentor-card" key={name}>
                                <div className="mentor-thumb"><img src={img} alt={name} /></div>
                                <div className="mentor-info">
                                    <h4>{name}</h4>
                                    <p>{role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ GALLERY ══ */}
            <section className="gallery">
                <div className="wrap">
                    <div className="sec-title">
                        <h2>Our Learning Environment</h2>
                        <p>Designed to inspire creativity and collaboration.</p>
                    </div>
                    <div className="gallery-grid">
                        <div className="gallery-main">
                            <img src={galleryMain} alt="Learning space main" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ VISIT ══ */}
            <section className="visit">
                <div className="wrap d-flex">
                    <div className="visit-box">
                        <div className="visit-left">
                            <h2>Visit Our Center</h2>
                            <p>Come see where the magic happens.<br />Schedule a tour or drop by.</p>
                            <div className="visit-items">
                                <div className="visit-item">
                                    <div className="visit-ico"><IcoPinL /></div>
                                    <div>
                                        <h4>Address</h4>
                                        <p>123 Innovation Blvd, Tech District<br />Tashkent, Uzbekistan</p>
                                    </div>
                                </div>
                                <div className="visit-item">
                                    <div className="visit-ico"><IcoClock /></div>
                                    <div>
                                        <h4>Working Hours</h4>
                                        <p>Mon – Fri: 08:00 – 20:00<br />Sat: 09:00 – 16:00</p>
                                    </div>
                                </div>
                                <div className="visit-item">
                                    <div className="visit-ico"><IcoPhone /></div>
                                    <div>
                                        <h4>Contact</h4>
                                        <p>+998 71 123 45 67<br />info@yuksalishlc.com</p>
                                    </div>
                                </div>
                            </div>
                            <button className="button-dark">Book a Tour</button>
                        </div>
                        <div className="visit-right">
                            <img src={mapImg} alt="Map location" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ FOOTER ══ */}
            <footer className="footer">
                <div className="wrap">
                    <div className="footer-bot">
                        <div className="f-logo">
                            <a href="#"><img className="logo" src={logo} alt="YuksalishLC" /></a>
                        </div>
                        <p className="f-copy">© 2024 Yuksalish Learning Center. All rights reserved.</p>
                        <div className="f-icons">
                            <a href="#" className="f-ic"><IcoGlobe /></a>
                            <a href="#" className="f-ic"><IcoShare /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
