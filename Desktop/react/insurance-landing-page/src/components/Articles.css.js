import styled from "styled-components";

/* ── PAGE LAYOUT ── */

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding-top: 70px;
  background: linear-gradient(170deg, #0d0d0d 0%, #1a1a2e 40%, #16213e 100%);
  color: #e0e0e0;
  font-family: "Segoe UI", "Helvetica Neue", sans-serif;
`;

export const Layout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  gap: 40px;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 20px 16px;
    gap: 0;
  }
`;

/* ── SIDEBAR / TOC ── */

export const Sidebar = styled.aside`
  position: sticky;
  top: 80px;
  align-self: flex-start;
  width: 280px;
  flex-shrink: 0;
  max-height: calc(100vh - 100px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 210, 0, 0.3);
    border-radius: 2px;
  }

  @media (max-width: 850px) {
    position: relative;
    top: 0;
    width: 100%;
    max-height: ${(props) => (props.mobileOpen ? "60vh" : "0")};
    overflow: hidden;
    transition: max-height 0.35s ease;
  }
`;

export const TOCToggle = styled.button`
  display: none;
  width: 100%;
  padding: 14px 20px;
  background: rgba(255, 210, 0, 0.08);
  border: 1px solid rgba(255, 210, 0, 0.2);
  border-radius: 8px;
  color: #ffd200;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 12px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 210, 0, 0.14);
  }

  @media (max-width: 850px) {
    display: block;
  }
`;

export const TOCTitle = styled.h3`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #ffd200;
  margin-bottom: 20px;
  padding-left: 16px;
`;

export const TOCArticle = styled.div`
  margin-bottom: 24px;
`;

export const TOCArticleTitle = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 8px 16px;
  color: ${(props) => (props.active ? "#ffd200" : "#b0b0b0")};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border-left: 3px solid
    ${(props) => (props.active ? "#ffd200" : "transparent")};
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const TOCSection = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 5px 16px 5px 28px;
  color: ${(props) => (props.active ? "#ffd200" : "#808080")};
  font-size: 12px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: pointer;
  border-left: 3px solid
    ${(props) => (props.active ? "rgba(255,210,0,0.4)" : "transparent")};
  transition: all 0.2s;
  line-height: 1.5;

  &:hover {
    color: #ccc;
  }
`;

/* ── MAIN CONTENT ── */

export const Content = styled.main`
  flex: 1;
  min-width: 0;
`;

export const ArticleCard = styled.article`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 210, 0, 0.08);
  border-radius: 16px;
  padding: 48px 40px;
  margin-bottom: 48px;
  transition: border-color 0.3s;

  &:hover {
    border-color: rgba(255, 210, 0, 0.18);
  }

  @media (max-width: 850px) {
    padding: 28px 20px;
    margin-bottom: 28px;
    border-radius: 10px;
  }
`;

export const ArticleHeader = styled.div`
  margin-bottom: 40px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 210, 0, 0.1);
`;

export const ArticleTitle = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: #ffd200;
  letter-spacing: 1px;
  margin-bottom: 8px;
  line-height: 1.3;

  @media (max-width: 850px) {
    font-size: 22px;
  }
`;

export const ArticleSubtitle = styled.p`
  font-size: 15px;
  color: #888;
  font-weight: 400;
  line-height: 1.5;
`;

export const SectionBlock = styled.section`
  margin-bottom: 36px;
  scroll-margin-top: 90px;
`;

export const SectionHeading = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #e8e8e8;
  margin-bottom: 14px;
  padding-left: 14px;
  border-left: 3px solid #ffd200;
  line-height: 1.4;

  @media (max-width: 850px) {
    font-size: 16px;
  }
`;

export const SectionContent = styled.div`
  font-size: 15px;
  line-height: 1.8;
  color: #c0c0c0;
  white-space: pre-line;

  @media (max-width: 850px) {
    font-size: 14px;
    line-height: 1.7;
  }
`;
