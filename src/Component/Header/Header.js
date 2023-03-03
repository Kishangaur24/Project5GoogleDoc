import React, { useRef,} from 'react';
 import style from './Header.module.css';
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import GoogleIcon from "@mui/icons-material/Google";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import SubscriptIcon from "@mui/icons-material/Subscript";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import TextFormatIcon from "@mui/icons-material/TextFormat";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
 import SegmentIcon from "@mui/icons-material/Segment";
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';

const Header = ({handleBold,handleItalic,handleUnderline}) => {
  const data = [
    {
      id: 1,
      icon: (
        <button className={style.btn} onClick={handleBold}>
          <FormatBoldIcon />
        </button>
      ),
    },
    {
      id: 2,
      icon: (
        <button className={style.btn} onClick={handleItalic}>
          <FormatItalicIcon />{' '}
        </button>
      ),
    },
    {
      id: 3,
      icon: (
        <button className={style.btn} onClick={handleUnderline}>
          <FormatUnderlinedIcon />{' '}
        </button>
      ),
    },
    { id: 4, icon: <GoogleIcon /> },
    { id: 5, icon: <FormatSizeIcon /> },
    { id: 6, icon: <FormatAlignCenterIcon /> },
    { id: 7, icon: <FormatAlignLeftIcon/> },
    { id: 8, icon: <FormatAlignRightIcon/> },
    { id: 9, icon: <FormatIndentDecreaseIcon /> },
    { id: 10, icon: <FormatIndentIncreaseIcon /> },
    { id: 11, icon: <SubscriptIcon/> },
    { id: 12, icon: <SuperscriptIcon/> },
    { id: 13, icon: <UnfoldMoreIcon/> },
    { id: 14, icon: <TextFormatIcon /> },
    { id: 15, icon: <FormatShapesIcon/> },
    { id: 16, icon: <SegmentIcon/> },
    { id: 17, icon: <TextDecreaseIcon/> },
    { id: 18, icon: <TextIncreaseIcon/> },
  ];

 

  return (
    <div className={style.main}>
      <div className={style.header}>
        {data.map((item) => {
          return <h2>{item.icon}</h2>;
        })}
      </div>
     
    </div>
  );
};

export default Header;
