import { ContactStyles } from "./ContactStyles";

const Contact = () => {
  return (
    <ContactStyles id="contact">
      <div className="container">
        <div className="formContainer">
          <form action="">
            <div className="title">
              <h1>Liên hệ</h1>
            </div>

            <div className="container-input">
              <div className="input">
                <input type="text" name="fullname" placeholder="Họ và Tên" />
              </div>
              <div className="input">
                <input type="email" name="email" placeholder="Địa chỉ email" />
              </div>
              <div className="textare">
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Lời nhắn"
                ></textarea>
              </div>
            </div>

            <div className="buttonContainer">
              <a href="/#" className="button btn-right">
                hesman studio
              </a>
              <button className="button btn-left">gửi</button>
            </div>
          </form>
        </div>
        <div className="imgContainer">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Frame.svg"
            alt=""
          />
        </div>
      </div>
    </ContactStyles>
  );
};

export default Contact;
