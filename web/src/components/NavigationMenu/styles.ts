import styled from "styled-components";


interface NavigationMenuContainerProps {
  "data-menu-is-open": boolean;
  "data-is-scroll-initial"?: boolean;
};

export const NavigationMenuContainer = styled.nav<NavigationMenuContainerProps>`
  width: 100%;
  min-height: 100%;

  top: 9.8rem; 

  position: fixed;
  z-index: 1;

  background: rgba(42, 20, 84, 0.5);
  backdrop-filter: blur(10px);

  transform: ${props => props["data-menu-is-open"] ? "scaleY(1)" : "scaleY(0)"};
  transform-origin: top;

  transition: all .6s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;

    align-items: center;
    
    padding-top: 3.5rem;
    gap: 3.5rem;
    
    text-align: center;
    list-style: none;
    
    li {
      cursor: pointer;
      font-size: ${props => props.theme["font-size"].exm};
      transition: .3s;
    }

    li:active {
      transition: .3s;
      transform: scale(1.15);
      opacity: .75;
    }
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    top: ${props => props["data-is-scroll-initial"] ? "13.4rem" : "9.8rem"};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    display: none;
  }
`;

