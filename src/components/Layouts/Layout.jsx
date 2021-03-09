import React from "react";
import OurNavbar from "../Navbars/OurNavbar";
import OurFooter from "../Footers/OurFooter";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <OurNavbar />
      {children}
      <OurFooter />
    </>
  );
}
