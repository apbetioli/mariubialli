import { Avatar, Box } from "@mui/material";
import { GetStaticProps } from "next";
import Image from "next/image";
import MyButton from "../components/MyButton";
import bioQuery from "../graphql/queries/bio.graphql";
import client from "../lib/graphqlClient";

export default function Bio({ avatar, links }) {
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
          <Image src={avatar.url} alt="Avatar" width={100} height={100} />
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
  const { data } = await client.query({
    query: bioQuery,
    variables: { slug: "mariubialli" },
  });

  return {
    props: data.bio,
  };
};
