import { GrHomeRounded } from "react-icons/gr";
import {
  PiUsersThree,
  PiCalendarCheck,
  PiShareNetwork,
  PiNoteDuotone,
  PiNotebookBold,
} from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { BsChevronLeft } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="main-icons">
        <div className="blank-avatar"></div>
        <li className="sidebar-icon active">
          <GrHomeRounded size={12} />
        </li>
        <li className="sidebar-icon">
          <PiUsersThree size={12} />
        </li>
        <li className="sidebar-icon">
          <PiCalendarCheck size={12} />
        </li>
        <li className="sidebar-icon">
          <PiShareNetwork size={12} />
        </li>
        <li className="sidebar-icon">
          <PiNoteDuotone size={12} />
        </li>
        <li className="sidebar-icon">
          <PiNotebookBold size={12} />
        </li>
        <li className="sidebar-icon">
          <GoHeart size={12} />
        </li>
        <li className="sidebar-icon">
          <BsChevronLeft size={12} />
        </li>
      </ul>
      <div>
        <li className="sidebar-icon">
          <IoSettingsOutline size={12} />
        </li>
        <div className="initials">AS</div>
      </div>
    </nav>
  );
};

export default Sidebar;
