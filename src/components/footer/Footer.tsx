import React from "react";
import { useTheme } from "../../styles";
import { BoundedContainer, Column, Row, SectionLight } from "../layout";
import { Paragraph, PurpleText } from "../texts";
import { community, resources, sitemap, top_adopters } from "./data";
import { Links } from "./FooterLinks";

const Logo: React.FC = () => (
  <img
    src="/svg/rain-doge.svg"
    width="128"
    alt="logo"
    style={{ marginBottom: "1rem" }}
  />
);

const Copyright: React.FC = () => (
  <>
    <Paragraph>Copyright © 2020 YOUR COMPANY. All rights reserved.</Paragraph>
    <Paragraph>Sub Text</Paragraph>
  </>
);

const Footer: React.FC = () => {
  const { md } = useTheme().screens;

  return (
    <SectionLight style={{ padding: md ? "3rem 2rem" : "5rem 10rem" }}>
      <div>
        {md ? (
          <>
            <Logo />
            <Column>
              <Row>
                <Links data={sitemap} showImage={false} internalLink={true} />
                <Links data={resources} showImage={true} internalLink={false} />
              </Row>
              <Row>
                <Links
                  data={top_adopters}
                  showImage={false}
                  internalLink={false}
                />
                <Links data={community} showImage={true} internalLink={false} />
              </Row>
            </Column>
            <Copyright />
          </>
        ) : (
          <Row>
            <BoundedContainer
              breakpoint="sm"
              width="30%"
              margin="-1.2rem 1rem 0 0"
            >
              <Logo />
              <Copyright />
            </BoundedContainer>
            <Links data={sitemap} showImage={false} internalLink={true} />
            <Links data={resources} showImage={true} internalLink={false} />
            <Links data={top_adopters} showImage={false} internalLink={false} />
            <Links data={community} showImage={true} internalLink={false} />
          </Row>
        )}
        <div>
          <hr style={{ margin: "1rem auto" }} />
          <Paragraph style={{ textAlign: "center" }}>
            Founded by{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/arkajyotiMukherjee/"
            >
              <PurpleText
                fontSize="paragraph"
                fontWeight={400}
                underline={true}
                style={{ display: "inline" }}
              >
                YOUR COMPANY
              </PurpleText>
            </a>
            &nbsp;❤️
          </Paragraph>
        </div>
      </div>
    </SectionLight>
  );
};

export { Footer };
