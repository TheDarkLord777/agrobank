import styled from "styled-components";
export const MapStyled = styled.div`
  width: 100%;
  padding: 24px;
  background: white;
  border-radius: 16px;
  font-size: 18px;
`;
export const MapHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 100%;
`;
export const MapHeaderBlock = styled.div`
  font-family: ALSBoldExpanded, sans-serif;
  letter-spacing: 0.2px;
`;
export const MapHeaderSecondBlock = styled.div`
  display: flex;
  width: 450px;
  gap: 16px;
`;
export const MapImage = styled.div`
  position: relative;
  width: 520px;
  height: 376px;
  margin-left: 40px;
`;
export const MapFrags = styled.img.attrs<{ $id: string }>((props) => ({
  ...props,
}))`
  position: absolute;
  display: inline-block;
  clip-path: url(${({ $id }) => `#${$id}`});
  background-color: #cbd5e0;

  &:hover {
    zoom: 1.01;
    opacity: 1;
    background-color: #a0aec0;
    cursor: pointer;
  }
`;
export const MapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
