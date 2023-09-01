import resumePDF from '../../../public/Resume Virginia 2023.pdf'

export default function Resume () {
    return (
        <object data={resumePDF} type="application/pdf" width="100%" height="500px">
        <p>Unable to display PDF file. <a href={resumePDF}>Download</a> instead.</p>
        </object>
    )
}