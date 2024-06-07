import bannerImage from '../../../assets/pictures/IMG_20230915_095331.jpg'
import { Image, DivAlt, DivContent, ImageDiv, DivTitle } from './styled';

import { Tittle, Text } from '../../styles/styledTexts';

export default function Banner(){
    return (
        <DivAlt>
            <DivContent>
                <div className='tittle-container'>
                    <Tittle size="120">Doceria Bizus</Tittle>
                    <Text size="25" width="660px">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </Text>
                </div>
                <ImageDiv>
                    <Image src={bannerImage} alt='Foto brigadeiros'/>
                </ImageDiv>
            </DivContent>
        </DivAlt>
    )
}