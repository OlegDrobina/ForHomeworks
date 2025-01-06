import Link from "../Link/Link";
const AboutMe = () => {
    return (
        <div>
            <h1 className="aboutme__header">About me</h1>
            <ul className = 'aboutme__list'>
                <li>
                    Phone number: <Link href="tel:+12321231">+12321231</Link>
                </li>
                <li>
                    Email: <Link href="mailto: o.drobina@creatio.com">o.drobina@creatio.com</Link>
                </li>
                <li>
                    Git: <Link href="https://github.com/OlegDrobina/">https://github.com/OlegDrobina/</Link>
                </li>
            </ul>
        </div>
    )
}

export default AboutMe;