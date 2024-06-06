import { globalStyle } from "@vanilla-extract/css";
import { variable } from "./variables.css";

const globalStyles = [
    globalStyle(':root', {
      fontSize: '62.5%',
      color: variable.white,
      background: 'linear-gradient(122deg, #030009 -11.05%, #03000A 104.5%)',
    }),
    globalStyle('*', {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased',
      fontFamily: variable.fontTexts,
    }),
    globalStyle('img', {
      maxWidth: '100%',
      display: 'block',
    }),
    globalStyle('a', {
      display: 'block',
      textDecoration: 'none',
    }),
    globalStyle('button', {
      all: 'unset',
      border: 0,
      cursor: 'pointer',
    }),
    globalStyle('ul', {
      listStyle: 'none',
    }),
    globalStyle('.none', {
      display: 'none',
    }),
    globalStyle('.container', {
      width: '100%',
      padding: '0 1.5rem',
      maxWidth: '124.6rem',
      margin: '0 auto',
    }),
    globalStyle('h1, h2, h3, h4, h5, h6', {
      fontFamily: variable.fontTitle,
      fontWeight: 700,
      lineHeight: variable.lineHeight.short,
    }),
    globalStyle('h1', {
      fontSize: '5.6rem',
    }),
    globalStyle('h2', {
      fontSize: '4.8rem',
    }),
    globalStyle('h3', {
      fontSize: '4rem',
    }),
    globalStyle('h4', {
      fontSize: '3.2rem',
    }),
    globalStyle('h5', {
      fontSize: '2.8rem',
    }),
    globalStyle('p', {
      lineHeight: variable.lineHeight.base,
    }),
  ];