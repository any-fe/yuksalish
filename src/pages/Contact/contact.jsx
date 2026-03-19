import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './index.css';

import Header from "../../components/Header/Header";

/* ── assets ── */
import phoneIcon from "../../assets/images/phone.svg";
import telegramIcon from "../../assets/images/telegram.svg";
import emailIcon from "../../assets/images/email.svg";
import locationIcon from "../../assets/images/location.svg";

const CARDS = [
    { icon: phoneIcon, title: "Phone", lines: ["+998 90 123 45 67", "+998 71 200 00 00"] },
    { icon: telegramIcon, title: "Telegram", lines: ["@yuksalish_admin", "Channel: @yuksalish_lc"] },
    { icon: emailIcon, title: "Email", lines: ["info@yuksalish.uz", "support@yuksalish.uz"] },
    { icon: locationIcon, title: "Address", lines: ["Amir Temur Str. 15", "Tashkent, Uzbekistan"] },
    { icon: null, isClock: true, title: "Hours", lines: ["Mon-Sat: 09:00 – 20:00", "Sunday: Closed"] },
];

const FAQS = [
    {
        q: "How do I pay for the courses?",
        a: "We accept cash, bank transfer, and online payment via Payme or Click. Payment plans are also available."
    },
    {
        q: "Is there a refund policy?",
        a: "Yes. If you withdraw within the first week of classes, you receive a full refund. After that a partial refund may apply."
    },
    {
        q: "Can I take a trial lesson?",
        a: "Absolutely! Every new student can attend one free trial lesson before committing to enrollment."
    },
    {
        q: "Do you provide certificates?",
        a: "Yes, upon successful completion of any course you receive an official YuksalishLC certificate."
    },
];

const COURSES = ["Frontend Development", "Backend Development", "General English", "IELTS Preparation", "German (A1–B2)", "Mental Arithmetic", "UI/UX Design", "Data Analytics"];
const TIMINGS = ["Morning (08:00–12:00)", "Afternoon (12:00–16:00)", "Evening (16:00–20:00)", "Weekend"];

const IcoClock = ({ sz = 20 }) => (
    <svg width={sz} height={sz} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
);
const IcoPhone = () => (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1-.2 1.1.4 2.3.6 3.6.6.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.18 21 3 13.82 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.2 2.5.6 3.6.14.33.05.73-.2 1L6.6 10.8z" />
    </svg>
);
const IcoTg = () => (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
    </svg>
);
const IcoChev = ({ open }) => (
    <svg width="17" height="17" style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}
        fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);
const IcoArrow = () => (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);
const IcoPin = () => (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
);

export default function Contact() {
    const [openFaq, setOpenFaq] = useState(null);
    const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", time: "", comment: "" });
    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

    return (
        <>


            <Header btnText="Enroll Now" />
            {/* ══ HERO ══ */}
            <section className="hero">
                <div className="wrap">
                    <h1>Contact & Enrollment</h1>
                    <p className="hero-sub">
                        Start your journey in IT and Languages with us today. Reach out for
                        questions or fill the form below to secure your spot.
                    </p>
                    <div className="hero-btns">
                        <button className="btn-call"><IcoPhone /> Call Now</button>
                        <button className="btn-tg"><IcoTg /> Message on Telegram</button>
                    </div>

                    <div className="info-row">
                        {CARDS.map(({ icon, isClock, title, lines }) => (
                            <div className="ic" key={title}>
                                <div className="ic-icon">
                                    {isClock ? <IcoClock sz={20} /> : <img src={icon} alt={title} />}
                                </div>
                                <h4>{title}</h4>
                                <p>{lines.map((l, i) => <span key={i}>{l}{i < lines.length - 1 && <br />}</span>)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ MAIN GRID ══ */}
            <section>
                <div className="wrap">
                    <div className="main-grid">

                        {/* form */}
                        <div className="reg-card">
                            <h2>Student Registration</h2>
                            <p className="sub">Fill out the form below and we will contact you shortly to confirm your registration.</p>

                            <div className="f-grp">
                                <label className="f-lbl">Full Name</label>
                                <input className="f-inp" placeholder="John Doe" value={form.name} onChange={e => set("name", e.target.value)} />
                            </div>

                            <div className="f-2col">
                                <div>
                                    <label className="f-lbl">Phone Number</label>
                                    <input className="f-inp" placeholder="+998 90 000 00 00" value={form.phone} onChange={e => set("phone", e.target.value)} />
                                </div>
                                <div>
                                    <label className="f-lbl">Email (Optional)</label>
                                    <input className="f-inp" placeholder="john@example.com" value={form.email} onChange={e => set("email", e.target.value)} />
                                </div>
                            </div>

                            <div className="f-2col">
                                <div>
                                    <label className="f-lbl">Interested Course</label>
                                    <div className="sel-wrap">
                                        <select className={`f-sel${form.course ? " has-val" : ""}`} value={form.course} onChange={e => set("course", e.target.value)}>
                                            <option value="">Select a course</option>
                                            {COURSES.map(c => <option key={c}>{c}</option>)}
                                        </select>
                                        <span className="sel-chev"><IcoChev open={false} /></span>
                                    </div>
                                </div>
                                <div>
                                    <label className="f-lbl">Preferred Time</label>
                                    <div className="sel-wrap">
                                        <select className={`f-sel${form.time ? " has-val" : ""}`} value={form.time} onChange={e => set("time", e.target.value)}>
                                            <option value="">Select timing</option>
                                            {TIMINGS.map(t => <option key={t}>{t}</option>)}
                                        </select>
                                        <span className="sel-chev"><IcoChev open={false} /></span>
                                    </div>
                                </div>
                            </div>

                            <div className="f-grp">
                                <label className="f-lbl">Comments / Questions</label>
                                <textarea className="textrae-input" placeholder="Any specific requirements?" value={form.comment} onChange={e => set("comment", e.target.value)} />
                            </div>

                            <button className="submit-btn" onClick={() => alert("Arizangiz yuborildi!")}>
                                Submit Application <IcoArrow />
                            </button>
                            <p className="form-note">By submitting this form, you agree to our terms of service and privacy policy.</p>
                        </div>

                        {/* right */}
                        <div className="right-col">
                            <div>
                                <div className="faq-heading">Enrollment FAQ</div>
                                <div className="faq-list">
                                    {FAQS.map(({ q, a }, i) => (
                                        <div className="faq-item" key={q}>
                                            <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                                <span>{q}</span><IcoChev open={openFaq === i} />
                                            </button>
                                            {openFaq === i && <div className="faq-ans">{a}</div>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="still-card">
                                <div className="still-card-content">
                                    <h3>Still have questions?</h3>
                                    <p className="sc-p">Our support team is available 24/7 on Telegram.</p>
                                    <button className="still-link">Contact Support <IcoArrow /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══ MAP ══ */}
            <section className="map-sec">
                <div className="wrap">
                    <div className="map-head">
                        <h2>Find Us on the Map</h2>
                        <button className="map-open">Open in Google Maps <IcoArrow /></button>
                    </div>
                    <div className="map-box">
                        <div className="map-pin-area">
                            <div className="map-dot"><IcoPin /></div>
                            <div className="map-tooltip">
                                <h4>YuksalishLC Main Campus</h4>
                                <p>Amir Temur Str. 15</p>
                            </div>
                        </div>
                        <div className="map-zoom">
                            <button className="map-z">+</button>
                            <button className="map-z">−</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ FOOTER ══ */}
            <div className="footer-wrap">
                <div className="wrap">
                    <div className="footer">
                        <p className="f-copy">© 2024 Yuksalish Learning Center. All rights reserved.</p>
                        <div className="f-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
