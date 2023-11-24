import headshot from "../../../public/headshot.jpg"

export default function AboutMe() {
    return (
      <div>
        <img src={headshot} className="img-fluid rounded-start headshot" alt="Profile Photo"></img>
        <section>
          <p><strong>Hello, world!</strong></p>
          <p>I'm Virginia Freitas, a dog lover and a fan of outdoor sports. My weekdays are dedicated to work as an engineer and to crafting innovative web and software applications.</p>
          <p>My journey in programming began during my Bachelor's in Civil Engineering. It was there where I first encountered the world of coding, with courses like 'Introduction to Computer Science', 'Computer Programming (Pascal)', and 'Numeric Calculus (Matlab)'. This initial spark grew into an interest for technology business during my Master's in Engineering Management, which had a tech focus. Here, I immersed myself in the technical courses of Software & Cloud Architecture, Python Programming, and Data Analytics. That is how I decided to join a significant pivot in my career path with the Full Stack Web Development program at UC Berkeley, a very intense learning program. It was here that I fully embraced my developer identity. Each project and line of code since then has been a step towards fulfilling my dream.</p>
          <p>I believe in the power of continual learning, especially in the ever-evolving tech industry. Looking ahead, I'm excited about expanding my knowledge in cloud computing and machine learning.</p>
          <p>You're currently navigating through one of my creations built with React.js. If you click on the 'Portfolio' tab, you will find my recent projects, along with a direct link to my Github page for a deeper insight.</p>
          <p>Feel free to reach out if you're curious to learn more about my work or think my skill set could contribute to your projects in any way.</p>
          <p><strong>Cheers!</strong></p>
        </section>
        <hr></hr>
      </div>
    );
  }
  