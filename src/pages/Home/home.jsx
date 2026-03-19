import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './index.css';

/* ── local assets ── */
import logo from "../../assets/images/yuksalish-logo.svg";
import starsImg from "../../assets/images/stars.svg";
import brotherImg from "../../assets/images/header-brother.png";
import heroImg from "../../assets/images/rightt-img.svg";

import instagram from '../../assets/images/instagram.svg';
import twiter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';

/* course images */
import imgFullStack from "../../assets/images/fullstack.svg";   /* Full Stack */
import imgEnglish from "../../assets/images/Container.png";         /* General English */
import imgUiUx from "../../assets/images/Container (1).png";
import imgGerman from "../../assets/images/Container (2).png";
import imgArith from "../../assets/images/Container (3).png";
import imgData from "../../assets/images/Container (4).png";

import Header from "../../components/Header/Header";

/* testimonial avatars */
import avatarUser from "../../assets/images/User 2.png";

const COURSES = [
    {
        title: "Full Stack Development", dur: "6 Months", img: imgFullStack,
        desc: "Master Python, JavaScript, and React to build modern, scalable web applications from scratch."
    },
    {
        title: "General English", dur: "3 Months", img: imgEnglish,
        desc: "From beginner to advanced. Improve your speaking, writing, and listening skills with native speakers."
    },
    {
        title: "UI/UX Design", dur: "4 Months", img: imgUiUx,
        desc: "Learn to design intuitive user interfaces and experiences using Figma and Adobe XD."
    },
    {
        tag: "Language", title: "Intensive German", dur: "5 Months", img: imgGerman,
        desc: "Prepare for Goethe-Zertifikat exams and university studies in Germany. A1 to C1 levels."
    },
    {
        title: "Mental Arithmetic", dur: "Ongoing", img: imgArith,
        desc: "Boost your child's brainpower, concentration, and math skills with our specialized program."
    },
    {
        title: "Data Analytics", dur: "4 Months", img: imgData,
        desc: "Learn Excel, SQL, and PowerBI to analyze data and make informed business decisions."
    },
];

const TESTIMONIALS = [
    {
        name: "Aziz Rakhimov", role: "Web Development Grad", img: avatarUser,
        q: "The mentorship at YuksalishLC changed my career path. I went from zero coding knowledge to a junior developer in just 6 months. Highly recommended!"
    },
    {
        name: "Malika Karimova", role: "IELTS Student (8.0)", img: avatarUser,
        q: "The IELTS preparation course was intense but rewarding. My speaking score improved drastically thanks to the native instructors."
    },
    {
        name: "Jahongir Aliev", role: "German Language (B2)", img: avatarUser,
        q: "I needed B2 German for my university application. YuksalishLC provided excellent resources and a supportive environment to learn fast."
    },
];

const FAQS = [
    { q: "How do I enroll in a course?", a: "You can enroll by clicking the 'Enroll Now' button, filling out the contact form, or visiting our center in person." },
    { q: "Do you offer online classes?", a: "Yes, we offer both offline (in-person) and online formats for most of our IT and language courses." },
    { q: "What is the duration of the courses?", a: "Language courses typically run 3-6 months per level, while IT bootcamps range from 4 to 8 months." },
    { q: "Is there a certificate upon completion?", a: "Yes, upon completing the course and passing the final exam, you receive an official YuksalishLC certificate." },
    { q: "Do you help with job placement?", a: "Absolutely. We have a dedicated career support team for resume writing, interview prep, and job referrals." },
    { q: "Can I get a refund if I'm not satisfied?", a: "We offer a trial period for the first week. If you decide not to continue, you are eligible for a refund." },
];

/* ─────────────────────── ICONS ─────────────────────── */
const IcoClock = () => (
    <svg style={{ width: 13, height: 13, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
);
const IcoArrow = () => (
    <svg style={{ width: 15, height: 15 }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);
const IcoChevron = ({ open }) => (
    <svg style={{ width: 18, height: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}
        fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);
const IcoCheck = () => (
    <svg style={{ width: 18, height: 18, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export default function Home() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <Header btnText="Enroll Now" />

            {/* ══ HERO ══ */}
            <section className="hero">
                <div className="wrap">
                    <div className="hero-g">
                        <div>
                            <div className="hero-badge"><span className="pulse"></span>New cohort starting soon</div>
                            <h1>Build skills for <em>real careers</em> in IT and Languages</h1>
                            <p className="hero-sub">Master programming, English, German, and Mental Arithmetic with expert mentors at YuksalishLC. Start your journey to a global career today.</p>
                            <div className="hero-btns">
                                <button className="btn-dark">View Courses</button>
                                <button className="btn-light">Book a Free Trial</button>
                            </div>
                            <div className="proof">
                                <div className="avatars">
                                    <img className="students-img" src={brotherImg} alt="students" />
                                </div>
                                <div className="proof-txt">
                                    <img src={starsImg} alt="stars" className="stars" />
                                    <p>Trusted by 2,000+ students</p>
                                </div>
                            </div>
                        </div>
                        <div className="hero-media">
                            <div className="hero-pic"><img src={heroImg} alt="Students learning" /></div>
                            <div className="stat-badge">
                                <div className="num">98%</div>
                                <div className="lbl">Satisfaction rate from our<br />graduates in 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ STATS ══ */}
            <section className="stats-bar">
                <div className="wrap">
                    <div className="stats-ggs">
                        {[["1,200+", "Active Students"], ["15+", "Courses Offered"], ["40+", "Expert Mentors"], ["85%", "Job Placement"]].map(([v, l]) => (
                            <div key={l}><div className="sv">{v}</div><div className="sl">{l}</div></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ WHY ══ */}
            <section className="why">
                <div className="wrap">
                    <div className="sec-head">
                        <h2>Why Choose <em>YuksalishLC</em>?</h2>
                        <p>We provide more than just education; we provide a pathway to your future with industry-standard tools and mentorship.</p>
                    </div>
                    <div className="why-g">
                        {[
                            { t: "Expert Mentors", d: "Learn from professionals currently working in top tech companies and language institutes.", svg: <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" /> },
                            { t: "Career Support", d: "Resume building, interview prep, and direct connections to hiring partners to get you hired.", svg: <path d="M20 6h-2.18c.07-.44.18-.88.18-1.33C18 2.53 15.48 1 13 1c-1.32 0-2.6.53-3.54 1.46L8 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7.5 11.5L9 14l1.41-1.41 2.09 2.08 4.59-4.58L18.5 11.5l-6 6z" /> },
                            { t: "Global Certificates", d: "Earn recognized certifications upon completion that validate your skills worldwide.", svg: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z" /> },
                            { t: "Community", d: "Join a vibrant community of learners, attend events, and network with peers.", svg: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /> },
                        ].map(({ t, d, svg }) => (
                            <div className="why-c" key={t}>
                                <div className="why-ico"><svg viewBox="0 0 24 24">{svg}</svg></div>
                                <h3>{t}</h3><p>{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ COURSES ══ */}
            <section className="courses">
                <div className="wrap">
                    <div className="c-hdr">
                        <div><h2>Explore Our <em>Top Courses</em></h2><p>Curriculum designed to get you job-ready.</p></div>
                        <button className="view-all-btn">View All Courses <IcoArrow /></button>
                    </div>
                    <div className="courses-g">
                        {COURSES.map(({ title, dur, desc, img }) => (
                            <div className="c-card" key={title}>
                                <div className="c-thumb">
                                    <img src={img} alt={title} />
                                </div>
                                <div className="c-body">
                                    <h3>{title}</h3><p>{desc}</p>
                                    <div className="c-foot">
                                        <span className="c-dur"><IcoClock />{dur}</span>
                                        <span className="c-enroll">Enroll Now</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ PATH ══ */}
            <section className="path">
                <div className="wrap">
                    <div className="sec-head">
                        <h2>Your Path to <em>Success</em></h2>
                        <p>A structured journey designed to take you from beginner to professional.</p>
                    </div>
                    <div className="steps-g">
                        {[
                            { n: 1, t: "Consultation", d: "Identify your goals and choose the right course.", act: true },
                            { n: 2, t: "Enrollment", d: "Sign up and get access to learning materials." },
                            { n: 3, t: "Learning", d: "Interactive classes, homework, and mentorship." },
                            { n: 4, t: "Practice", d: "Real-world projects and portfolio building." },
                            { n: 5, t: "Certification", d: "Graduate and receive your certificate." },
                        ].map(({ n, t, d, act }) => (
                            <div className={`step${act ? " act" : ""}`} key={n}>
                                <div className="step-n">{n}</div>
                                <h4>{t}</h4><p>{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ TESTIMONIALS ══ */}
            <section className="testi">
                <div className="wrap">
                    <div className="sec-head"><h2>What our <em>Students Say</em></h2></div>
                    <div className="testi-g">
                        {TESTIMONIALS.map(({ name, role, img, q }) => (
                            <div className="t-card" key={name}>
                                <div className="t-q">"</div>
                                <div className="t-top">
                                    <img src={img} alt={name} />
                                    <div><h4>{name}</h4><span>{role}</span></div>
                                </div>
                                <p>{q}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ FAQ ══ */}
            <section className="faq">
                <div className="wrap">
                    <div className="sec-head"><h2>Frequently Asked Questions</h2></div>
                    <div className="faq-wrap">
                        <div className="faq-list">
                            {FAQS.map(({ q, a }, i) => (
                                <div className="faq-row" key={q}>
                                    <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                        <span>{q}</span><IcoChevron open={openFaq === i} />
                                    </button>
                                    {openFaq === i && <div className="faq-a">{a}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="cta">
                <div className="wrap">
                    <div className="cta-box">
                        <div className="cta-b1" /><div className="cta-b2" />
                        <div className="cta-in">
                            <div className="cta-txt">
                                <h2>Ready to start your journey?</h2>
                                <p>Join over 1,200 students transforming their lives with YuksalishLC today.</p>
                                <div className="cta-checks">
                                    {["7-day free trial", "Flexible schedule"].map(t => (
                                        <div className="cta-chk" key={t}><IcoCheck />{t}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="cta-form-wrap">
                                <h3>Request a Call Back</h3>
                                <div className="cta-form">
                                    <input className="f-inp" placeholder="Your Name" type="text" />
                                    <input className="f-inp" placeholder="Phone Number" type="tel" />
                                    <button className="f-btn" onClick={() => alert("So'rovingiz qabul qilindi!")}>Submit Request</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ FOOTER ══ */}
            <footer className="home-footer">
                <div className="wrap">
                    <div className="footer-g">
                        <div className="f-brand">
                            <img className="logo" src={logo} alt="YuksalishLC" />
                            <p>Empowering the next generation with cutting-edge IT skills and global languages.</p>
                            <div className="footer-logo-box">
                                <NavLink href="#" className="footer-logo"><img src={facebook} alt="" /></NavLink>
                                <NavLink href="#" className="footer-logo"><img src={instagram} alt="" /></NavLink>
                                <NavLink href="#" className="footer-logo"><img src={twiter} alt="" /></NavLink>
                            </div>
                        </div>
                        <div className="f-col">
                            <h4 className="footer-h4">Courses</h4>
                            <ul>{["Full Stack Development", "General English", "German Language", "UI/UX Design", "Mental Arithmetic"].map(i => <li key={i}><a href="#">{i}</a></li>)}</ul>
                        </div>
                        <div className="f-col">
                            <h4 className="footer-h4">Quick Links</h4>
                            <ul>{["About Us", "Our Mentors", "Events & Workshops", "Blog", "Contact"].map(i => <li key={i}><a href="#">{i}</a></li>)}</ul>
                        </div>
                        <div className="f-col">
                            <h4 className="footer-h4">Contact Us</h4>
                            <div className="f-ci"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg><span>123 Education Ave, Innovation District, Tashkent, Uzbekistan</span></div>
                            <div className="f-ci"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg><span>+998 90 123 45 67</span></div>
                            <div className="f-ci"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg><span>info@yuksalishlc.uz</span></div>
                        </div>
                    </div>
                    <div className="f-bot">
                        <p>© 2023 YuksalishLC. All rights reserved.</p>
                        <div className="f-bot-links"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
                    </div>
                </div>
            </footer>
        </>
    );
}
