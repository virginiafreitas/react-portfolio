import github from "../../../public/images/github.png";
import linkedin from "../../../public/images/linkedin.png";
import medium from "../../../public/images/medium.jpg";

export default function Footer() {
    return (
      <footer className="justify-content-center">
        <div>
            <a className="p-1" href="https://www.github.com/virginiafreitas"><img src={github} className="img-fluid" width={35}></img></a>
            <a className="p-1" href="https://www.linkedin.com/in/virginia-freitas"><img src={linkedin} className="img-fluid" width={35}></img></a>
            <a className="p-1" href="https://medium.com/@virginiacdefreitas"><img src={medium} className="img-fluid" width={35}></img></a>
        </div>
        <div>
            <p className="contact-me-margin">Contact Me:📱+1(628)233-0860 ∣ 📧 virginiacdefreitas@gmail.com </p>
        </div>
      </footer>
    );
  }