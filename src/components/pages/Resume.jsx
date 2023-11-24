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
        <button class="download-btn" onClick={handleDownload}>Download Resume PDF</button>
        <h2 class="coding-skills">Coding Skills</h2>
        
        <table border="1">
            <tr><td>HTML 5</td><td>CSS</td><td>Javascript</td><td>Object-Oriented Programming (OOP)</td><td>Python</td></tr>
            <tr><td>Java</td><td>Spring</td><td>Gradle</td><td>Amazon Web Services (AWS)</td><td>Azure</td></tr>
            <tr><td>Node.js</td><td>SQL</td><td>MERN</td><td>Object-Relational Mapping (ORM)</td><td>MongoDB</td></tr>
            <tr><td>Express.js</td><td>AJAX</td><td>NoSQL</td><td>Progressive Web Applications (PWA)</td><td>Fetch</td></tr>
            <tr><td>Web API</td><td>State</td><td>jQuery</td><td>Model-View Controller (MVC)</td><td>Day.js</td></tr>
            <tr><td>Server Side API</td><td>Git Bash</td><td>Computer Science</td><td>Developer Tools</td><td>JSON</td></tr>
            <tr><td>Third Party API</td><td>Bootstrap</td><td>Problem-solving</td><td>Draggable</td><td>Insomnia</td></tr>
            <tr><td>React</td><td>Bulma</td><td>Pseudocoding</td><td>Command Line</td><td>GitHub</td></tr>
        </table>

    </div>
    )
}