import { Avatar, Box, Button } from "@mui/material";
import { GetStaticProps } from "next";
import Image from "next/image";
import MyButton from "../components/MyButton";
import linksQuery from "../graphql/queries/links.graphql";
import client from "../lib/graphqlClient";
import logo from "../../public/lego.webp";

export default function Bio({ links }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ m: 1 }}>
          <Avatar sx={{ width: 100, height: 100 }}>
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              layout="fixed"
            />
          </Avatar>
        </Box>

        {links.map((link, i) => {
          return (
            <MyButton
              key={"link" + i}
              href={link.url}
              target="_blank"
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.secondary.contrastText,
                m: 2,
              }}
            >
              {link.title}
            </MyButton>
          );
        })}
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: linksQuery });

  return {
    props: {
      links: data.links,
    },
  };
};
