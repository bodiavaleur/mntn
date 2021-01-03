import React from "react";
import { ColumnTitle, Link, Logo, Text } from "../ui/atoms";
import {
  Footer,
  FooterColumn,
  FooterDescription,
  FooterLinks,
} from "../ui/organisms";
import logo from "../assets/logo.svg";

export function AppFooter() {
  return (
    <Footer>
      <FooterDescription>
        <Logo src={logo} alt='logo' />
        <Text>
          Get out there & discover your next slope, mountain & destination!
        </Text>
        <Text opacity>
          Based on{" "}
          <Link
            href='https://www.figma.com/community/file/788675347108478517'
            target='_blank'
            accent
          >
            MNTN
          </Link>{" "}
          template
        </Text>
      </FooterDescription>
      <FooterLinks>
        <FooterColumn>
          <ColumnTitle accent>More on The Blog</ColumnTitle>
          <Link href='#'>About MNTN</Link>
          <Link href='#'>Contributors & Writers</Link>
          <Link href='#'>Write For Us</Link>
          <Link href='#'>Contact Us</Link>
          <Link href='#'>Privacy Policy</Link>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle accent>More on MNTN</ColumnTitle>
          <Link href='#'>The Team</Link>
          <Link href='#'>Jobs</Link>
          <Link href='#'>Press</Link>
        </FooterColumn>
      </FooterLinks>
    </Footer>
  );
}
