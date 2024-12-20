import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="main__action pt-48">
        <a className="main__scroll" href="#">
          <div className="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" className='fill-lightP'>
              </path>
            </svg>
          </div>
          <span className="text-lightS dark:text-darkS ">Scroll</span>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Reset styles */
  a {
    text-decoration: none;
  }

  /* Main styles */

  .main__action .main__scroll-box {
    animation: bounce 1.5s infinite ease-in-out;
  }

  /* Bounce animation */
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
  }
`;

export default Button;
