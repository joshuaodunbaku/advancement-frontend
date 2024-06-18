import styled, { createGlobalStyle } from "styled-components";

export const Hover = styled.span`
	.active {
		box-shadow: black 3px 2px 5px;
		transition: all ease-in-out 200ms;
	}
	.onHover {
		&:hover {
			box-shadow: black 3px 2px 5px;
			transition: all ease-in-out 200ms;
		}
	}
`;

export const MyContainer = styled.div`
	background-color: var(--bodyColor);
	padding: ${({ $padding_y, $padding_x }) =>
		$padding_x || $padding_y
			? `${$padding_y || "0px"} ${$padding_x || "0px"} `
			: "100px 0px"};
	min-height: ${({ height }) => height};

	.aboutShowcase {
		background-color: ${({ bgColor }) => bgColor};
	}
`;

export const GlobalStyle = createGlobalStyle`
:root {
    ///////* COLOR  *///////
    --white: white;
    --bodyColor: #f0f0e8;
    --containerColor: #242321;
    --containerColor2: #f3e8d4
    --brownishGold: #eb9747;
    --whitishBrown: #f3e8d4;
    --orange: #d68c4d;
    --faluRed: #802514;
    --dark: #201818;
    --brownOrange: #b14927;
    --sealBrown: #271109;

    ///////* FONT SIZE  *///////
    --fontSuperBig: 2.5rem;
    --fontVeryBig: 2rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  .fontMegaBig {
    font-size: 3.5;
  }
}

body {
  background-color: var(--white);
  position: relative;
      font-family: "Noto Sans", "Poppins", sans-serif !important;

  .small-caps{
    font-variant: small-caps;
  }
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jaro:opsz@6..72&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
  // <uniquifier>: Use a unique and descriptive class name
  // <weight>: Use a value from 100 to 900

    .noto-sans-font {
      font-family: "Noto Sans", "Poppins", sans-serif !important;
      font-weight: 500;
      font-style: normal;
      font-variation-settings:
        "wdth" 100;
    }

    .bungee-regular {
      font-family: "Bungee", sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    .bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
    // <uniquifier>: Use a unique and descriptive class name

  .jaro-font {
    font-family: "Jaro", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }



  .fontHumungus {
    font-size: 5.5;
  }
  .fontMegaBig {
    font-size: 3.5;
  }
  .fontSuperBig{
    font-size: 2.5rem;
  }
  .fontVeryBig{
    font-size: 2rem;
  }
  .fontBig{
    font-size: 1.5rem;
  }
  .fontMed{
    font-size: 1.2rem;
  }
  .fontSmall{
    font-size: 1rem;
  }

  .weight-300{
    font-weight: 300;
  }
  .weight-400{
    font-weight: 400;
  }
  .weight-600{
    font-weight: 600;
  }
  .weight-100{
    font-weight: 100;
  }
  .weight-200{
    font-weight: 200;
  }

}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.margin-auto{
  margin-left: 0;
  margin-right: 0;
  margin: auto;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
      font-family: "Noto Sans", "Poppins", sans-serif;
}
`;
