import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "priyanshurajanand123456@gmail.com" },
    { logo: "logo-whatsapp", text: "+91 9065148710" },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kgwk3im",
        "template_kqpsfow",
        form.current,
        "ussyVtum0TmIxA9v9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully !");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-10 px-3 text-white bg-gray-800">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex lg:flex-row flex-col
         gap-3  bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="bg-gray-700 outline-none rounded-lg p-3"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              className="bg-gray-700 outline-none rounded-lg p-3"
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              required
            />
            <textarea
              className="bg-gray-700 outline-none rounded-lg p-3"
              placeholder="Your Message"
              name="message"
              rows={10}
              required
            ></textarea>
            <button className="btn-primary w-fit" type="submit" value="send">
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-4">
            <div
              className="flex  gap-4  items-center justify-center 3xl:full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.6107607847966!2d93.93584267524648!3d24.842981477940675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37492785030cfa5d%3A0xa9e85369c96babc0!2sIndian%20Institute%20of%20Information%20Technology%20Manipur!5e0!3m2!1sen!2sin!4v1688284090692!5m2!1sen!2sin"
                width="700"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="location"
              ></iframe>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row md:flex-row">
              {contact_info.map((contact, i) => (
                <div
                  key={i}
                  className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
                >
                  <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                    <ion-icon name={contact.logo}></ion-icon>
                  </div>
                  <p className="md:text-base text-sm  break-words">
                    {contact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
