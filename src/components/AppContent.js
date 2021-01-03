import React from "react";
import { Heading, Icon, Link, Text, Title } from "../ui/atoms";
import { IconGroup, Info, InfoNumber } from "../ui/molecules";
import { Content, ContentImage } from "../ui/organisms";
import arrowRight from "../assets/arrowRight.svg";

export function AppContent({ number, heading, title, text, link, image }) {
  const formatNumber = `0${number}`;
  const isReversed = number % 2 === 0;

  return (
    <Content reverse={isReversed}>
      <Info>
        <InfoNumber>{formatNumber}</InfoNumber>
        <Heading accent>{heading}</Heading>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <IconGroup>
          <Link accent href={link}>
            read more
          </Link>
          <Icon src={arrowRight} alt='arrow' />
        </IconGroup>
      </Info>
      <ContentImage src={image} alt='image' />
    </Content>
  );
}
