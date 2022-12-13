import footerBackground from 'public/image/Rectangle.png';
import { footer } from '../../data/Footer';
import Button from '../../Ui/button';

const Footer = () => {
    return (
        <>
            <section className="  bg- bg-no-repeat bg-top  bg-cover w-full h-full px-4 " style={{
                backgroundImage: `url(${footerBackground.src})`,
            }}
            >
                <div className='grid grid-cols-1 font-roboto lg:grid-cols-3 md:px-[1.5rem] lg:px-[6.25rem]'>
                    <div>
                        <span className="sr-only">Your Company</span>
                        <span className="font-bold text-[1.4rem]">AtrinTech</span>
                        <p className='pt-[0.75rem] text-[#DED5FC] font-medium'>We are an international software
                            developemnt company<br /> based in ...</p>
                        <div className='pt-[2rem] pb-[52px] flex flex-col'>
                            <span className='block'>IRAN Office </span>
                            <span className='block'>+989330372703 </span>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col md:flex-row w-full lg:center'>
                            <div className='grid grid-cols-3 gap-12 md:gap-[6rem]  md:grid-cols-2 md:gap-y-2 md:pt-[3rem] md:pb-[73px]'>
                                <>
                                    {
                                        footer.map(footer => {
                                            return (
                                                <>
                                                    <ul className='pb-5  md:pb-0 lg:pb-[2rem] md:flex md:items-center '>
                                                        <li key={footer.id}>
                                                            <a href="#"
                                                               className='text-[11px] md:text-[1rem] font-roboto flex items-center gap-2 text-[#DED5FC] '>
                                                                <div
                                                                    className="w-[0.5rem] h-[0.5rem] rounded-full font-normal bolt"></div>
                                                                {footer.name}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </>
                                            )
                                        })
                                    }
                                </>
                            </div>
                            <div className='lg:hidden flex md:justify-start flex-col lg:flex-row lg:hidden pt-[3.25rem] text-center md:flex md:flex-col  md:w-full md:items-end'>
                                <p className='text-[#DED5FC] text-[11px] font-roboto font-medium md:text-revert'>Have a cool ideal in
                                    mind? Let’s talk about it.</p>
                                <div className=' md:mr-[75px] md:ml-[75px]  pb-[5rem] pt-5 center md:justify-end'>
                                    <Button btnClassName=''> Get Started </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex md:hidden pt-[3.25rem] text-center md:flex md:flex-col md:justify-end md:w-full md:items-end lg:justify-start'>
                        <p className='text-[#DED5FC] text-[11px] font-roboto font-medium md:text-revert'>Have a cool ideal in
                            mind? Let’s talk about it.</p>
                        <div className=' md:mr-[75px] md:ml-[75px]  pb-[5rem] pt-5 center md:justify-end'>
                            <Button btnClassName=''> Get Started </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
