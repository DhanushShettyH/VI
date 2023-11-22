import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const main_list = ["Prepaid", "Postpaid", "New Connection", "Explore", "Help"];

const Prepaid_list = [
  "Mobile Recharge",
  "Prepaid Plans",
  "Unlimited Plans",
  "Recommended packs",
  "Talktime Plans",
  "Data Plans",
  "Disney+ Hotstar Offer",
  "Prepaid SIM",
  "SMS packs",
];

const postpaid_list = [
  "Pay Bill Online",
  "Postpaid SIM",
  "REDX",
  "Best Postpaid Plans",
  "Postpaid Family Plans",
  "eSIM Activation",
  "Disney+ Hotstar Offer",
  "Vi MiFi",
];

const New_connection_list = [
  "Postpaid Connection ",
  "Fancy Number",
  "Port Number to Vi",
  "Prepaid to Postpaid",
  "Family Plans",
  "Prepaid Connection",
  "Free SIM Delivery",
  "Track Your SIM Delivery",
  "Self KYC",
];

const explore_list = [
  "Vi Hungama Music",
  "Vi Hero Unlimited",
  "Vi Movies & TV",
  "Callertune",
  "GIGAnet",
  "Postpaid Packs",
  "Vi Services",
  "Vi WiFi Calling",
  "Cashback Offer",
  "Vi Games",
  "Amazon Prime Offer",
  "Vi Jobs & Education",
  "Smartphone on EMI",
  "Blog",
  "Gift a recharge",
  "Sony LIV offers",
  "Sun NXT offers",
];

const help_list = ["FAQ", "Contact Us", "Track Requests", "Store Locator"];

const main_list_sublist = [
  Prepaid_list,
  postpaid_list,
  New_connection_list,
  explore_list,
  help_list,
];

function NavListMenu({ item, main_list_sublist, i }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = main_list_sublist[i].map((title, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="p"
            color="blue-gray"
            className="flex items-center text-sm"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {item}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      {main_list.slice(0, 3).map((item, i) => (
        <NavListMenu
          key={i}
          item={item}
          main_list_sublist={main_list_sublist.slice(0, 3)}
          i={i}
        />
      ))}

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium "
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          International Roaming
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Smart Phone Offers
        </ListItem>
      </Typography>

      {main_list.slice(3, 5).map((item, i) => (
        <NavListMenu
          key={i}
          item={item}
          main_list_sublist={main_list_sublist.slice(3, 5)}
          i={i}
        />
      ))}
    </List>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <header>
      <Navbar className=" w-full px-[150px] py-2 rounded-none max-w-full text-[15px] ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex flex-row">
            <img src="./vi-logo.svg" alt="logo" className=" h-12 w-12 mr-8" />
            <div className="hidden lg:block">
              <NavList />
            </div>
          </div>
          <div className="hidden gap-2 lg:flex space-x-4">
            <p className=" cursor-pointer ">Bussiness</p>
            <p className=" cursor-pointer ">Investors</p>
            <p className=" cursor-pointer text-[#e60000]">Sign In</p>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Investors
            </Button>
            <Button variant="gradient" size="sm" fullWidth>
              Sign In
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </header>
  );
}
