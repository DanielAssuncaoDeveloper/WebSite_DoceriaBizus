import InstagramSVG from '../../../assets/icons/instagram-icon.svg'
import WhatsappSVG from '../../../assets/icons/whatsapp-icon.svg'
import { ContainerDiv, FooterDiv, FooterStyle, IconsDiv, ImagePaddingI, ImagePaddingW } from "./styled";

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <ContainerDiv>
            <IconsDiv>
                <a href="https://www.instagram.com/doceriabizus" target='_blank'>
                    <ImagePaddingI src={InstagramSVG} alt='' />
                </a>

                <a href="https://api.whatsapp.com/message/EZO2NNLVYPNXG1?autoload=1&app_absent=0" target='_blank'>
                    <ImagePaddingW src={WhatsappSVG} alt=''/>
                </a>
            </IconsDiv>
            <FooterDiv>
                <FooterStyle>Info • Support • Marketing</FooterStyle>
                <FooterStyle>Termos de uso • Política de privacidade</FooterStyle>
                <FooterStyle>© 2024 Doceria Bizus</FooterStyle>
            </FooterDiv>
        </ContainerDiv>
    )
}