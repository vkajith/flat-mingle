import { NextPageContext } from "next";
import { css, cx } from "emotion";
import { Button, colors, mixins, Modal, OutsideClick, Toast } from "pebble-web";
import React, { useEffect, useState } from "react";
import { MatchingFilter } from "@/components/matching-filter";

const mainDiv = css({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: colors.white.base,
  color: colors.violet.base,
  height: "100vh"
});
const headerBody = css({
  backgroundColor: colors.white.base
});
const modalBackDropStyle = css({
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
const modalContainerBody = css({
  background: colors.white.base,
  position: "fixed",
  padding: "5px 0px",
  top: 50,
  bottom: 50,
  borderRadius: 4,
  width: "85%",
  height: "85%"
});

const headerWrap = css({
  alignItems: "center",
  display: "flex",
  fontSize: 17,
  fontWeight: "bold",
  paddingTop: "20px",
  marginBottom: "4px",
  justifyContent: "space-between",
  height: "40px",
  paddingLeft: "24px",
  paddingRight: "24px"
});

const headerSection = css({
  height: "85px",
  backgroundColor: colors.violet.base,
  color: colors.white.base
});

const subheader = css({
  height: "24px",
  alignItems: "center",
  display: "flex",
  fontSize: 13,
  fontWeight: "normal",
  marginLeft: 56
});
const genericBody = css({
  overflowY: "auto",
  fontSize: 13,
  padding: "0px 12px 20px"
});
const headerSeperatorDot = css({
  width: "3px",
  height: "3px",
  background: colors.violet.lighter,
  borderRadius: "2px",
  margin: "5px 5px 0"
});
const filterContainer = css({
  "@media (min-width: 768px)": {
    borderLeft: `1px solid ${colors.gray.light}`,
    width: 400,
    position: "fixed",
    top: 85,
    bottom: 0,
    right: 0,
    zIndex: 10001,
    overflow: "scroll"
  },
  "@media (max-width: 767px)": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10001
  }
});

const blockResultMessageBox = css({
  backgroundColor: colors.white.base,
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  top: 85,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 10000
});
const successScreen = css({
  marginTop: "150px",
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});
const heading = css({
  fontSize: 13,
  fontWeight: "bold",
  marginBottom: 8
});
const textGrey = css({
  color: colors.gray.dark
});
const filterView = css({
  margin: "10px 0px"
});
const projectNaming = css({
  "@media (max-width: 360px)": {
    whiteSpace: "nowrap",
    width: "200px",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
});
const plotImageBody = css({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  overflowY: "hidden",
  backgroundColor: colors.white.base
});
const plotImageHeader = css({
  alignItems: "baseline",
  fontSize: 15,
  fontWeight: "bold",
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 30px",
  boxShadow: `0 4px 10px 0 rgba(0,0,0,0.05)`
});
export const closeBtn = css({
  cursor: "pointer",
  fontSize: 16,
  fontWeight: "normal"
});
const flatItem = css({
  padding: "10px",
  backgroundColor: colors.gray.lighter
})
const image = css({
  width: 120,
  height: 120,
  marginBottom: "24px"
});

interface Props {
  flatList: Array<string>;
}

const Flats = (props: Props) => {
  const {
    flatList
  } = props;

  const [showFilter, setShowFilter] = useState(true);
  return (
    <div className={mainDiv}>
      {
       showFilter && 
       <div className={filterContainer}>
           <MatchingFilter filter="none" onClose={()=>setShowFilter(false)}/>
       </div>
      }
      <div className={css({ padding: "15px", ...mixins.flexMiddleAlign })}>
        <img className={image} src={"../resources/Smart-Buildings-1-1024x683.jpeg"} alt={"building image"}/>
      </div>
      <div className={css({ padding: "20px"})}>
        NO Items to show
      </div>
    </div>
  );
};

Flats.userAuthGroup = "internal_panel";

Flats.getInitialProps = async ({ query}: NextPageContext) => {
  const flatList = ["AB", "LULUS"];
  return {
    flatList
  };
};

export default Flats;

