import Typography from "@mui/material/Typography";
import { Tab, Tabs, Toolbar } from "@mui/material";

function Header({ title }) {
  // const downloadWhitePaper = () => {
  //     console.log('downloading...');
  // };

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          sx={{ flex: 1 }}
          onClick={() => console.log("clicked")}
        >
          {title}
        </Typography>
        <Tabs value="Tax Pro">
          <Tab value="Tax Pro" label="508 Compliance" />
          <Tab
            sx={{ color: "black" }}
            label="Expertise"
            value="Expertise"
            href="https://www.boozallen.com/expertise.html"
          />
          <Tab
            sx={{ color: "black" }}
            label="Markets"
            value="Markets"
            href="https://www.boozallen.com/markets.html"
          />
          <Tab
            sx={{ color: "black" }}
            label="Insights"
            value="Insights"
            href="https://www.boozallen.com/insights.html"
          />
          <Tab
            sx={{ color: "black" }}
            label="About Us"
            value="About Us"
            href="https://www.boozallen.com/about.html"
          />
        </Tabs>
      </Toolbar>
      <Toolbar
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        <Typography variant="h6" color="inherit" noWrap sx={{ flex: 1, my: 2 }}>
          508 Compliance
        </Typography>
        {/* <Button variant='outlined' onClick={() => downloadWhitePaper()}>
                    Dowload the White Paper
                </Button> */}
      </Toolbar>
    </>
  );
}

export default Header;
