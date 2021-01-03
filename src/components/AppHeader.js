import React from "react";
import { useMediaQuery } from "react-responsive";
import { Icon, Link, Logo } from "../ui/atoms";
import { IconGroup, Navbar } from "../ui/molecules";
import { Header } from "../ui/organisms";
import logo from "../assets/logo.svg";
import account from "../assets/account.svg";
import { theme } from "../theme";

export function AppHeader() {
  const isLargeDevice = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.md})`,
  });

  return (
    <Header>
      <Logo src={logo} alt='logo' />
      {isLargeDevice && (
        <Navbar>
          <Link href='#'>Equipment</Link>
          <Link href='#'>About us</Link>
          <Link href='#'>Blog</Link>
        </Navbar>
      )}

      <IconGroup>
        <Icon src={account} alt='account' />
        <Link href='#'>Account</Link>
      </IconGroup>
    </Header>
  );
}
