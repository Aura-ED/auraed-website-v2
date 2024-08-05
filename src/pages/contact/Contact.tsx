import React from "react";
import SecondaryCover from "../../layouts/secondaryCover";
import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaHandsHelping,
    FaUsers,
} from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <>
            <SecondaryCover
                title="Contact"
                description="We would love to hear from you! Whether you have questions, want to get involved, or simply want to learn more about our work, feel free to reach out."
            />
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-primary mr-3" />
                                <span>Kathmandu, Nepal</span>
                            </div>
                            <div className="flex items-center">
                                <FaPhoneAlt className="text-primary mr-3" />
                                <a
                                    href="tel:+9779845399459"
                                    className="text-sky-500 hover:text-sky-800 hover:underline underline-offset-4"
                                >
                                    <span>+977 9779845399459</span>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-primary mr-3" />
                                <a
                                    href="mailto:info@auraed.org"
                                    className="text-sky-500 hover:text-sky-800 hover:underline underline-offset-4"
                                >
                                    <span>info@auraed.org</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Get Involved</h2>
                        <p className="mb-4">
                            There are many ways you can support our mission:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <FaHandsHelping className="text-primary mr-3" />
                                <p>
                                    <span className="font-bold">Volunteer: </span>
                                    Join us in making a difference by volunteering your time and
                                    skills.
                                </p>
                            </li>
                            <li className="flex items-center">
                                <FaUsers className="text-primary mr-3" />
                                <p>
                                    <span className="font-bold">Partner with us: </span>
                                    Collaborate with us to bring digital literacy to more
                                    communities across Nepal.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
