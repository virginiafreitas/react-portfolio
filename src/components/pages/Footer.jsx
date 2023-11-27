import github from "../../../public/images/github.png";
import linkedin from "../../../public/images/linkedin.png";
import medium from "../../../public/images/medium.jpg";

export default function Footer() {
    return (
      <footer className="justify-content-center">
        <div>
            <a className="p-1" href="https://www.github.com/virginiafreitas" target="_blank"><img src={github} className="img-fluid" width={35}></img></a>
            <a className="p-1" href="https://www.linkedin.com/in/virginia-freitas" target="_blank"><img src={linkedin} className="img-fluid" width={35}></img></a>
            <a className="p-1" href="https://medium.com/@virginiacdefreitas" target="_blank"><img src={medium} className="img-fluid" width={35}></img></a>
        </div>
        <div>
            <p className="contact-me-margin">Contact Me:📱+1(628)233-0860 ∣ 📧 virginiacdefreitas@gmail.com </p>
        </div>
      </footer>
    );
  }