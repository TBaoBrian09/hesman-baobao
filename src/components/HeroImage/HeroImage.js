import styled from "styled-components";
const HeroImageStyles = styled.div`
  .hero--container {
    position: absolute;
    width: 100%;
    height: 100%;

    .hero__cloud--legand {
      width: 100%;
      z-index: 99;
      img {
        max-width: 272px;

        @media screen and (max-width: 426px) {
          max-width: 150px;
        }
      }
    }
  }
`;

const HeroImage = () => {
  return (
    <div className="hero__present flex justify-end">
      <img
        src="https://hesman.net/wp-content/uploads/2022/03/Hero-3.svg"
        alt=""
      />
    </div>
  );
};

export default HeroImage;
