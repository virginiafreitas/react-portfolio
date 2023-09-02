import headshot from "../../../public/headshot.jpg"

export default function AboutMe() {
    return (
      <div>
        <img src={headshot} className="img-fluid rounded-start" alt="Profile Photo"></img>
        <p>
        Meet Virginia Freitas, a versatile professional with a solid background in civil engineering and a passion for technology.
        With four years of experience in construction management, I bring expertise in project coordination, problem-solving, and attention to detail.
        Currently transitioning into web development, I am driven by a deep enthusiasm for technology and a commitment to continuous learning.
        Outside of work, I find inspiration in the companionship of my dog Bagel and in practicing outdoor sports.
        Lets collaborate on your next project and combine technology, engineering, and innovation for exceptional results!
        </p>
      </div>
    );
  }
  