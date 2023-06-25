import React from "react";

import clsx from "clsx";

import type { Props } from "@theme/NavbarItem/HtmlNavbarItem";

export default function HtmlNavbarItem({
  value,
  className,
  mobile = false,
  isDropdownItem = false,
}: Props): JSX.Element {
  return (
    <li
      className={clsx(
        {
          navbar__item: !mobile && !isDropdownItem,
          "menu__list-item": mobile,
        },
        className,
      )}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}
