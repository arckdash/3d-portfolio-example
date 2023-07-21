import { BallCanvas } from "."
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((t, index) => (
                <div className="w-28 h-28" key={t.name}>
                    <BallCanvas icon={t.icon} />
                </div>
            ))}
        </div>
    )
}

export default SectionWrapper(Tech, '');