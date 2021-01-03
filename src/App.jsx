import React from "react";
import bg from "./assets/bg.png";
import { GlobalStyle } from "./globalStyles";
import {
  Background,
  BackgroundImage,
  Heading,
  Icon,
  Link,
  Title,
} from "./ui/atoms";
import { Guide, ContentContainer } from "./ui/organisms/";
import { Page } from "./ui/templates/";
import { IconGroup, Info } from "./ui/molecules/";
import arrowDown from "./assets/arrowDown.svg";
import { AppContent, AppFooter, AppHeader } from "./components";
import { content } from "./content";

export function App() {
  return (
    <>
      <GlobalStyle />

      <Background>
        <BackgroundImage src={bg} alt='' />
      </Background>

      <Page>
        <AppHeader />

        <ContentContainer>
          <Guide>
            <Info>
              <Heading accent>A HIKING GUIDE</Heading>
              <Title lg>Be prepared for the Mountains and beyond!</Title>
              <IconGroup>
                <Link>scroll down</Link>
                <Icon src={arrowDown} alt='' />
              </IconGroup>
            </Info>
          </Guide>

          {content.map((topic, idx) => (
            <AppContent
              number={idx + 1}
              heading={topic.heading}
              title={topic.title}
              text={topic.text}
              link={topic.link}
              image={topic.image}
            />
          ))}

          <AppFooter />
        </ContentContainer>
      </Page>
    </>
  );
}
