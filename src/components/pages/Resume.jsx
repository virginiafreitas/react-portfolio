import resumePDF from '../../../public/Resume Virginia 2023.pdf'


const handleDownload = () => {
    // Create a function to trigger the PDF download
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Resume Virginia 2023.pdf';
    link.click();
  };

export default function Resume () {
    return (

    <div id="skills-list">
        <button onClick={handleDownload}>Download Resume PDF</button>
        <h2 class="coding-skills">Coding Skills</h2>
        <ul>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>MERN</li>
            <li>State</li>
            <li>MongoDB</li>
            <li>Insomnia</li>
            <li>Express.js</li>
            <li>Computer Science for JavaScript</li>
            <li>NoSQL</li>
            <li>Progressive Web Applications (PWA)</li>
            <li>Developer Tools</li>
            <li>Web API</li>
            <li>Server Side API</li>
            <li>Third Party API</li>
            <li>Object-Oriented Programming (OOP)</li>
            <li>Object-Relational Mapping (ORM) </li>
            <li>Model-View Controller (MVC)</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>jQuery</li>
            <li>Git Bash</li>
            <li>Problem-solving</li>
            <li>Pseudocoding</li>
            <li>Command Line</li>
            <li>GitHub</li>
            <li>Day.js</li>
            <li>AJAX</li>
            <li>Fetch</li>
            <li>JSON</li>
            <li>Draggable</li>
        </ul>
    </div>
    )
}