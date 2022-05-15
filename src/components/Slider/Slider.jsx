import SimpleImageSlider from "react-simple-image-slider";

import slideImage from "../../data/images"

import { Container } from "./styles";

export default function Slider() {
    return (
        
          <Container>
               <SimpleImageSlider
                    width={896}
                    height={504}
                    images={slideImage}
                    showBullets={true}
                    showNavs={true}
                />
          </Container>

       
    )
}