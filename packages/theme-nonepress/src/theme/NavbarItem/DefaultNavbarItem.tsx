import React from "react";

import type { Props } from "@theme/NavbarItem/DefaultNavbarItem";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";

export default function DefaultNavbarItem({
   
  mobile,
  ...props
}: Props): JSX.Element {
  return <NavbarNavLink {...props} />;
}
