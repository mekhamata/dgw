import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { MouseEventHandler } from "react";
// const NavLink = ({ children, ...props }) => {
const NavLink: React.FC<{
  activeClassName: string;
  className: string;
  href: string;
  target?: string;
  clickEvent?: MouseEventHandler;
  children?: React.ReactNode;
  title?: string;
}> = ({ children, ...props }) => {
  const router = useRouter();
  const activeLink =
    props.activeClassName === undefined ||
    props.activeClassName === "" ||
    props.activeClassName === null
      ? props.className
      : props.activeClassName;
  return props.clickEvent ? (
    <a onClick={props.clickEvent}>
      <div
        className={
          router.pathname === props.href || router.asPath === props.href
            ? activeLink
            : props.className
        }
        style={{ cursor: "pointer" }}
      >
        {props.title}
        {children !== undefined && children}
      </div>
    </a>
  ) : props.target != "" ? (
    <a href={props.href} target={props.target}>
      <>
        <div
          className={
            router.pathname === props.href || router.asPath === props.href
              ? activeLink
              : props.className
          }
          style={{ cursor: "pointer" }}
        >
          {props.title && props.title}
          {children !== undefined && children}
        </div>
      </>
    </a>
  ) : (
    <Link href={props.href} passHref>
      <>
        <div
          className={
            router.pathname === props.href || router.asPath === props.href
              ? activeLink
              : props.className
          }
          style={{ cursor: "pointer" }}
        >
          {props.title && props.title}
          {children !== undefined && children}
        </div>
      </>
    </Link>
  );
};
export default NavLink;
