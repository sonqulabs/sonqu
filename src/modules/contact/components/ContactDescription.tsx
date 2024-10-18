import Image from "next/image"

export const ContactDescription = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
                <Image
                    src="/person-contact.png"
                    alt="person"
                    width={383}
                    height={383}
                />
            </div>
            <h5 className="flex justify-center text-2xl font-bold text-sonqu-black-300">SONQU</h5>
            <p className="flex justify-center text-center">Más de 15 años de experiencia en el rubro de <br/> la cocina peruana.</p>
        </div>
    )
}
