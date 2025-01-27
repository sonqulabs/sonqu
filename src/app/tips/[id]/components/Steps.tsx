import Image from "next/image"
import { Step } from "../interfaces/step"

export const Steps = ({ steps }: Props) => {

    return (
        <div>
            <h4 className="fonrjallOne text-lg md:text-3xl font-semibold mb-7">PASOS:</h4>
            <div className="flex flex-col gap-14">
                {
                    steps.map((step, index) => (
                        <div className="grid grid-cols-1 md:grid-cols-2" key={step.id}>
                            <div className="md:hidden flex justify-center mb-4">
                                <span className="text-lg font-semibold rounded-full bg-black text-white p-3 w-14 h-14 flex justify-center items-center">
                                    {index + 1}
                                </span>
                            </div>
                            <div className="flex justify-center md:justify-normal">
                                <Image
                                    src={step.image}
                                    alt='Imagen del paso'
                                    className="object-cover w-[381px] h-[381px] overflow-hidden rounded-3xl"
                                    width={381}
                                    height={381}
                                />
                            </div>
                            <div className="flex flex-col gap-5 justify-center mt-4 md:mt-0">
                                <span className="hidden md:flex text-lg md:text-xl font-semibold justify-center md:justify-normal">{index + 1}</span>
                                <p className="text-justify md:text-start">{step.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

type Props = {
    steps: Step[]
}
