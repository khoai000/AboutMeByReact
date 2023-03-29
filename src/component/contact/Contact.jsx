import React from "react";
import "./contact.css";
import GMAIL from "../../assets/mail.jpg";
import MESS from "../../assets/messenger.png";
import { Button, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form] = useForm();
  const onFinish = async (values) => {
    const sending = message.loading("Sending...");
    const result = await emailjs.send(
      "service_xcauajq",
      "template_gyir19j",
      values,
      "GHADjin2iHQ-vi5Jy"
    );
    if (result) {
      message.success("Send message successfull!");
      form.resetFields();
    } else {
      message.error("Failed!");
    }
    sending();
  };

  return (
    <div className="contact" id="contact">
      <h5>Get In Touch</h5>
      <h1 className="text-[#128f6c]">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-card__detail">
            <img
              className="object-cover w-7 text-white"
              src={GMAIL}
              alt="Gmail"
            />
            <a
              href="#contact"
              onClick={() => window.open("mailto:duonghainguyen000@gmail.com")}
            >
              Send a message
            </a>
          </div>
          <div className="contact-card__detail">
            <img className="object-cover w-6" src={MESS} alt="Messenger" />
            {/* <p>duonghainguyen000@gmail.com</p> */}
            <a href="https://www.messenger.com/t/100007023756081">
              Send a message
            </a>
          </div>
          <div className="contact-card__detail">
            <img
              alt="Zalo"
              src="https://stc-zaloprofile.zdn.vn/pc/v1/images/logo.svg"
              className="object-cover w-10"
            />
            <a href="tel:+84372866147">Call me</a>
          </div>
        </div>

        <div className="contact-form">
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                allowClear
                className="h-10"
                placeholder="Enter your name!"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                allowClear
                className="h-10"
                placeholder="Enter your email!"
              />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Enter your message!"
                allowClear
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="btn-submit">
              Send message
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
