import headshot from "../../../public/headshot.jpg"

export default function AboutMe() {
    return (
      <div>
        <img src={headshot} className="img-fluid rounded-start" alt="Profile Photo"></img>
        <p>
        Welcome to my portfolio! I am Virginia Freitas, a web developer with a background in civil engineering and project management.
        I have recently transitioned careers into the tech industry, armed with a Full Stack Coding Bootcamp certification from UC Berkeley and a Masters degree in Engineering Management.
        With four years of experience in construction management, I bring strong project coordination, problem-solving, and attention to detail to all my projects. 
        Outside of work, I enjoy the company of my dog, Bagel, and the thrill of outdoor sports. 
        Explore my portfolio to see some of my latest web development projects.
        I am enthusiastic to continuing learning and to contribute my skills and to get my first job in tech industry.
        </p>
      </div>
    );
  }
  