import styled from 'styled-components'
import { css } from 'styled-components'

export const Container = styled.section`
  .mobileVisible {
    overflow: hidden;
  }

  color: var(--white);
  position: fixed;
  overflow: hidden;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(221, 87, 165);
  background: linear-gradient(
    34deg,
    rgba(221, 87, 165, 0.8326681014202556) 0%,
    rgba(127, 0, 74, 0.9026961126247374) 73%
  );

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;
  }

  nav a {
    text-decoration: none;
    color: var(--pink-200);
    font-size: 1.2rem;
  }

  nav a:hover {
    color: var(--white);
    font-weight: bold;
  }

  .xIcon {
    cursor: pointer;
  }

  .button {
    background: white;
    border-radius: 4rem;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 2.3rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #7f004a;
    display: inline-block;
    padding: 10px 32px;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }

  .button:hover {
    background: var(--pink-700);
    color: var(--pink-200);
  }

  .social-links {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}
`
