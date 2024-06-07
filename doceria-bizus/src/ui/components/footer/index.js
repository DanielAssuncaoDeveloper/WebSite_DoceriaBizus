import InstagramSVG from '../../../assets/icons/instagram-icon.svg'
import WhatsappSVG from '../../../assets/icons/whatsapp-icon.svg'
import { ContainerDiv, FooterDiv, FooterStyle, IconsDiv, ImagePaddingI, ImagePaddingW } from "./styled";

export default function Footer(){
    return(
        <ContainerDiv>
            <IconsDiv>
                <ImagePaddingI src={InstagramSVG} alt=''/>
                <ImagePaddingW src={WhatsappSVG} alt=''/>
            </IconsDiv>
            <FooterDiv>
                <FooterStyle>Info • Support • Marketing</FooterStyle>
                <FooterStyle>Termos de uso • Política de privacidade</FooterStyle>
                <FooterStyle>© 2024 Doceria Bizus</FooterStyle>
            </FooterDiv>
        </ContainerDiv>
    )
}