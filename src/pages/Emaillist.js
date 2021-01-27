import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import "./Emaillist.css";

import Section from "../components/Section";
import EmailRow from "../components/EmailRow";

const Emaillist = () => (
  <div className="emaillist">
    <div className="emaillist__settings">
      <div className="emaillist__settingsLeft">
        <Checkbox />

        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>

        <IconButton>
          <RedoIcon />
        </IconButton>

        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>

      <div className="emaillist__settingsRight">
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>

        <IconButton>
          <ChevronRightIcon />
        </IconButton>

        <IconButton>
          <KeyboardHideIcon />
        </IconButton>

        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
    <div className="emaillist__sections">
      <Section Icon={InboxIcon} title="primary" color="red" selected />
      <Section Icon={PeopleIcon} title="social" color="#1A73E8" />
      <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
    </div>

    <div className="emaillist__list">
      <EmailRow
        title="twitch"
        subject=" hi hier ist daniel"
        description="hallo hallo"
        time="10uhr"
      />
    </div>

    <div className="emaillist__list">
      <EmailRow
        title="twitch"
        subject="hi hier ist daniel"
        description=" hallo hallo wie geht es dir so den mir geht es gut"
        time="10uhr"
      />
    </div>
  </div>
);

export default Emaillist;
