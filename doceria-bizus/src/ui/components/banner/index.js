import bannerImage from '../../../assets/pictures/IMG_20230915_095331.jpg'
import { Image, DivAlt, DivContent, ImageDiv, DivTitle } from './styled';

import { Tittle, Text } from '../../styles/styledTexts';

export default function Banner() {
    return (
        <DivAlt>
            <DivContent>
                <div className='tittle-container'>
                    <Tittle size="110">Doceria Bizus</Tittle>
                    <Text size="22" width="660px">
                        Explore um mundo de sabores irresistíveis em nosso site, onde cada doce é uma experiência única. Dos clássicos brigadeiros aos deliciosos churros e aos irresistíveis beijinhos, oferecemos uma variedade de guloseimas artesanais para adoçar seu dia.
                    </Text>
                </div>
                <ImageDiv>
                    <Image src={bannerImage} alt='Foto brigadeiros' />
                </ImageDiv>
            </DivContent>
        </DivAlt>
    )
}