import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h5 className="text-base mt-16">Get In Touch</h5>
      <h1 className="mt-[6px] text-4xl text-[#128f6c]">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-card__detail">
            <img
              className="object-cover w-20"
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
              srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png 2x "
              alt=""
              aria-hidden="true"
              role="presentation"
            />
            <p>duonghainguyen000@gmail.com</p>
            <a href="http://localhost:3000/#contact">Send a message</a>
          </div>
          <div className="contact-card__detail">
            <img
              className="object-cover w-6"
              src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=6825c5&amp;_nc_ohc=lgyubOiBpT0AX-qBcb-&amp;_nc_ht=scontent.fhan3-2.fna&amp;oh=00_AfDjWeBAmE66e_aOR5XYB5ue97snjJfAVFIVJpj_-27YoQ&amp;oe=641CCE3D"
              alt="Messenger"
            />
            {/* <p>duonghainguyen000@gmail.com</p> */}
            <a href="http://localhost:3000/#contact">Send a message</a>
          </div>
          <div className="contact-card__detail">
            <img
              alt="Zalo"
                          src="https://stc-zaloprofile.zdn.vn/pc/v1/images/logo.svg"
                          className="object-cover w-10"
            />
            <p>+84 372866147</p>
            <a href="http://localhost:3000/#contact">Call me</a>
          </div>
        </div>

        <div className="contact-form">test</div>
      </div>
    </div>
  );
};

export default Contact;
