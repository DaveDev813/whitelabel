import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { withRouter, RouteComponentProps } from "react-router";

const ItemList: React.FC<
  { name: string; icon: any; link: string } & RouteComponentProps
> = ({ name, icon, link, history }) => {
  return (
    <ListItem button onClick={() => history.push(link)}>
      <ListItemIcon>{icon()}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

const SidebarListItems: React.FC<
  { section: "main" | "secondary" } & RouteComponentProps
> = ({ section, ...props }) => {
  return (
    <React.Fragment>
      {section === "main" ? (
        <div>
          <ItemList
            {...props}
            name="Calendar"
            icon={() => <DashboardIcon />}
            link="/dashboard/calendar"
          />
          <ItemList
            {...props}
            name="Dashboard"
            icon={() => <DashboardIcon />}
            link="/dashboard/home"
          />
          <ItemList
            {...props}
            name="Customers"
            icon={() => <PeopleIcon />}
            link="/dashboard/test"
          />
          <ItemList
            {...props}
            name="Checkout Page"
            icon={() => <PeopleIcon />}
            link="/dashboard/checkout"
          />
        </div>
      ) : (
        <div>
          <ItemList
            {...props}
            name="Settings"
            icon={() => <PeopleIcon />}
            link="/dashboard/test"
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(SidebarListItems);
