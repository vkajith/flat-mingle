import React, { useRef } from "react";
import { css, cx } from "emotion";
import { Button, colors, mixins, Radio, Search, DropDown, OptionGroup, OptionGroupRadio, Option } from "pebble-web";
import { LeftOutline } from 'antd-mobile-icons';

const unitBox = css({
    cursor: "pointer",
    boxSizing: "border-box",
    border: `2px solid ${colors.violet.base}`,
    borderRadius: 5,
    color: colors.gray.dark,
    height: 32,
    width: 32,
    display: "flex",
    paddingLeft: "8px",
    alignItems: "center"
  });
  const unitOption = css({
    cursor: "pointer",
    boxSizing: "border-box",
    border: `2px solid ${colors.violet.base}`,
    borderRadius: 5,
    color: colors.gray.dark,
    height: 32,
    width: 96,
    display: "flex",
    paddingLeft: "8px",
    alignItems: "center"
  });
const filterHeaderWrap = css({
  alignItems: "center",
  backgroundColor: colors.violet.base,
  color: colors.white.base,
  display: "flex",
  fontSize: 13,
  height: "60px",
  justifyContent: "space-between",
  padding: "0 24px",
  zIndex: 9,
  "@media (max-width: 767px)": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0
  },
  "@media (min-width: 768px)": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  }
});
const heading = css({
  fontSize: 17,
  fontWeight: "bold"
});
const filterBody = css({
  flexGrow: 1,
  overflow: "hidden",
  padding: "60px 24px 85px"
});
const filterAttr = css({
  color: colors.gray.dark,
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: 20
});
const filterValues = css({
  display: "flex",
  alignItems: "center",
  fontSize: 13
});
const statusValues = css({
  overflowX: "scroll"
});
const floorValues = css({
  border: `1px solid ${colors.gray.light}`,
  borderRadius: 3,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: 12,
  justifyContent: "space-between",
  marginTop: 8,
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: colors.gray.lighter,
    borderColor: "transparent"
  }
});
const selectedFilterValue = css({
  backgroundColor: colors.violet.base,
  color: colors.white.base
});
const filterValue = css({
  border: `1px solid ${colors.gray.light}`,
  whiteSpace: "nowrap",
  borderRadius: 3,
  padding: "8px 20px",
  ...mixins.flexMiddleAlign,
  marginTop: 8,
  marginRight: 12
});
const floorValue = css({
  border: `1px solid ${colors.gray.light}`,
  whiteSpace: "nowrap",
  borderRadius: 3,
  padding: "8px 20px",
  ...mixins.flexMiddleAlign,
  margin: "8px 8px 0px",
  width: "45px",
  cursor: "pointer"
});
const statusValue = css({
  width: "100px",
  height: "35px"
});
const filterFooter = css({
  alignItems: "center",
  backgroundColor: colors.white.base,
  boxShadow: `0px -2px 4px ${colors.gray.light}`,
  display: "flex",
  fontSize: 13,
  height: "70px",
  justifyContent: "space-between",
  padding: "16px 24px"
});
const arrowDown = css({
  fontSize: 10,
  color: colors.gray.dark
});
const budgetValue = css({
  height: "45px",
  ...mixins.flexMiddleAlign,
  ...mixins.flexSpaceBetween,
  borderRadius: 3,
  "&:hover": {
    backgroundColor: colors.gray.lightest,
    border: `1px solid ${colors.gray.light}`
  }
});
const unitFilterBody = css({
  backgroundColor: colors.white.base,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  flex: "1 1 0",
  maxHeight: "100%",
  minHeight: 0,
  "&:-webkit-scrollbar": {
    display: " none"
  }
});
const actionEnable = css({
  cursor: "pointer"
});
const optionSection = css({
    margin: "15px 0px",
    width: "80%",
    ...mixins.flexSpaceBetween
})

interface FilterProps {
  filter: string;
  onClose: () => void;
}

const BHK_TYPES = [1,2,3,4];
const GENDERS = ["Male", "Female", "Any"];
export const MatchingFilter = (props: FilterProps) => {
  const {
    filter,
    onClose
  } = props;
  const [searchPlace, setSearchPlace] = React.useState<string>("");

  return (
    <div className={unitFilterBody}>
      <div className={filterHeaderWrap}>
        <div className={cx(heading, css({ ...mixins.flexMiddleAlign }))}>
          <LeftOutline onClick={onClose}/>
          <div className={css({ marginLeft: "15px", fontSize: "15px"})}>Looking for a Flat</div>
        </div>
      </div>
      <div className={filterBody}>
        <div className={css({ margin: "15px 0px"})}>
        <Search
            placeholder={'Enter Place'}
            onChange={query => {
                setSearchPlace(query);
            }}
            type="small"
            showSearchIcon={false}
            value={searchPlace}
        />
        </div>
        <div className={filterAttr}>Enter BHK type</div>
        <div className={optionSection}>
            {
                BHK_TYPES.map(
                    type =>
                    <div key={type} className={unitBox}>
                        {type}
                    </div>
                )
            }
        </div>
        <div className={filterAttr}>Gender Preference</div>
        <div className={optionSection}>
            {
                GENDERS.map( gender =>
                        <div key={gender} className={unitOption}>
                            {
                                gender
                            }
                        </div>
                    )
            }
        </div>
        <div className={filterAttr}>Rental Type</div>
        <DropDown
            className={css({margin: "15px 0px"})}
            buttonLabel="Select Rentals"
            initiallyOpen
            placement={"auto-start"}
         >
         {() => (
            <OptionGroupRadio onChange={() => {}}>
        <Option value="option-1" label="I am an option" />
        <Option value="option-2" label="I am an option" />
        <Option value="option-3" label="I am an option" />
        <Option value="option-4" label="I am an option" />
        <Option value="option-8" label="I am an option" />
      </OptionGroupRadio>
    )}
  </DropDown>
  <div className={filterAttr}>Furnish Type</div>
        <DropDown
            className={css({margin: "15px 0px"})}
            buttonLabel="Select Value"
            initiallyOpen
            placement={"auto-start"}
         >
         {() => (
            <OptionGroupRadio onChange={() => {}}>
        <Option value="option-1" label="I am an option" />
        <Option value="option-2" label="I am an option" />
        <Option value="option-3" label="I am an option" />
        <Option value="option-4" label="I am an option" />
        <Option value="option-8" label="I am an option" />
      </OptionGroupRadio>
    )}
  </DropDown>   
      </div>
      <Button className={css({ margin: "15px"})} onClick={() => {}} >
            Next
      </Button>
    </div>
  );
};
