import React,{useEffect} from "react";
import '../Css/footer.css';
import video from '../Imagens/img backgroud praia/mulher na rede-1321431851-640_adpp_is.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter } from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'



const  Footer = () => {

    useEffect(() =>{
        Aos.init({ duration: 2000})
    }, [])

    return (
       <section className="footer">
        <div className="videoDiv">
            <video src={video} loop autoPlay muted type="mulher na rede-1321431851-640_adpp_is.mp4"></video>
        </div>

        <div className="secContent container">
            <div data-aos="fade-up" className="contactDiv flex">
                <div className="text">
                    <small> MANTENHA CONTATO </small>
                    <h2> Viaje conosco </h2>
                </div>


                <div data-aos="fade-up" className="inputDiv flex">
                    <input type="text" placeholder="Digite o endereço de e-mail"/>
                    <button className="btnFooter btn-secondary flex" type='submit'> MANDAR <FiSend className="icon"/> 
                    </button>
                </div>
            </div>

            <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                        <a href="contatos" className="logo flex"> <MdOutlineTravelExplore className="icon"/> VUMBORA.</a>
                    </div>
                    <div data-aos="fade-up" className="footerParagraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Delectus provident in ea magni sapiente? In dolore minima 
                        maxime esse odit ducimus perspiciatis harum delectus, incidunt 
                        natus necessitatibus quo labore blanditiis!
                    </div>
                    <div data-aos="fade-up" className="footerSocials">
                        <AiOutlineTwitter className="icon"/>
                        <AiFillYoutube className="icon"/>
                        <FaTripadvisor className="icon"/>
                        <AiFillInstagram className="icon"/>
                    </div>
                </div>

                         {/* grupo um */}
                <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks grid">
                    <div className="linkGroup">
                        <span className="groupTitle">
                             Nossa Agência
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                             Serviços
                        </li>
                        
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Agência
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Turismo
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Seguro
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                             Pagamento
                        </li>
                      </div>  
      
                            
                             {/* grupo dois */}
                    <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup grid">
                        <span className="groupTitle">
                             Parceiros
                        </span>
                        
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                             Recode
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            HostelWorld
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Trivago
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            tripdivisor
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                             Rentcards 
                        </li>
                     </div>

                         {/* grupo três*/}
                    <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup grid">
                        <span className="groupTitle">
                             Último Minuto
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                             Bahia
                        </li>
                        
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Acre
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                             Maranhão
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Goiás
                        </li>

                        <li className="footerList">
                            <FiChevronRight className="icon"/>
                             Rio Grande do Sul
                        </li>
                      </div>
                    </div>

                <div className="footerDiv flex">
                <small className="small"> VUMBORA! AGÊNCIA DE VIAGEM  <AiOutlineCopyrightCircle/> Copyright 2022 VUMBORA </small>
                </div>

            </div>
        </div>
    </section>
    
    )
}

export default Footer;