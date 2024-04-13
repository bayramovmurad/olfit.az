import { MdFitnessCenter } from "react-icons/md";

const AboutContext = () => {
    return (
        <section>
            <div className="flex gap-x-10 justify-center mt-20">
              <div className="relative">
                    <div className=" before:border-2  absolute top-0 left-[-20px]  before:border-green-500"></div>
                    <img className="w-[450px] h-[500px] object-left" src="./assets/images/aboutContentImg1.png" alt="" />
                    <div className=" before:border-2 absolute bottom-0 right-[-20px] before:border-green-500"></div>
              </div>
                <div className="w-[500px]">
                    <div className="relative w-[208px]">
                        <img src="./assets/icons/subtitle.svg" className="relative" alt="" />
                        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">Üstünlüklerimiz</span>
                    </div>
                    <h3 className="mt-4 font-semibold text-[18px] flex gap-x-2">
                        <span className="text-green-500"><MdFitnessCenter size={26} /></span>Sen demek olarki serhedsiz idman hereketlerinden istediyini idman hereketini bir toxunusla sececeksen.
                    </h3>
                    <h3 className="mt-4 font-semibold text-[18px] flex gap-x-2">
                        <span className="text-green-500"><MdFitnessCenter size={26} /></span>Sen istediyin idman hereketini secerek sixilmadan ve eylenerek fit ola bileceksen.
                    </h3>
                    <h3 className="mt-4 font-semibold text-[18px] flex gap-x-2">
                        <span className="text-green-500"><MdFitnessCenter size={26} /></span>Sen saytda qeydiyyatdan kecerek ozune heftelik program hazirlaya, favori hereketlerini bu programa daxil ede bileceksen.
                    </h3>
                    <h3 className="mt-4 font-semibold text-[18px] flex gap-x-2">
                        <span className="text-green-500"><MdFitnessCenter size={26} /></span>Olke uzre isinde en bacariqli dietoloq ve fitness muellimleriyle unsiyyetde olaraq onlardan meslehet ala bilceksen.
                    </h3>
                    <h3 className="mt-4 font-semibold text-[18px] flex gap-x-2">
                        <span className="text-green-500"><MdFitnessCenter size={26} /></span>Diger olfit istifadecilerinin paylasimlarini gorecek ve deyisimini paylasa bileceksen.
                    </h3>

                </div>
            </div>
        </section>
    )
}
export default AboutContext