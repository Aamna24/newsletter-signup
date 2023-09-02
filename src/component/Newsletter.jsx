import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";
import { Check } from "@mui/icons-material";
import EmailInput from "./EmailInput";

const ResponsiveCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const ResponsiveCardMedia = styled(CardMedia)`
  width: 100%;

  @media (min-width: 960px) {
    width: 40%;
  }
`;

const Newsletter = () => {
  const isMobile = useMediaQuery('(min-width:768px)')
  return (
    <ResponsiveCardContainer>
      <ResponsiveCardMedia
        component="img"
        alt="Card Image"
        height="auto"
        image={ isMobile ? "/assets/images/illustration-sign-up-desktop.svg" : "/assets/images/illustration-sign-up-mobile.svg"}
      />

      <CardContent
        sx={{ padding: 6}}
      >
        <Typography variant="h4" gutterBottom>
          Stay Updated!
        </Typography>
        <Typography >
          Join 60,000+ product managers receiving monthly updates on:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            <ListItemText>
              Product discovery and building what matters
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            <ListItemText>
              Measuring to ensure updates are a progress
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            <ListItemText>And much more!</ListItemText>
          </ListItem>
        </List>
        <EmailInput />
      </CardContent>
    </ResponsiveCardContainer>
  );
};

export default Newsletter;
