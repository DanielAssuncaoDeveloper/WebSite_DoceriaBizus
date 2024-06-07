import { ButtonArrow } from "./styled"
import ArrowSVG from '../../../../assets/icons/arrow_icon.svg'

export default function ButtonNext(props) {
    return (
        <ButtonArrow direction={props.direction}>
            <span>
                <img src={ArrowSVG} />
            </span>
        </ButtonArrow>
    )
}