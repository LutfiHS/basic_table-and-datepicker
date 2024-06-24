import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const DefaultSidebar = () => {
  return (
    <div className="sticky left-0 z-50 bg-white h-screen">
      <Card className="flex flex-col justify-start gap-4 h-screen  min-w-52 p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List className="flex flex-col gap-2">
          <Link to="/">
            <ListItem className="flex items-center gap-2 h-10">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Pic Incentive
            </ListItem>
          </Link>

          <Link to="/employee">
            <ListItem className="flex items-center gap-2 h-10">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Employee
            </ListItem>
          </Link>
        </List>
      </Card>
    </div>
  );
};

export default DefaultSidebar;
