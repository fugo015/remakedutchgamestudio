import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import start_image from "../images/start_image.gif";
import vr_image from"../images/game-vr.jpg";
import engagement_image from "../images/engagement-game.jpg";
import enertainment_image from "../images/entertaiment-game.jpg";
import serious_image from "../images/serious-game.jpg";
// import interesse_image from "../images/intresse.png";
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
        />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* navbar. */}
      <HeadContainer>
        <Header />
       
      </HeadContainer>

      {/*video image en de box op de gif */}
      <StartImage/>
      <Box>
        <BoxContent>
          <BoxTitel>Game laten ontwikkelen</BoxTitel>
          <BoxText>
            Wij bij Dutch Game Studio zijn gespecialiseerd in het ontwikkelen van games.
            Bekijk hieronder de mogelijkheden.
          </BoxText>
          <ScrollButton href="#scroll"></ScrollButton>
        </BoxContent>
      </Box>
      <FluidContainer id="scroll">
        <Row>
        <VrImage className="col-md-6 push-md-6 home__content_block home__block-right home__block-bg"></VrImage>
        <VrTextColom className="col-md-6 pull-md-6 home__content_block home__content_block-content home__content_block-content-right-align">
          <VrTitle>VR | AR | SIMULATIE GAME</VrTitle>
          <VrText>Bij een VR game waan je je in een andere virtuele wereld. Een AR game is niet volledig virtueel maar zijn er virtuele elementen die je toe kan voegen aan de bestaande wereld.</VrText>
          <VrText>Door gebruik te maken van een Virtual Reality bril, lijkt het alsof je je in het spel bevindt. Augmented Reality is te gebruiken doormiddel van bijvoorbeeld je smartphone of een speciale AR-bril zoals de Hololens. Daarnaast ontwikkelen wij ook 3D simulatiegames. Simulatiegames worden met name gebuikt om praktijksituaties te oefenen, bijvoorbeeld in de medische wereld en bij Defensie.</VrText>
          <ButtonGroen>Contact opnemen</ButtonGroen>
          <ButtonWit>Offerte aanvragen</ButtonWit>
        </VrTextColom>
        </Row>
      </FluidContainer>

        {/* engagement game*/}
      <FluidContainer>
        <Row>
        <EngagementImage className="col-md-6 push-md-6 home__content_block home__block-left home__block-bg"></EngagementImage>
        <TextColomRechts className="col-md-6 pull-md-6 home__content_block home__content_block-content home__content_block-content-right-align">
          <VrTitle>ENGAGEMENT GAME</VrTitle>
          <VrText>Een engagement game is erop gericht om uw merk/product onder de aandacht te brengen.</VrText>
          <VrText>Uw geeft hiermee uw klant de ultieme Merkbeleving. Laat door middel van een game een blijvende indruk achter bij uw klanten en zorg dat zij uw merk niet meer vergeten.</VrText>
          <ButtonGroen>Contact opnemen</ButtonGroen>
          <ButtonWit>Offerte aanvragen</ButtonWit>
        </TextColomRechts>
        </Row>
      </FluidContainer>
      {/* entertainment game*/}
      <FluidContainer>
        <Row>
        <EntertainmentImage className="col-md-6 push-md-6 home__content_block home__block-right home__block-bg"></EntertainmentImage>
        <VrTextColom className="col-md-6 pull-md-6 home__content_block home__content_block-content home__content_block-content-right-align">
          <VrTitle>ENTERTAINMENT GAME</VrTitle>
          <VrText>Een Entertainment Game heeft als primair uitgangspunt plezier/spelen (Denk aan Candy Crush, Angry Birds etc.)</VrText>
          <VrText>Entertainment games zijn te spelen op verschillende platformen zoals via consoles, IPhone, Ipad en Android.</VrText>
          <ButtonGroen>Contact opnemen</ButtonGroen>
          <ButtonWit>Offerte aanvragen</ButtonWit>
        </VrTextColom>
        </Row>
      </FluidContainer>
            {/* serious game*/}
            <FluidContainer>
        <Row>
        <SeriousImage className="col-md-6 push-md-6 home__content_block home__block-right home__block-bg"></SeriousImage>
        <TextColomRechts className="col-md-6 pull-md-6 home__content_block home__content_block-content home__content_block-content-right-align">
          <VrTitle>SERIOUS | APPLIED GAME</VrTitle>
          <VrText>Een serious game ook wel E-learning game is een spel met een ander primair doel dan puur vermaak.</VrText>
          <VrText>Applied games zijn steeds meer in opkomst en worden door bedrijven en instellingen gebruikt om trainingen en leren leuker te maken.</VrText>
          <ButtonGroen>Contact opnemen</ButtonGroen>
          <ButtonWit>Offerte aanvragen</ButtonWit>
        </TextColomRechts>
        </Row>
      </FluidContainer>

      {/*footer */}
      <Footer>
        <Interesse>
          <InteresseTitel>Interesse?</InteresseTitel>
          <InteresseText>Neem contact op voor de mogelijkheden.</InteresseText>
          <ButtonGroen>Contact opnemen</ButtonGroen>
        </Interesse>
        {/* <InteresseIMG></InteresseIMG> */}
      </Footer>
      

    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`

`;

const Box = styled.div`
position: absolute;
bottom: 0;
content: " ";
left: 0;
right: 0;
z-index: 1;
}
`;

const BoxContent = styled.div`
background: #fff;
    padding: 25px;
    border-top: 5px solid #f1f1f1;
    text-align: center;
    margin: 0 auto;
    max-width: 600px;
    animation: card .5s;
`;

const BoxTitel = styled.h1`
letter-spacing: .12em;
font-size: 20px;
font-weight: 600;
padding-bottom: 15px;
`;

const BoxText = styled.p`
  color: #0f0e11;
  line-height: 2em;
  font-size: 16px;
`;

const ScrollButton = styled.a`
text-align: center;
    position: relative;
    padding: 7.5px;
    animation: scaling 1s infinite alternate;
    -webkit-animation: scaling 1s infinite alternate;
    transition: all .1s ease-in-out;
    line-height: 0;
    margin: 0 auto;
    background: #27ae60;
    display: inline-block;
    border-radius: 3px;
`;

const FluidContainer = styled.div`
  max-width: 100%;
`;

const Row = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
`;

const StartImage = styled.div`
  background: url(${start_image});
  background-size: cover;
  background-position center;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

{/*vr*/}

const VrImage = styled.div`
  background: url(${vr_image}) no-repeat;
  background-size: cover;
  background-position: center;
  left: 50%;
`;

const VrTextColom = styled.div`
padding: 100px 50px;
min-height: 500px;
background: #f5f6f6;
right: 50%;

`;

const TextColomRechts = styled.div`
padding: 100px 50px;
min-height: 500px;
background: #f5f6f6;

`;

const VrText = styled.p`

color: #0f0e11;
line-height: 1.5em;
font-size: 17px;
`;

const VrTitle = styled.h2`
  
letter-spacing: .12em;
font-weight: 600;
text-transform: uppercase;
color: #0f0e11;
padding-bottom: 15px;
`;

{/*engagement game */}
const EngagementImage = styled.div`
background: url(${engagement_image}) no-repeat;
background-size: cover;
background-position: center;
`;

{/*entertainment game */}
const EntertainmentImage = styled.div`
background: url(${enertainment_image}) no-repeat;
background-size: cover;
background-position: center;
left:50%;
`;

{/*serious game */}
const SeriousImage = styled.div`
background: url(${serious_image}) no-repeat;
background-size: cover;
background-position: center;

`;

const ButtonGroen = styled.a`
border: 0;
    background: #27ae60;
    padding: 10px 20px;
    display: inline-block;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: .12em;
    border-radius: 3px;
    font-size: 14px;
    text-align: center;
    transition: all .1s ease-in-out;
    color: #FFFFFF;
    margin: 20px 0;
    margin-bottom: 5px;
`;

const ButtonWit = styled.a`
border: 0;
    background: #fff;
    padding: 10px 20px;
    display: inline-block;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: .12em;
    border-radius: 3px;
    font-size: 14px;
    text-align: center;
    transition: all .1s ease-in-out;
    color: #252525;
    margin: 20px 0;
    margin-bottom: 5px;
`;

{/*footer */}
const Footer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
`;

const Interesse = styled.div`
  padding: 50px 25px;
  text-align: center;
  margin: 20px;
  display: block;
`;

const InteresseTitel = styled.header`
letter-spacing: .12em;
font-size: 32px;
font-weight: 600;
color: #0f0e11;
padding-bottom: 15px;
`;

const InteresseText = styled.p`
color: #0f0e11;
line-height: 2em;
font-size: 22px;
`;

// const InteresseIMG = styled.image`
// display: block;
// margin: 0 auto;
// text-align: center;
// max-width: 800px;
// width: 100%;
// margin-top: -50px;
// vertical-align: middle;
// border-style: none;
// background: url(${interesse_image}) no-repeat;
// `;



const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
