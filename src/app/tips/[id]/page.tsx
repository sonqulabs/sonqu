import { ButtonPrevius } from "@/common/components/customize/ButtonPrevius";
import { TopSeparator } from "@/common/components/customize/TopSeparator";
import Image from "next/image";
import { Steps } from './components/Steps';
import { getTips } from "./data/Tips";

export default function Page({ params }: { params: { id: string } }) {

    const tips = getTips();

    return (
        <section className="flex-1 relative">
            <div className="wrapper">
                <TopSeparator />
            </div>
            <div className='container pb-14'>
                <div className="max-w-4xl mx-auto mb-7">
                    <ButtonPrevius />
                    <h1 className="font-jallaOne text-5xl md:text-7xl uppercase mb-4 md:mb-8 my-8">TIPS</h1>
                    <h4 className="fonrjallOne text-lg md:text-3xl font-semibold">
                        ¿Cómo se prende el carbón?
                    </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-11">
                    <div className="flex justify-center md:justify-normal">
                        <Image
                            src='/carbon-tip.jpg'
                            alt='Imagen del tip'
                            className="object-cover w-[381px] h-[381px] overflow-hidden rounded-3xl"
                            width={381}
                            height={381}
                        />
                    </div>
                    <span className="text-base leading-[30px] flex items-center text-justify md:text-start">
                        Saber prender el carbón es escencial para hacer parrillas, asados, o comidas que requieran el uso del carbón. Aprende la forma fácil de cómo enceder el fuego con carbón para tus parillas.
                        Acontinuación te enseñaremos unos pasos a detales para que puedas prender el carbón por tu cuenta sin necesidad de ayuda y te luzcas en los asados.
                    </span>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Steps steps={tips}/>
                </div>
            </div>
        </section>
    )
}