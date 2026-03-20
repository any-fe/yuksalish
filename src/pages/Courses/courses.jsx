import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './courses.css';

import Header from "../../components/header";

import logo from "../../assets/images/yuksalish-logo.svg";
import imgFrontend from "../../assets/images/Background (4).svg";
import imgBackend from "../../assets/images/Background (5).svg";
import imgCyber from "../../assets/images/Background (6).svg";
import imgGerman from "../../assets/images/Background.png";
import metalarfmetk from '../../assets/images/metalarifmetik.svg';

const IT_COURSES = [
    { id: 1,  level: "Beginner to Advanced", dur: "6 Months", img: imgFrontend },
    { id: 2,  level: "Intermediate", dur: "5 Months", img: imgBackend },
    { id: 3,  level: "Advanced", dur: "8 Months", img: imgCyber },
];

const EN_COURSES = [
    { id: 1, title: "General English", sub: "Foundational skills for communication", icon: "🎓" },
    { id: 2, title: "IELTS Preparation", sub: "Intensive course for high band scores", icon: "GB" },
    { id: 3, title: "CEFR Certification", sub: "Standardized European levels B1-C1", icon: "⚙️" },
];

const OUTCOMES = [
    { metric: "Certification", it: "Industry Recognized", lang: "CEFR / IELTS" },
    { metric: "Career Support", it: "Internship + Placement", lang: "Study Abroad Consulting", accent: true },
    { metric: "Avg. Salary Boost", it: "High Potential", lang: "Global Opportunities" },
    { metric: "Duration", it: "5-8 Months", lang: "3-6 Months per level" },
];

const FILTERS = ["All", "IT", "English", "German", "Mental Arithmetic"];



/* ══════════════════ ICONS ══════════════════ */
const IcoBar = () => <svg style={{ width: 13, height: 13 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="14" width="4" height="8" /><rect x="9" y="9" width="4" height="13" /><rect x="16" y="4" width="4" height="18" /></svg>;
const IcoClock = () => <svg style={{ width: 13, height: 13 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
const IcoDl = () => <svg style={{ width: 13, height: 13 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v11" /></svg>;
const IcoArrow = () => <svg style={{ width: 15, height: 15 }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>;
const IcoCheck = () => <svg style={{ width: 16, height: 16, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IcoChevD = () => <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>;
const IcoUser = () => <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" /></svg>;
const IcoMail = () => <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const IcoBook = () => <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const IcoTimer = () => <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
const IcoStar = () => <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 8v4l3 3" /></svg>;

/* ══════════════════ COMPONENT ══════════════════ */
export default function Courses() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedLang, setSelectedLang] = useState("English Language");

    

    return (
        <>
        <Header btnText="Log In" />

            {/* ══ PAGE HERO ══ */}
            <section className="page-hero">
                <div className="wrap">
                    <h1>Explore Our <em>Educational<br />Programs</em></h1>
                    <p>Find the perfect course to upgrade your skills in IT, master new languages, or develop cognitive abilities.</p>
                    <div className="filters">
                        {FILTERS.map(f => (
                            <button key={f} className={`f-btn${activeFilter === f ? " on" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ IT COURSES ══ */}
            <section className="it-section">
                <div className="wrap">
                    <div className="sec-label">
                        <div className="sec-label-icon">
                            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 2h2v2h-2V6zm-4 0h2v2H9V6zM4 18V8h16v10H4z" /></svg>
                        </div>
                        IT Courses
                    </div>
                    <div className="it-grid">
                        {IT_COURSES.map(({ id, tag, title, level, dur, img }) => (
                            <div className="it-card" key={id}>
                                <div className="it-thumb">
                                    <img src={img} alt={title} />
                                    <div className="it-thumb-content">
                                        {tag && <span className="it-popular">{tag}</span>}
                                        <div className="it-title">{title}</div>
                                    </div>
                                </div>
                                <div className="it-meta">
                                    <div className="it-meta-row"><IcoBar />{level}</div>
                                    <div className="it-meta-row"><IcoClock />{dur}</div>
                                </div>
                                <div className="it-footer">
                                    <span className="it-syllabus"><IcoDl />Syllabus</span>
                                    <div className="it-arrow"><IcoArrow /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ ENGLISH + GERMAN ══ */}
            <section style={{ background: "#fff", paddingBottom: 0 }}>
                <div className="wrap">
                    <div className="lang-row">
                        {/* English */}
                        <div className="en-card">
                            <div className="sec-label">
                                <div className="sec-label-icon">
                                    <svg viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" /></svg>
                                </div>
                                English Programs
                            </div>
                            <div className="en-list">
                                {EN_COURSES.map(({ id, title, sub, icon }) => (
                                    <div className="en-item" key={id}>
                                        <div className="en-item-left">
                                            <div className="en-ico">{icon}</div>
                                            <div><h4>{title}</h4><p>{sub}</p></div>
                                        </div>
                                        <span className="en-detail">Details</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* German */}
                        <div className="de-card">
                            <div className="de-bg">
                                <img src={imgGerman} alt="German background" />
                            </div>
                            <div className="de-content">
                                <div className="sec-label" style={{ color: "rgba(255,255,255,.8)" }}>
                                    <div className="sec-label-icon" style={{ background: "rgba(255,255,255,.15)" }}>
                                        <IcoBook />
                                    </div>
                                    German Academy
                                </div>
                                <div className="de-levels">
                                    {["A1", "A2", "B1", "B2"].map(l => <span key={l} className="de-lv">{l}</span>)}
                                </div>
                                <h2>Master German</h2>
                                <p>From beginner to professional fluency. Our structured curriculum ensures you pass Goethe-Zertifikat exams.</p>
                                <div className="de-features">
                                    {["Native speaking instructors", "Cultural immersion activities", "Study abroad consultation"].map(f => (
                                        <div className="de-feat" key={f}><IcoCheck />{f}</div>
                                    ))}
                                </div>
                                <button className="de-btn">Start German Journey</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ ARITHMETIC + TABLE ══ */}
            <section style={{ background: "#fff", padding: "24px 0 0" }}>
                <div className="wrap">
                    <div className="bottom-row">
                        {/* Arithmetic */}
                        <div className="arith-card">
                            <div className="sec-label">
                                <div>
                                <img src={metalarfmetk} alt="" />
                                </div>
                                Mental Arithmetic
                            </div>
                            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>Boost cognitive abilities, memory, and concentration for children ages 5-14 through abacus-based learning.</p>
                            <div className="arith-stats">
                                <div className="arith-stat"><div className="val">2x</div><div className="lbl">Focus Speed</div></div>
                                <div className="arith-stat"><div className="val">100%</div><div className="lbl">Engagement</div></div>
                            </div>
                            <button className="arith-btn">Enroll Child</button>
                        </div>

                        {/* Comparison table */}
                        <div className="table-card">
                            <h3>Program Outcome Comparison</h3>
                            <p className="sub">What you will achieve by the end of our top courses</p>
                            <table className="comp-table">
                                <thead>
                                    <tr>
                                        <th>METRIC</th>
                                        <th>IT PROGRAMS</th>
                                        <th>LANGUAGE COURSES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {OUTCOMES.map(({ metric, it, lang, accent }) => (
                                        <tr key={metric}>
                                            <td>{metric}</td>
                                            <td className={accent ? "td-accent" : ""}>{it}</td>
                                            <td>{lang}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ PLACEMENT TEST ══ */}
            <section className="placement">
                <div className="wrap">
                    <div className="placement-box">
                        <div className="pl-left">
                            <div className="pl-badge">Not sure where to start?</div>
                            <h2>Take a Free Placement Test</h2>
                            <p>Assess your current skill level in English, German, or <br /> Logic to find the perfect course for you.</p>
                            <div className="pl-chips">
                                <div className="pl-chip"><IcoTimer />15 Minutes</div>
                                <div className="pl-chip"><IcoStar />Instant Results</div>
                            </div>
                        </div>
                        <div className="pl-right">
                            <h3>Get Your Test Link</h3>
                            <div className="pl-form">
                                <div className="pl-inp-wrap"><IcoUser /><input placeholder="Your Full Name" type="text" /></div>
                                <div className="pl-inp-wrap"><IcoMail /><input placeholder="you@example.com" type="email" /></div>
                                <div className="pl-inp-wrap">
                                    <IcoBook />
                                    <select value={selectedLang} onChange={e => setSelectedLang(e.target.value)}>
                                        <option>English Language</option>
                                        <option>German Language</option>
                                        <option>Mental Arithmetic</option>
                                        <option>IT Course</option>
                                    </select>
                                    <IcoChevD />
                                </div>
                                <button className="pl-submit">Send Me The Test</button>
                                <p className="pl-note">No credit card required</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ FOOTER ══ */}
            <footer className="footer">
                <div className="wrap">
                    <div className="footer-g">
                        <div className="f-brand">
                            <img src={logo} alt="YuksalishLC" />
                            <p>Empowering the next generation with cutting-edge IT skills and global languages.</p>
                        </div>
                        <div className="f-col">
                            <h4>Programs</h4>
                            <ul>
                                {["IT Courses", "English", "German"].map(i => <li key={i}><a href="#">{i}</a></li>)}
                            </ul>
                        </div>
                        <div className="f-col">
                            <h4>Company</h4>
                            <ul>
                                {["About Us", "Careers", "Contact"].map(i => <li key={i}><a href="#">{i}</a></li>)}
                            </ul>
                        </div>
                        <div className="f-col">
                            <h4>Social</h4>
                            <div className="f-social-icons">
                                <a href="#" className="f-soc">
                                    <svg viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                                </a>
                                <a href="#" className="f-soc">
                                    <svg viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="f-bot">
                        <p>© 2024 YuksalishLC. All rights reserved.</p>
                        <div className="f-bot-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}