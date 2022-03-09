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
          m: 1,
        }}
      >
        <Avatar sx={{ width: 100, height: 100, m: 1 }}>
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Avatar>

        {links.map((link) => {
          return (
            <MyButton key={link.title} href={link.url}>
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
