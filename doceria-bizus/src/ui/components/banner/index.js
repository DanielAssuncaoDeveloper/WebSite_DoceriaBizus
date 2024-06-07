import bannerImage from '../../../assets/pictures/IMG_20230915_095331.jpg'
import { Image, SubTitle, Title, DivAlt, DivContent, ImageDiv, DivTitle } from './styled';

export default function Banner(){
    return (
        <DivAlt>
            <DivContent>
                <DivTitle>
                    <Title>Doceria Bizus</Title>
                    <SubTitle>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </SubTitle>
                </DivTitle>
                <ImageDiv>
                    <Image src={bannerImage} alt='Foto brigadeiros'/>
                </ImageDiv>
            </DivContent>
        </DivAlt>
    )
}