import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, IconButton } from "@material-ui/core";

import "./Header.css";

const Header = () => (
  <div className="header">
    <div className="header__left">
      <IconButton>
        <MenuIcon />
      </IconButton>
      <img
        src="https://images.macrumors.com/t/tOeSavAWwmT_Nsa7e67NCK_J-FA=/400x0/filters:quality(90)/article-new/2020/10/newgmaillogo.0.jpg?lossy"
        alt=""
      />
    </div>

    <div className="header__middle">
      <SearchIcon />
      <input placeholder="Search email" type="text" />
      <ArrowDownwardIcon className="header__inputCaret" />
    </div>

    <div className="header__right">
      <IconButton>
        <AppsIcon />
      </IconButton>

      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <Avatar src="https://e7.pngegg.com/pngimages/475/498/png-clipart-goofy-donald-duck-max-goof-minnie-mouse-drawing-donald-food-heroes.png" />
    </div>
  </div>
);

export default Header;
