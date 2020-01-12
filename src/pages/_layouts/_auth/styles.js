import styled from 'styled-components'
import colors from '~/utils/colors'
import {darken} from 'polished'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #621055, #b52b65);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 70%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 44px;
      border-radius: 4px;
      border: 0;
      margin: 5px 0;
      background: ${'#3d5afe'};

      font-size: 16px;
      transition: background 0.2s;
      color: #fff;
      &:hover {
        background: ${darken(0.03, '#3d5afe')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 14px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
      font-family: sans-serif;
    }
  }
`
